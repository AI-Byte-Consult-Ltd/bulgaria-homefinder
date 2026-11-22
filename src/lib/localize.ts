/**
 * Language helpers shared by listing cards, the property page and search.
 */
export const SUPPORTED_LANGS = ['en', 'de', 'bg', 'pl', 'ru', 'it'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

/** Normalise "ru-RU" → "ru"; unknown languages fall back to English. */
export const normalizeLang = (raw?: string | null): Lang => {
  const code = (raw || 'en').split('-')[0].toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(code) ? (code as Lang) : 'en';
};

const SUFFIX: Record<Lang, string> = {
  en: '', de: 'De', bg: 'Bg', pl: 'Pl', ru: 'Ru', it: 'It',
};

const SNAKE: Record<Lang, string> = {
  en: '', de: '_de', bg: '_bg', pl: '_pl', ru: '_ru', it: '_it',
};

/**
 * Pick the localised variant of a listing field (title / location / description),
 * e.g. `titleDe` for German, falling back to the English base field.
 */
export const localized = (item: any, field: string, lang: string): string => {
  const l = normalizeLang(lang);
  return (
    (l !== 'en' && (item?.[`${field}${SUFFIX[l]}`] || item?.[`${field}${SNAKE[l]}`])) ||
    item?.[field] ||
    ''
  );
};

/** Locale used for number formatting per interface language. */
export const NUMBER_LOCALE: Record<Lang, string> = {
  en: 'en-GB', de: 'de-DE', bg: 'bg-BG', pl: 'pl-PL', ru: 'ru-RU', it: 'it-IT',
};

export const formatEur = (price: number, lang: string): string =>
  `${new Intl.NumberFormat(NUMBER_LOCALE[normalizeLang(lang)], { maximumFractionDigits: 0 })
    .format(price)
    .replace(/ | /g, ' ')} €`;
