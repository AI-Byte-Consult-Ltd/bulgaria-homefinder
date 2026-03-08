import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

import alexImg from "@/assets/alexImg.png";
import aleksImg from "@/assets/aleksImg.jpg";

const team = [
  {
  name: "Alexander Lunin",

  role: "Co-Founder, Real Estate Broker & Legal Consultant",
  roleRu: "Сооснователь, брокер по недвижимости и юридический консультант",
  roleBg: "Съосновател, брокер на недвижими имоти и правен консултант",
  roleDe: "Mitgründer, Immobilienmakler und Rechtsberater",
  roleIt: "Co-fondatore, agente immobiliare e consulente legale",

  bio: "Co-founder of the company and real estate professional since 2011. Specializing in residential and commercial property sales, acquisitions, rentals, property management, construction support, legal documentation, contract drafting of any complexity, residence permit assistance, insurance services, and consulting on relocation and citizenship matters in Bulgaria.",
  bioRu: "Сооснователь компании и брокер по недвижимости с 2011 года. Специализация: покупка и продажа жилой и коммерческой недвижимости, управление объектами, аренда, сопровождение строительных проектов, юридическая поддержка сделок, составление договоров любой сложности, помощь в получении ВНЖ, страховые решения и консультации по вопросам релокации и гражданства в Болгарии.",
  bioBg: "Съосновател на компанията и специалист по недвижими имоти от 2011 г. Специализира в покупко-продажба и управление на жилищни и търговски имоти, наеми, строителни проекти, юридическо обслужване, изготвяне на договори с всякаква сложност, съдействие за разрешение за пребиваване, застрахователни услуги и консултации относно релокация и гражданство в България.",
  bioDe: "Mitgründer des Unternehmens und Immobilienexperte seit 2011. Spezialisiert auf Kauf und Verkauf von Wohn- und Gewerbeimmobilien, Immobilienverwaltung, Vermietung, Bauprojekte, rechtliche Unterstützung, Vertragsgestaltung jeder Komplexität, Unterstützung bei Aufenthaltstiteln, Versicherungsdienstleistungen und Beratung zu Relocation und Staatsbürgerschaft in Bulgarien.",
  bioIt: "Co-fondatore della società e professionista immobiliare dal 2011. Specializzato nella compravendita di immobili residenziali e commerciali, gestione immobiliare, locazioni, supporto a progetti di costruzione, consulenza legale, redazione di contratti complessi, assistenza per permessi di soggiorno, servizi assicurativi e consulenza su trasferimento e cittadinanza in Bulgaria.",

  image: alexImg,
  linkedin: "https://www.linkedin.com/in/luntick",
},
{
  name: "Aleksandr Tochilov",

  role: "Head of 3D Visualization & Graphic Design",
  roleRu: "Руководитель отдела 3D-визуализации и графики",
  roleBg: "Ръководител на 3D визуализация и графичен дизайн",
  roleDe: "Leiter für 3D-Visualisierung und Grafikdesign",
  roleIt: "Responsabile 3D visualizzazione e grafica",

  bio: "Leads the 3D visualization and graphic design department. Specializes in architectural visualization, house project concepts, 3D presentations, and visual materials used for real estate marketing and property development.",
  bioRu: "Руководит направлением 3D-визуализации и графического дизайна. Специализируется на архитектурной визуализации, подготовке проектов домов, создании 3D-концепций и визуальных материалов для презентации объектов недвижимости и строительных проектов.",
  bioBg: "Отговаря за 3D визуализация, графичен дизайн и визуално представяне на недвижими имоти. Специализира в архитектурни визуализации, проекти на къщи, 3D концепции и маркетингови материали за представяне на имоти и строителни проекти.",
  bioDe: "Leitet den Bereich 3D-Visualisierung und Grafikdesign. Spezialisiert auf architektonische Visualisierung, Hausprojekte, 3D-Konzepte und visuelle Materialien für Immobilien- und Bauprojekte.",
  bioIt: "Responsabile della visualizzazione 3D e della grafica. Specializzato in visualizzazione architettonica, progetti di case, concetti 3D e materiali visivi per la presentazione di immobili e progetti di sviluppo.",

  image: aleksImg,
  linkedin: "https://www.linkedin.com/in/alekstoch",
}
];

const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Meet the <span className="text-gradient-gold">Founders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionaries behind AI Byte Consult Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border/50 hover:border-primary/30"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-gold">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at AI Byte Consult`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-primary font-medium text-lg">
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <div className="flex justify-center pt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-accent hover:bg-primary/10 transition-colors group/btn"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover/btn:scale-110 transition-transform" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
