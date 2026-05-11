import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Share2, Wallet, TrendingUp, Users, MousePointerClick, Trophy } from 'lucide-react';
import { toast } from 'sonner';
import { mockProperties } from '@/data/mockProperties';
import {
  buildReferralLink, buildShareUrl, REFERRAL_TIERS, tierFromClosedDeals, type ReferralTier,
} from '@/lib/referral';

interface Profile {
  id: string;
  referral_code: string | null;
  referred_by: string | null;
  payout_method: string | null;
  payout_details: any;
}

interface RewardRow {
  id: string;
  amount_eur: number;
  reward_type: string;
  status: string;
  property_id: string | null;
  created_at: string;
}

interface EventRow {
  id: string;
  event_type: string;
  property_id: string | null;
  created_at: string;
}

export const DashboardReferrals = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [rewards, setRewards] = useState<RewardRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [payoutMethod, setPayoutMethod] = useState<string>('bank');
  const [payoutIban, setPayoutIban] = useState('');
  const [payoutHolder, setPayoutHolder] = useState('');
  const [payoutCrypto, setPayoutCrypto] = useState('');
  const [savingPayout, setSavingPayout] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      const [{ data: p }, { data: ev }, { data: rw }] = await Promise.all([
        supabase.from('profiles').select('id, referral_code, referred_by, payout_method, payout_details').eq('id', user.id).maybeSingle(),
        supabase.from('referral_events').select('id, event_type, property_id, created_at').eq('referrer_user_id', user.id).order('created_at', { ascending: false }),
        supabase.from('referral_rewards').select('id, amount_eur, reward_type, status, property_id, created_at').eq('referrer_user_id', user.id).order('created_at', { ascending: false }),
      ]);
      setProfile(p as Profile | null);
      setEvents((ev ?? []) as EventRow[]);
      setRewards((rw ?? []) as RewardRow[]);
      if (p) {
        setPayoutMethod(p.payout_method || 'bank');
        const d = (p.payout_details as any) || {};
        setPayoutIban(d.iban || '');
        setPayoutHolder(d.holder || '');
        setPayoutCrypto(d.address || '');
      }
      setLoading(false);
    })();
  }, [user]);

  const stats = useMemo(() => {
    const counts: Record<string, number> = {
      click: 0, signup: 0, visit_requested: 0, contact: 0, deal_closed: 0,
    };
    events.forEach(e => { counts[e.event_type] = (counts[e.event_type] || 0) + 1; });
    const earned = rewards.filter(r => r.status === 'paid').reduce((s, r) => s + Number(r.amount_eur), 0);
    const pending = rewards.filter(r => r.status === 'pending' || r.status === 'approved').reduce((s, r) => s + Number(r.amount_eur), 0);
    return { counts, earned, pending };
  }, [events, rewards]);


  const tier: ReferralTier = tierFromClosedDeals(stats.counts.deal_closed || 0);
  const tierInfo = REFERRAL_TIERS[tier];
  const nextTier: ReferralTier | null = tier === 'bronze' ? 'silver' : tier === 'silver' ? 'gold' : null;
  const progress = nextTier ? ((stats.counts.deal_closed || 0) / REFERRAL_TIERS[nextTier].minDeals) * 100 : 100;

  const generalLink = profile?.referral_code ? buildReferralLink(profile.referral_code) : '';

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t('referrals.copied', 'Скопировано'));
  };

  const savePayout = async () => {
    if (!user) return;
    setSavingPayout(true);
    const details = payoutMethod === 'bank'
      ? { iban: payoutIban.trim(), holder: payoutHolder.trim() }
      : { address: payoutCrypto.trim() };
    const { error } = await supabase
      .from('profiles')
      .update({ payout_method: payoutMethod, payout_details: details })
      .eq('id', user.id);
    setSavingPayout(false);
    if (error) toast.error(error.message);
    else toast.success(t('referrals.payoutSaved', 'Реквизиты сохранены'));
  };

  const userProperties = useMemo(() => {
    // Show first 24 published properties as shareable inventory
    return mockProperties.slice(0, 24);
  }, []);

  if (loading) {
    return <div className="text-muted-foreground">{t('common.loading')}</div>;
  }

  if (!profile?.referral_code) {
    return <div className="text-muted-foreground">{t('referrals.noCode', 'Реферальный код ещё не создан. Перезагрузите страницу.')}</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header card */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                {t('referrals.title', 'Реферальная программа')}
              </CardTitle>
              <CardDescription>
                {t('referrals.subtitle', 'Приглашайте покупателей и получайте % от комиссии агентства')}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-base px-3 py-1 capitalize">
              {tierInfo.label} • {tierInfo.commissionPct}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{t('referrals.yourCode', 'Ваш код')}</Label>
            <div className="flex gap-2">
              <Input readOnly value={profile.referral_code} className="font-mono" />
              <Button variant="outline" size="icon" onClick={() => copy(profile.referral_code!)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t('referrals.invitationLink', 'Ссылка-приглашение')}</Label>
            <div className="flex gap-2">
              <Input readOnly value={generalLink} />
              <Button variant="outline" size="icon" onClick={() => copy(generalLink)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {nextTier && (
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {t('referrals.progressTo', 'До уровня')} {REFERRAL_TIERS[nextTier].label}
                </span>
                <span className="font-medium">
                  {stats.counts.deal_closed || 0} / {REFERRAL_TIERS[nextTier].minDeals} {t('referrals.deals', 'сделок')}
                </span>
              </div>
              <Progress value={Math.min(progress, 100)} />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
        <StatCard icon={<MousePointerClick className="h-4 w-4" />} label={t('referrals.clicks', 'Клики')} value={stats.counts.click || 0} />
        <StatCard icon={<Users className="h-4 w-4" />} label={t('referrals.signups', 'Регистрации')} value={stats.counts.signup || 0} />
        <StatCard icon={<TrendingUp className="h-4 w-4" />} label={t('referrals.visits', 'Визиты')} value={stats.counts.visit_requested || 0} />
        <StatCard icon={<Trophy className="h-4 w-4" />} label={t('referrals.closed', 'Сделки')} value={stats.counts.deal_closed || 0} />
        <StatCard icon={<Wallet className="h-4 w-4" />} label={t('referrals.earned', 'Заработано')} value={`€${stats.earned.toLocaleString()}`} hint={`€${stats.pending.toLocaleString()} ${t('referrals.pending', 'в ожидании')}`} />
      </div>

      <Tabs defaultValue="properties" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full lg:w-auto">
          <TabsTrigger value="properties">{t('referrals.tabProperties', 'Объекты')}</TabsTrigger>
          <TabsTrigger value="rewards">{t('referrals.tabRewards', 'Бонусы')}</TabsTrigger>
          <TabsTrigger value="payout">{t('referrals.tabPayout', 'Выплаты')}</TabsTrigger>
        </TabsList>

        <TabsContent value="properties">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('referrals.shareProperties', 'Делитесь объектами')}</CardTitle>
              <CardDescription>
                {t('referrals.sharePropertiesDesc', 'Каждая ссылка содержит ваш код — все клики и сделки автоматически будут засчитаны вам.')}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {userProperties.map(p => {
                const link = buildReferralLink(profile.referral_code!, p.id);
                const msg = `${p.title} — €${p.price?.toLocaleString?.() ?? p.price}`;
                return (
                  <div key={p.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex gap-3">
                      <img src={p.image} alt={p.title} className="w-16 h-16 rounded object-cover shrink-0" loading="lazy" />
                      <div className="min-w-0">
                        <p className="font-medium text-sm line-clamp-2">{p.title}</p>
                        <p className="text-xs text-muted-foreground">{p.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <Button size="sm" variant="outline" className="h-8 text-xs" asChild>
                        <a href={buildShareUrl('whatsapp', link, msg)} target="_blank" rel="noreferrer">WhatsApp</a>
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 text-xs" asChild>
                        <a href={buildShareUrl('telegram', link, msg)} target="_blank" rel="noreferrer">Telegram</a>
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 text-xs" asChild>
                        <a href={buildShareUrl('viber', link, msg)} target="_blank" rel="noreferrer">Viber</a>
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 text-xs gap-1" onClick={() => copy(link)}>
                        <Copy className="h-3 w-3" /> {t('referrals.copy', 'Копировать')}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('referrals.tabRewards', 'Бонусы')}</CardTitle>
              <CardDescription>
                Bronze 10% • Silver 15% • Gold 20% — {t('referrals.rewardsHint', 'выплата после нотариуса')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {rewards.length === 0 ? (
                <p className="text-muted-foreground text-sm">{t('referrals.noRewards', 'Пока нет начислений')}</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('referrals.date', 'Дата')}</TableHead>
                      <TableHead>{t('referrals.type', 'Тип')}</TableHead>
                      <TableHead>{t('referrals.status', 'Статус')}</TableHead>
                      <TableHead className="text-right">{t('referrals.amount', 'Сумма')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rewards.map(r => (
                      <TableRow key={r.id}>
                        <TableCell>{new Date(r.created_at).toLocaleDateString()}</TableCell>
                        <TableCell className="capitalize">{r.reward_type}</TableCell>
                        <TableCell>
                          <Badge variant={r.status === 'paid' ? 'default' : r.status === 'rejected' ? 'destructive' : 'secondary'}>
                            {r.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">€{Number(r.amount_eur).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payout">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('referrals.tabPayout', 'Выплаты')}</CardTitle>
              <CardDescription>
                {t('referrals.payoutDesc', 'Укажите реквизиты для получения вознаграждения')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 max-w-sm">
                <Label>{t('referrals.payoutMethod', 'Способ')}</Label>
                <Select value={payoutMethod} onValueChange={setPayoutMethod}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">{t('referrals.bank', 'Банковский перевод')}</SelectItem>
                    <SelectItem value="crypto">{t('referrals.crypto', 'Криптовалюта (USDT TRC-20)')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {payoutMethod === 'bank' ? (
                <div className="grid gap-3 sm:grid-cols-2 max-w-2xl">
                  <div className="space-y-2">
                    <Label>IBAN</Label>
                    <Input value={payoutIban} onChange={e => setPayoutIban(e.target.value)} placeholder="BG00..." />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('referrals.accountHolder', 'Получатель')}</Label>
                    <Input value={payoutHolder} onChange={e => setPayoutHolder(e.target.value)} />
                  </div>
                </div>
              ) : (
                <div className="space-y-2 max-w-md">
                  <Label>{t('referrals.cryptoAddress', 'Адрес кошелька')}</Label>
                  <Input value={payoutCrypto} onChange={e => setPayoutCrypto(e.target.value)} placeholder="T..." />
                </div>
              )}

              <Button onClick={savePayout} disabled={savingPayout}>
                {savingPayout ? t('common.loading') : t('referrals.savePayout', 'Сохранить')}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const StatCard = ({ icon, label, value, hint }: { icon: React.ReactNode; label: string; value: number | string; hint?: string }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
        {icon}<span>{label}</span>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
      {hint && <div className="text-xs text-muted-foreground mt-0.5">{hint}</div>}
    </CardContent>
  </Card>
);
