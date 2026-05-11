# Реферальная система для агентов и пользователей

## Как это работает в реальной недвижимости

В международной практике (Sotheby's, Re/Max, Engel & Völkers, российские/болгарские агентства) применяются три модели, которые мы объединим:

1. **Refer-a-Friend (двусторонний бонус)** — пользователь приводит покупателя, получает % от комиссии агентства при закрытии сделки.
2. **Property-specific tracking** — у каждого объекта своя UTM-метка с ID реферера, чтобы видеть, кто именно привёл лид на конкретный лот.
3. **Tiered commission** — чем больше успешных сделок, тем выше %.

### Предлагаемая схема вознаграждения

| Уровень | Закрытых сделок | Бонус от комиссии агентства | Бонус новому покупателю |
|---|---|---|---|
| Bronze | 0–2 | 10% | €200 кэшбэк |
| Silver | 3–5 | 15% | €350 кэшбэк |
| Gold | 6+ | 20% | €500 кэшбэк |

Выплаты — после нотариального оформления и получения комиссии. Это стандарт для болгарского рынка, исключает фрод.

Дополнительно:
- **Lead bonus**: €25 за квалифицированный визит (просмотр объекта + контакт), даже если сделка не закрыта.
- **Coming-soon properties** не дают cash-бонус, только лид-бонус.

## Что увидит пользователь

### В кабинете (`/dashboard` → новая вкладка «Referrals»)
- Персональный реферальный код (например `NICS-A8F2K`) — генерится при регистрации.
- Общая ссылка-приглашение: `https://nicsestate.com/?ref=NICS-A8F2K`
- Текущий уровень (Bronze/Silver/Gold) + прогресс-бар до следующего.
- Статистика: клики, регистрации, визиты, закрытые сделки, заработано / выплачено / в ожидании.
- Таблица «Мои рефералы» (имя без e-mail для приватности, статус: clicked / signed-up / visited / closed, сумма бонуса).
- Список объектов с готовыми ссылками: каждая кнопка «Поделиться» формирует `https://nicsestate.com/property/{id}?ref=NICS-A8F2K&utm_source=referral` и кнопки share в WhatsApp / Telegram / Viber / Email / копировать.
- Реквизиты для выплаты (банковский счёт IBAN или crypto-кошелёк) — заполняется один раз.

### На странице объекта
- Если реферальный код в URL — баннер: «Вас пригласил партнёр NICS. Получите кэшбэк €200 при покупке».
- Скрытое сохранение `ref` в cookie (90 дней) и в `localStorage`, чтобы атрибутировать сделку даже после нескольких визитов.
- Кнопка «Запросить визит» уже передаёт `referral_code` в WhatsApp-шаблон и сохраняет в `referral_events`.

### Для админа (`/admin` → новая вкладка «Referrals»)
- Список всех рефереров с метриками.
- Подтверждение события «closed» вручную (после нотариуса) — переводит бонус в статус «approved».
- Кнопка «Mark as paid» с указанием транзакции.

## Техническая реализация

### Database (миграция)

```sql
-- Уникальный код у каждого пользователя
ALTER TABLE profiles
  ADD COLUMN referral_code TEXT UNIQUE,
  ADD COLUMN referred_by TEXT,           -- код того, кто привёл этого юзера
  ADD COLUMN payout_method TEXT,          -- 'bank' | 'crypto'
  ADD COLUMN payout_details JSONB;

-- Генератор кода (8 символов, base32 без похожих букв)
CREATE FUNCTION generate_referral_code() RETURNS TEXT ...;

-- Триггер: при INSERT в profiles → присвоить уникальный referral_code
CREATE TRIGGER assign_referral_code BEFORE INSERT ON profiles ...;

-- События по воронке
CREATE TABLE referral_events (
  id UUID PK,
  referrer_user_id UUID NOT NULL,         -- кому начисляем
  referred_user_id UUID,                  -- кого привели (если зарегистрировался)
  property_id UUID,                       -- какой объект (опционально)
  event_type TEXT,                        -- 'click' | 'signup' | 'visit_requested' | 'deal_closed'
  session_id TEXT,                        -- для дедупликации кликов
  metadata JSONB,                          -- ip-хэш, user-agent, source
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Бонусы / выплаты
CREATE TABLE referral_rewards (
  id UUID PK,
  referrer_user_id UUID NOT NULL,
  event_id UUID REFERENCES referral_events,
  property_id UUID,
  amount_eur NUMERIC NOT NULL,
  reward_type TEXT,                        -- 'lead' | 'commission' | 'cashback'
  status TEXT DEFAULT 'pending',           -- 'pending' | 'approved' | 'paid' | 'rejected'
  approved_by UUID,
  approved_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,
  payout_reference TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Уровень считаем функцией по числу 'deal_closed' событий
CREATE FUNCTION get_referral_tier(_user_id UUID) RETURNS TEXT ...;
```

### RLS
- `referral_events`: insert — public (для трекинга кликов); select — только владелец (`referrer_user_id = auth.uid()`) или admin.
- `referral_rewards`: select — владелец или admin; update — только admin.
- `profiles.payout_details` остаётся под существующей политикой «own profile».

### Frontend

Новые / изменённые файлы:
- `src/lib/referral.ts` — утилиты: чтение `?ref=` из URL, сохранение в cookie на 90 дней, отправка `click`-события (с дедупом по `session_id` в localStorage), генерация share-ссылок.
- `src/components/dashboard/DashboardReferrals.tsx` — новая вкладка кабинета с тремя секциями: Overview, My Properties (share), Payout settings.
- `src/components/dashboard/ReferralShareCard.tsx` — карточка объекта с кнопками WhatsApp / Telegram / Viber / Copy.
- `src/components/ReferralBanner.tsx` — баннер на `PropertyDetails`, если есть `?ref=`.
- `src/pages/Dashboard.tsx` — добавить вкладку «Referrals».
- `src/pages/Auth.tsx` — при signup читать `referred_by` из cookie и сохранить в `profiles`.
- `src/pages/PropertyDetails.tsx` — атрибуция визита (передавать `referral_code` при schedule visit и в `contact_submissions`).
- `src/components/dashboard/admin/AdminReferrals.tsx` (внутри `Dashboard` для admin-роли) — таблица рефералов, кнопки approve / mark paid.

### Edge function (опционально, минимально)
- `track-referral-click` — принимает `ref_code` + `property_id` + `session_id`, валидирует код, пишет событие. Альтернатива — клиентская запись через RLS-insert (проще, выберем этот путь).

### i18n
- Добавить блок `referrals.*` во все 5 файлов локалей (en/bg/ru/de/it): заголовки, описание схемы, статусы, кнопки share.

## Что важно знать

- Реальные суммы выплат настраиваем после первой сделки (значения в таблице — стартовые).
- Закрытие сделки и сумму комиссии подтверждает только админ — это защита от фрода и стандарт болгарского рынка (выплата после нотариуса).
- Cookie/localStorage attribution = 90 дней, last-click модель (как у большинства партнёрок недвижимости).
- Никаких e-mail рефералов в публичном UI — только маскированные имена, GDPR-friendly.

## Порядок выполнения

1. Миграция БД (таблицы, триггеры, RLS, функции tier).
2. `referral.ts` + перехват `?ref=` в `App.tsx`.
3. Привязка `referred_by` в Auth + share-инструменты в кабинете.
4. Атрибуция визитов и контактов на `PropertyDetails`.
5. Админ-панель подтверждения наград.
6. i18n + баннер + полировка.

После одобрения начну с миграции БД одним шагом, дождусь подтверждения и продолжу кодом.
