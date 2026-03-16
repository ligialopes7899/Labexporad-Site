import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { Atom, AlertTriangle, Home, Heart, Building, Info } from 'lucide-react';

const Enquadramento = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: Atom, title: t('O que é o Radão?', 'What is Radon?'), content: t('O radão é um gás radioativo natural, incolor e inodoro, que resulta do decaimento do urânio presente nas rochas e solos.', 'Radon is a natural radioactive gas, colourless and odourless, resulting from the decay of uranium in rocks and soils.') },
    { icon: AlertTriangle, title: t('Riscos para a Saúde', 'Health Risks'), content: t('A exposição prolongada a níveis elevados de radão está associada a um aumento do risco de cancro do pulmão.', 'Prolonged exposure to high radon levels is associated with an increased risk of lung cancer.') },
    { icon: Home, title: t('Radão em Casa', 'Radon at Home'), content: t('O radão pode acumular-se no interior das habitações, especialmente em caves e pisos térreos.', 'Radon can accumulate inside homes, especially in basements and ground floors.') },
    { icon: Building, title: t('Legislação', 'Legislation'), content: t('A legislação portuguesa estabelece o nível de referência de 300 Bq/m³ para habitações e locais de trabalho.', 'Portuguese legislation establishes a reference level of 300 Bq/m³ for homes and workplaces.') }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MultiPageNavigation />
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('Enquadramento', 'Framework')}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">{t('Radiações Ionizantes e Radão', 'Ionising Radiation and Radon')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t('Compreender a exposição à radioatividade natural para proteger a saúde pública.', 'Understanding exposure to natural radioactivity to protect public health.')}</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 bg-primary/5 rounded-xl border-l-4 border-primary mb-12 flex items-start gap-4">
              <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground">{t('A exposição à radiação ionizante é uma contingência da vida. Não devemos ter uma atitude alarmista, mas também não negligenciar os possíveis efeitos prejudiciais para a saúde.', 'Exposure to ionising radiation is a contingency of life. We should not be alarmist, but we should not neglect possible harmful health effects.')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border hover-lift">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <fact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{fact.title}</h3>
                  <p className="text-muted-foreground">{fact.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Enquadramento;