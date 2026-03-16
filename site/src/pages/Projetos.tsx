import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

const Projetos = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'RuralTHINGS',
      partnerships: 'UBI, SINS Lab - IT Branch, La Caixa Foundation, FCT, LIP',
      description: t(
        'Este projeto tem como objetivo monitorizar o ambiente em áreas remotas e rurais das regiões montanhosas do centro de Portugal.',
        'This project aims to monitor the environment in remote and rural areas of the mountain regions of central Portugal.'
      ),
      status: t('em curso', 'ongoing'),
      url: 'https://ruralthings.ubi.pt/'
    },
    {
      title: 'BRAVER',
      subtitle: t(
        'Blended and Remote Teaching Activities Supported by Virtual Reality for Radiation Sciences',
        'Blended and Remote Teaching Activities Supported by Virtual Reality for Radiation Sciences'
      ),
      partnerships: 'UHasselt, UBI, HE2B-ISIB, CTU, Unibo, Hochschule Mannheim, UPV, SURO, Erasmus+',
      description: t(
        'Este projeto desenvolveu um programa de formação híbrido internacional que integra competências técnicas, gerais e de networking para estudantes e professores, em colaboração com parceiros académicos, industriais e reguladores.',
        'This project developed an international hybrid training programme that integrates technical, general, and networking skills for students and teachers, in collaboration with academic, industrial, and regulatory partners.'
      ),
      status: t('concluído', 'completed'),
      url: 'https://irisib.be/braver-project/'
    },
    {
      title: 'CERAMUG',
      subtitle: t(
        'Course on Environmental Radiation Measurements Using Gamification',
        'Course on Environmental Radiation Measurements Using Gamification'
      ),
      partnerships: 'UBI, Erasmus+',
      description: t(
        'O curso misto (BIP), com 2 edições em anos consecutivos (2023 e 2024), incluiu teoria e prática laboratorial em radiação ambiental e o desenvolvimento de um jogo, em cada edição, baseado nos conhecimentos adquiridos pelos estudantes.',
        'The blended course (BIP), with 2 editions in consecutive years (2023 and 2024), included theory and laboratory practice in environmental radiation and the development of a game, in each edition, based on the knowledge acquired by the students.'
      ),
      status: t('concluído', 'completed'),
      url: 'https://www.ubi.pt/Disciplina/16085/2025'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MultiPageNavigation />
      
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t('Projetos', 'Projects')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
              {t('Projetos de Investigação', 'Research Projects')}
            </h1>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover-lift space-y-3">
                <h2 className="text-xl font-bold text-foreground">{project.title}</h2>
                {project.subtitle && (
                  <p className="text-muted-foreground italic">{project.subtitle}</p>
                )}
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">{t('Parcerias', 'Partnerships')}:</span> {project.partnerships}
                </p>
                <p className="text-muted-foreground">{project.description}</p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">{t('Período', 'Period')}:</span> {project.status}
                </p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  +info <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projetos;
