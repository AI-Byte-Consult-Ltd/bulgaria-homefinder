import { useTranslation } from 'react-i18next';
import { Linkedin, Globe } from "lucide-react";
import foundersImg from "@/assets/team/founders.png";

const teamMembers = [
  {
    name: "Alexander Lunin",
    role: { en: "Co-Founder, Real Estate Broker & Legal Consultant", ru: "Сооснователь, брокер по недвижимости и юридический консультант", bg: "Съосновател, брокер на недвижими имоти и правен консултант", de: "Mitgründer, Immobilienmakler und Rechtsberater", it: "Co-fondatore, agente immobiliare e consulente legale" },
    bio: { en: "Co-founder of the company and real estate professional since 2011. Specializing in residential and commercial property sales, acquisitions, rentals, property management, construction support, legal documentation, and consulting on relocation and citizenship matters in Bulgaria.", ru: "Сооснователь компании и брокер по недвижимости с 2011 года. Специализация: покупка и продажа жилой и коммерческой недвижимости, управление объектами, аренда, юридическая поддержка сделок и консультации по вопросам релокации и гражданства в Болгарии.", bg: "Съосновател на компанията и специалист по недвижими имоти от 2011 г. Специализира в покупко-продажба на жилищни и търговски имоти, наеми, юридическо обслужване и консултации относно релокация и гражданство в България.", de: "Mitgründer des Unternehmens und Immobilienexperte seit 2011. Spezialisiert auf Kauf und Verkauf von Wohn- und Gewerbeimmobilien, Vermietung, rechtliche Unterstützung und Beratung zu Relocation und Staatsbürgerschaft in Bulgarien.", it: "Co-fondatore della società e professionista immobiliare dal 2011. Specializzato nella compravendita di immobili, gestione immobiliare, consulenza legale e assistenza per trasferimento e cittadinanza in Bulgaria." },
    linkedin: "https://www.linkedin.com/in/luntick",
  },
  {
    name: "NICS AI",
    role: { en: "AI Ecosystem & Genesis Brain", ru: "ИИ Экосистема и Генезис-Мозг", bg: "AI Екосистема и Генезис-Мозг", de: "KI-Ökosystem & Genesis-Brain", it: "Ecosistema AI & Genesis Brain" },
    bio: { en: "Founder of NICS AI. Driving the ecosystem strategy, AI product vision, and cross-platform innovation. The genesis brain behind text, visual, video, geology, and other language models across the NICS AI Ecosystem.", ru: "Основатель NICS AI. Определяет стратегию экосистемы, продуктовое видение ИИ и кросс-платформенные инновации. Генезис-мозг текстовых, визуальных, видео, геологических и других языковых моделей экосистемы NICS AI.", bg: "Основател на NICS AI. Движещата сила зад стратегията на екосистемата, визията за AI продукти и крос-платформените иновации. Генезис-мозъкът зад текстови, визуални, видео, геоложки и други езикови модели в NICS AI Ecosystem.", de: "Gründer von NICS AI. Treibt die Ökosystem-Strategie, KI-Produktvision und plattformübergreifende Innovation voran. Das Genesis-Brain hinter Text-, Bild-, Video-, Geologie- und anderen Sprachmodellen im NICS AI Ecosystem.", it: "Fondatore di NICS AI. Guida la strategia dell'ecosistema, la visione dei prodotti AI e l'innovazione cross-platform. Il cervello genesis dietro modelli di testo, visione, video, geologia e altri modelli linguistici nell'ecosistema NICS AI." },
    website: "https://nics.space",
  },
  {
    name: "Aleksandr Tochilov",
    role: { en: "Head of 3D Visualization & Graphic Design", ru: "Руководитель отдела 3D-визуализации и графики", bg: "Ръководител на 3D визуализация и графичен дизайн", de: "Leiter für 3D-Visualisierung und Grafikdesign", it: "Responsabile 3D visualizzazione e grafica" },
    bio: { en: "Leads the 3D visualization and graphic design department. Specializes in architectural visualization, house project concepts, 3D presentations, and visual materials for real estate marketing and property development.", ru: "Руководит направлением 3D-визуализации и графического дизайна. Специализируется на архитектурной визуализации, подготовке проектов домов и визуальных материалов для презентации объектов недвижимости.", bg: "Отговаря за 3D визуализация, графичен дизайн и визуално представяне на недвижими имоти. Специализира в архитектурни визуализации и маркетингови материали за представяне на имоти.", de: "Leitet den Bereich 3D-Visualisierung und Grafikdesign. Spezialisiert auf architektonische Visualisierung, Hausprojekte und visuelle Materialien für Immobilien- und Bauprojekte.", it: "Responsabile della visualizzazione 3D e della grafica. Specializzato in visualizzazione architettonica, progetti di case e materiali visivi per la presentazione di immobili." },
    linkedin: "https://www.linkedin.com/in/alekstoch",
  },
];

const Team = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0] as 'en' | 'bg' | 'ru' | 'de' | 'it';
  const l = ['en', 'bg', 'ru', 'de', 'it'].includes(lang) ? lang : 'en';

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            {t('common.meetFounders')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('common.foundersSubtitle')}
          </p>
        </div>

        {/* Founders Photo */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src={foundersImg}
              alt="Alexander Lunin, NICS AI, and Aleksandr Tochilov — the founding team of AI Byte Consult"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl border bg-card border-border/50 hover:border-primary/30 transition-colors ${index === 1 ? 'md:-mt-4 md:shadow-xl md:border-primary/20' : ''}`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {member.role[l]}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio[l]}
              </p>
              <div className="flex justify-center gap-3">
                {'linkedin' in member && member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-accent hover:bg-primary/10 transition-colors group/btn"
                  >
                    <Linkedin className="w-5 h-5 text-primary group-hover/btn:scale-110 transition-transform" />
                  </a>
                )}
                {'website' in member && member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-accent hover:bg-primary/10 transition-colors group/btn"
                  >
                    <Globe className="w-5 h-5 text-primary group-hover/btn:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
