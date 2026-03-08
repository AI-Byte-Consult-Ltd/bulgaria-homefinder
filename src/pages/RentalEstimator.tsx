import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calculator, TrendingUp, Sun, Snowflake, CalendarDays } from 'lucide-react';

// Average daily rates (EUR) by region & season for short-term rental
const REGION_DATA: Record<string, { shortHigh: number; shortLow: number; longTerm: number; occupancyHigh: number; occupancyLow: number; label: string }> = {
  'sunny-beach':   { shortHigh: 55, shortLow: 20, longTerm: 350, occupancyHigh: 0.80, occupancyLow: 0.15, label: 'Sunny Beach' },
  'saint-vlas':    { shortHigh: 60, shortLow: 22, longTerm: 380, occupancyHigh: 0.75, occupancyLow: 0.12, label: 'Saint Vlas' },
  'nessebar':      { shortHigh: 50, shortLow: 18, longTerm: 320, occupancyHigh: 0.78, occupancyLow: 0.14, label: 'Nessebar' },
  'burgas':        { shortHigh: 40, shortLow: 18, longTerm: 300, occupancyHigh: 0.65, occupancyLow: 0.25, label: 'Burgas' },
  'varna':         { shortHigh: 45, shortLow: 20, longTerm: 350, occupancyHigh: 0.70, occupancyLow: 0.30, label: 'Varna' },
  'golden-sands':  { shortHigh: 50, shortLow: 18, longTerm: 330, occupancyHigh: 0.82, occupancyLow: 0.10, label: 'Golden Sands' },
  'sofia':         { shortHigh: 45, shortLow: 30, longTerm: 400, occupancyHigh: 0.60, occupancyLow: 0.45, label: 'Sofia' },
  'plovdiv':       { shortHigh: 35, shortLow: 22, longTerm: 280, occupancyHigh: 0.55, occupancyLow: 0.35, label: 'Plovdiv' },
  'bansko':        { shortHigh: 55, shortLow: 15, longTerm: 300, occupancyHigh: 0.75, occupancyLow: 0.20, label: 'Bansko' },
  'sozopol':       { shortHigh: 50, shortLow: 15, longTerm: 300, occupancyHigh: 0.78, occupancyLow: 0.10, label: 'Sozopol' },
  'pamporovo':     { shortHigh: 45, shortLow: 12, longTerm: 250, occupancyHigh: 0.70, occupancyLow: 0.15, label: 'Pamporovo' },
  'other':         { shortHigh: 30, shortLow: 15, longTerm: 200, occupancyHigh: 0.50, occupancyLow: 0.20, label: 'Other' },
};

interface Estimate {
  shortTermAnnual: number;
  longTermAnnual: number;
  seasonalBreakdown: { season: string; months: number; income: number; icon: React.ReactNode }[];
  roi: number;
}

const RentalEstimator = () => {
  const { t } = useTranslation();
  const [region, setRegion] = useState('');
  const [bedrooms, setBedrooms] = useState('1');
  const [propertyValue, setPropertyValue] = useState('');
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const calculate = () => {
    const data = REGION_DATA[region];
    if (!data) return;

    const beds = Math.max(1, parseInt(bedrooms) || 1);
    const bedroomMultiplier = 1 + (beds - 1) * 0.35;

    // High season: Jun-Sep (4 months), Low season: Oct-May (8 months)
    const highSeasonDays = 122; // ~4 months
    const lowSeasonDays = 243;  // ~8 months

    const highIncome = Math.round(data.shortHigh * bedroomMultiplier * data.occupancyHigh * highSeasonDays);
    const lowIncome = Math.round(data.shortLow * bedroomMultiplier * data.occupancyLow * lowSeasonDays);
    const shortTermAnnual = highIncome + lowIncome;

    const longTermAnnual = Math.round(data.longTerm * bedroomMultiplier * 12);

    const value = parseFloat(propertyValue) || 0;
    const roi = value > 0 ? (shortTermAnnual / value) * 100 : 0;

    setEstimate({
      shortTermAnnual,
      longTermAnnual,
      seasonalBreakdown: [
        { season: t('estimator.highSeason', 'High Season (Jun–Sep)'), months: 4, income: highIncome, icon: <Sun className="h-5 w-5 text-amber-500" /> },
        { season: t('estimator.lowSeason', 'Low Season (Oct–May)'), months: 8, income: lowIncome, icon: <Snowflake className="h-5 w-5 text-blue-400" /> },
      ],
      roi,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={t('estimator.pageTitle', 'Rental Income Estimator — Bulgaria Property')}
        description="Estimate potential rental income for your Bulgarian property. Calculate short-term, long-term and seasonal returns by region."
        path="/tools/rental-estimator"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools/rental-estimator' },
          { name: 'Rental Estimator', url: '/tools/rental-estimator' },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container text-center">
            <Badge variant="outline" className="mb-4">
              <Calculator className="h-3.5 w-3.5 mr-1" />
              {t('estimator.badge', 'Free Tool')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('estimator.title', 'Rental Income Estimator')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('estimator.subtitle', 'Estimate how much you could earn from renting your Bulgarian property')}
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('estimator.propertyDetails', 'Property Details')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <Label>{t('estimator.region', 'Region')}</Label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger><SelectValue placeholder={t('estimator.selectRegion', 'Select region')} /></SelectTrigger>
                      <SelectContent>
                        {Object.entries(REGION_DATA).map(([key, d]) => (
                          <SelectItem key={key} value={key}>{d.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>{t('common.bedrooms', 'Bedrooms')}</Label>
                    <Select value={bedrooms} onValueChange={setBedrooms}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {['1','2','3','4','5'].map(n => (
                          <SelectItem key={n} value={n}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>{t('estimator.propertyValue', 'Property Value (€)')}</Label>
                    <Input
                      type="number"
                      placeholder="e.g. 75000"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                      min="0"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {t('estimator.optionalROI', 'Optional — used to calculate ROI')}
                    </p>
                  </div>

                  <Button onClick={calculate} disabled={!region} className="w-full gap-2">
                    <TrendingUp className="h-4 w-4" />
                    {t('estimator.calculate', 'Calculate Estimate')}
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {!estimate ? (
                  <Card className="h-full flex items-center justify-center">
                    <CardContent className="text-center text-muted-foreground py-12">
                      <Calculator className="h-12 w-12 mx-auto mb-4 opacity-30" />
                      <p>{t('estimator.enterDetails', 'Enter property details to see your estimated rental income')}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    {/* Annual summaries */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="border-primary/30">
                        <CardContent className="pt-6 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {t('estimator.shortTerm', 'Short-Term Rental')}
                          </p>
                          <p className="text-3xl font-bold text-primary">€{estimate.shortTermAnnual.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{t('estimator.perYear', '/year')}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {t('estimator.longTerm', 'Long-Term Rental')}
                          </p>
                          <p className="text-3xl font-bold">€{estimate.longTermAnnual.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{t('estimator.perYear', '/year')}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Seasonal breakdown */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          {t('estimator.seasonalBreakdown', 'Seasonal Breakdown (Short-Term)')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {estimate.seasonalBreakdown.map((s) => (
                          <div key={s.season} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-3">
                              {s.icon}
                              <div>
                                <p className="text-sm font-medium">{s.season}</p>
                                <p className="text-xs text-muted-foreground">{s.months} {t('estimator.months', 'months')}</p>
                              </div>
                            </div>
                            <p className="font-semibold">€{s.income.toLocaleString()}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* ROI */}
                    {estimate.roi > 0 && (
                      <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="pt-6 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {t('estimator.estimatedROI', 'Estimated ROI (Short-Term)')}
                          </p>
                          <p className="text-4xl font-bold text-green-600">{estimate.roi.toFixed(1)}%</p>
                          <p className="text-xs text-muted-foreground">{t('estimator.annual', 'annual')}</p>
                        </CardContent>
                      </Card>
                    )}

                    <p className="text-xs text-muted-foreground text-center">
                      {t('estimator.disclaimer', '* Estimates are based on average market data and may vary. Actual income depends on property condition, amenities, marketing and management.')}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RentalEstimator;
