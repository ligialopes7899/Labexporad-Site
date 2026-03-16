import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { Building2, GraduationCap, Globe } from 'lucide-react';
import ubimedicalLogo from '@/assets/ubimedical-logo.png';
import ubiLogo from '@/assets/ubi-logo.jpeg';
import lipLogo from '@/assets/partners/lip-logo.png';
import apaLogo from '@/assets/partners/apa-logo.png';
import nutekLogo from '@/assets/partners/nutek-logo.jpg';
import isibLogo from '@/assets/partners/isib-logo.png';
import radonovaLogo from '@/assets/partners/radonova-logo.png'
import pcelogo from '@/assets/partners/pce_logo.png';

const Parceiros = () => {
  const { t } = useLanguage();

  const institutionalPartners = [
    { name: 'UBIMedical', logo: ubimedicalLogo, url: 'https://ubimedical.ubi.pt/' },
    { name: 'Universidade da Beira Interior', logo: ubiLogo, url: 'https://www.ubi.pt/' }
  ];

  const researchPartners = [
    { name: 'LIP', logo: lipLogo, url: 'https://www.lip.pt/' },
    { name: 'APA', logo: apaLogo, url: 'https://apambiente.pt/' },
    { name: 'NuTeC', logo: nutekLogo, url: 'https://www.uhasselt.be/en/onderzoeksgroepen-en/nutec' },
    { name: 'ISIB', logo: isibLogo, url: 'https://www.isibnet.be/?lang=en' },
    { name: 'LRN', logo: null, url: 'https://www.uc.pt/fctuc/departamento-de-ciencias-da-terra/investigacao/lrn/' },
    { name: 'Radonova', logo: radonovaLogo, url: 'https://radonova.com/' }
    { name: 'PCE Instruments', logo: radonovaLogo, url: 'https://www.pce-instruments.com/' }
  ];

  const communityPartners = [
    { name: t('Câmara Municipal da Covilhã', 'Covilhã City Council'), url: 'https://www.cm-covilha.pt/' },
    { name: t('Escola Campos Melo', 'Campos Melo School'), url: 'https://aecamposmelo.pt/' },
    { name: t('Escola Quinta das Palmeiras', 'Quinta das Palmeiras School'), url: 'https://www.quintadaspalmeiras.pt/portal1/#/' },
    { name: t('Escola Frei Heitor Pinto', 'Frei Heitor Pinto School'), url: 'https://aefreiheitorpinto.pt/' },
    { name: 'Ciência Viva', url: 'https://www.cienciaviva.pt/' },
    { name: 'CHUCB', url: 'https://www.chucbeira.pt/' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MultiPageNavigation />
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('Parceiros', 'Partners')}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">{t('Rede de Parceiros', 'Partner Network')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t('Trabalhamos em colaboração com instituições de referência.', 'We work in collaboration with reference institutions.')}</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12"><Building2 className="h-8 w-8 text-primary" /><h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('Parceiros Institucionais', 'Institutional Partners')}</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {institutionalPartners.map((partner, index) => (
              <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border hover-lift cursor-pointer">
                <div className="w-24 h-24 bg-white rounded-lg p-3 flex items-center justify-center"><img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" /></div>
                <h3 className="text-xl font-semibold text-foreground">{partner.name}</h3>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 mb-8"><GraduationCap className="h-8 w-8 text-primary" /><h2 className="text-2xl font-bold text-foreground">{t('Parceiros de Investigação', 'Research Partners')}</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
            {researchPartners.map((partner, index) => (
              <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg border border-border text-center hover-lift flex items-center justify-center min-h-[80px] cursor-pointer">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-16 object-contain" />
                ) : (
                  <span className="text-xl font-bold text-primary">{partner.name}</span>
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 mb-8"><Globe className="h-8 w-8 text-primary" /><h2 className="text-2xl font-bold text-foreground">{t('Comunidade', 'Community')}</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {communityPartners.map((partner, index) => (
              <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors cursor-pointer">
                <span className="text-foreground">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Parceiros;