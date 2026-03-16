import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { 
  Microscope, 
  Users, 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  Shield, 
  ChevronRight,
  Atom,
  FlaskConical,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import labLogo from '@/assets/labexporad-logo.jpg';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: FlaskConical,
      title: t('Investigação', 'Research'),
      description: t(
        'Investigação científica na área das Radiações Ionizantes com cooperação multidisciplinar',
        'Scientific research in Ionising Radiation with multidisciplinary cooperation'
      )
    },
    {
      icon: Shield,
      title: t('Proteção', 'Protection'),
      description: t(
        'Proteção contra a Radiação e Radioatividade Ambiente',
        'Radiation Protection and Environmental Radioactivity'
      )
    },
    {
      icon: HeartPulse,
      title: t('Saúde Pública', 'Public Health'),
      description: t(
        'Estudo dos efeitos da exposição ao radão na saúde da população',
        'Study of the effects of radon exposure on population health'
      )
    },
    {
      icon: Building2,
      title: t('Serviços', 'Services'),
      description: t(
        'Prestação de serviços a entidades públicas e privadas',
        'Service provision to public and private entities'
      )
    }
  ];

  const stats = [
    { value: '10+', label: t('Anos de Investigação', 'Years of Research') },
    { value: '50+', label: t('Publicações', 'Publications') },
    { value: '3', label: t('Teses em Curso', 'Ongoing Theses') },
    { value: '100+', label: t('Projetos', 'Projects') }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MultiPageNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-gradient-hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={labLogo} 
                alt="LabExpoRad" 
                className="h-28 md:h-36 w-auto animate-fade-in"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
              {t(
                'Laboratório de Estudos dos Efeitos da Exposição ao Radão',
                'Laboratory for the Study of the Effects of Radon Exposure'
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-delayed">
              {t(
                'Promovendo a investigação científica em Radiações Ionizantes ao serviço da saúde pública',
                'Promoting scientific research in Ionising Radiation in the service of public health'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/servicos">
                  {t('Nossos Serviços', 'Our Services')}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contactos">
                  {t('Contacte-nos', 'Contact Us')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('Áreas de Atuação', 'Areas of Activity')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Desenvolvemos investigação e prestamos serviços em diversas áreas relacionadas com radiações ionizantes',
                'We conduct research and provide services in various areas related to ionising radiation'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover-lift cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {t('Sobre Nós', 'About Us')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                {t(
                  'Investigação ao Serviço da Comunidade',
                  'Research in Service of the Community'
                )}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t(
                    'O LabExpoRad, localizado nas instalações da UBIMedical na Covilhã, tem como missão promover, apoiar e desenvolver a investigação científica na área das Radiações Ionizantes, sendo privilegiada e incentivada a cooperação multidisciplinar.',
                    'LabExpoRad, located at UBIMedical facilities in Covilhã, aims to promote, support and develop scientific research in the field of Ionising Radiation, with multidisciplinary cooperation being privileged and encouraged.'
                  )}
                </p>
                <p>
                  {t(
                    'Alguns dos nossos tópicos de interesse englobam as áreas da Física Nuclear, da Proteção contra a Radiação, a Radioatividade Ambiente e a Análise de Risco aplicada à Engenharia Nuclear.',
                    'Some of our topics of interest include Nuclear Physics, Radiation Protection, Environmental Radioactivity, and Risk Analysis applied to Nuclear Engineering.'
                  )}
                </p>
              </div>
              <Button asChild className="mt-6" variant="outline">
                <Link to="/enquadramento">
                  {t('Saber Mais', 'Learn More')}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl border border-border hover-lift">
                  <Atom className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground">{t('Física Nuclear', 'Nuclear Physics')}</h4>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border hover-lift">
                  <BookOpen className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground">{t('Ensino', 'Teaching')}</h4>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card p-6 rounded-xl border border-border hover-lift">
                  <Microscope className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground">{t('Monitorização', 'Monitoring')}</h4>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border hover-lift">
                  <GraduationCap className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground">{t('Formação', 'Training')}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {t('Divulgação', 'Outreach')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                {t('Workshops e Ações de Divulgação', 'Workshops and Outreach Activities')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                t('Projetos de iniciação à investigação com Escolas e Autarquias', 'Research initiation projects with schools and local councils'),
                t('Sessões públicas de esclarecimento', 'Public information sessions'),
                t('Projetos patrocinados pela Ciência Viva', 'Projects sponsored by Ciência Viva'),
                t('Atividades da Semana da Ciência e Tecnologia', 'Science and Technology Week activities'),
                t('Campos de Férias da Universidade', 'University Holiday Camps'),
                t('Atividades UBI Experiências', 'UBI Experiences activities')
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t(
                'Gabinete de Apoio',
                'Support Office'
              )}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t(
                'Esclarecimento de dúvidas sobre radiações ionizantes, radão, medidas de mitigação e assistência a clientes públicos e privados.',
                'Clarification of doubts about ionising radiation, radon, mitigation measures and assistance to public and private clients.'
              )}
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
              <Link to="/contactos">
                {t('Fale Connosco', 'Talk to Us')}
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

export default Home;
