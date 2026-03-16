import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { 
  Microscope, 
  FileText, 
  Users, 
  Building2, 
  Shield, 
  BarChart3,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Servicos = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Microscope,
      title: t('Monitorização de Radão', 'Radon Monitoring'),
      description: t(
        'Medição e monitorização contínua dos níveis de radão em habitações, locais de trabalho e edifícios públicos.',
        'Continuous measurement and monitoring of radon levels in homes, workplaces and public buildings.'
      ),
      features: [
        t('Detetores de traços nucleares', 'Nuclear track detectors'),
        t('Monitores eletrónicos contínuos', 'Continuous electronic monitors'),
        t('Relatórios detalhados', 'Detailed reports')
      ]
    },
    {
      icon: BarChart3,
      title: t('Análise de Risco', 'Risk Analysis'),
      description: t(
        'Identificação e avaliação de zonas de risco de exposição ao radão, com análise estatística e epidemiológica.',
        'Identification and assessment of radon exposure risk zones, with statistical and epidemiological analysis.'
      ),
      features: [
        t('Mapeamento de zonas de risco', 'Risk zone mapping'),
        t('Análise estatística', 'Statistical analysis'),
        t('Recomendações de mitigação', 'Mitigation recommendations')
      ]
    },
    {
      icon: Shield,
      title: t('Medidas de Mitigação', 'Mitigation Measures'),
      description: t(
        'Consultoria técnica para implementação de medidas de redução dos níveis de radão em edifícios.',
        'Technical consultancy for implementing radon level reduction measures in buildings.'
      ),
      features: [
        t('Ventilação mecânica', 'Mechanical ventilation'),
        t('Selagem de fissuras', 'Crack sealing'),
        t('Sistemas de despressurização', 'Depressurisation systems')
      ]
    },
    {
      icon: FileText,
      title: t('Consultoria Técnica', 'Technical Consultancy'),
      description: t(
        'Assessoria especializada em proteção contra radiações ionizantes para entidades públicas e privadas.',
        'Specialised advice on ionising radiation protection for public and private entities.'
      ),
      features: [
        t('Pareceres técnicos', 'Technical opinions'),
        t('Auditorias de segurança', 'Safety audits'),
        t('Formação especializada', 'Specialised training')
      ]
    },
    {
      icon: Users,
      title: t('Formação e Workshops', 'Training and Workshops'),
      description: t(
        'Programas de formação sobre radiações ionizantes para profissionais de saúde, técnicos e público em geral.',
        'Training programmes on ionising radiation for health professionals, technicians and the general public.'
      ),
      features: [
        t('Workshops práticos', 'Practical workshops'),
        t('Seminários técnicos', 'Technical seminars'),
        t('Cursos de atualização', 'Refresher courses')
      ]
    },
    {
      icon: Building2,
      title: t('Projetos de Investigação', 'Research Projects'),
      description: t(
        'Parcerias em projetos de investigação aplicada com instituições públicas, empresas e autarquias.',
        'Partnerships in applied research projects with public institutions, companies and local councils.'
      ),
      features: [
        t('Projetos colaborativos', 'Collaborative projects'),
        t('Estudos personalizados', 'Customised studies'),
        t('Transferência de conhecimento', 'Knowledge transfer')
      ]
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
              {t('Serviços', 'Services')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
              {t('Serviços Especializados', 'Specialised Services')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t(
                'Prestação de serviços de excelência na área das radiações ionizantes para o setor público e privado.',
                'Provision of excellence services in ionising radiation for the public and private sector.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {/*t('Precisa dos Nossos Serviços?', 'Need Our Services?')}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              {t(
                'Entre em contacto connosco para discutir as suas necessidades específicas.',
                'Contact us to discuss your specific needs.'
              )}
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
              <Link to="/contactos">
                {t('Solicitar Orçamento', 'Request Quote')*/}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
