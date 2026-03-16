import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { User } from 'lucide-react';

// Team photos
import sandraSoares from '@/assets/team/sandra-soares.jpg';
import luisPeralta from '@/assets/team/luis-peralta.jpg';
import pedroAlmeida from '@/assets/team/pedro-almeida.jpg';
import yoenlsBahu from '@/assets/team/yoenls-bahu.jpg';
import joaquimKessongo from '@/assets/team/joaquim-kessongo.jpg';
import ligiaLopes from '@/assets/team/ligia-lopes.jpg';
import mariaDias from '@/assets/team/maria-dias.jpg';
import marianaVicente from '@/assets/team/mariana-vicente.jpg';
import carolineLicour from '@/assets/team/caroline-licour.jpg';
import thaisAlves from '@/assets/team/thais-alves.jpg';
import wendyIvanouskas from '@/assets/team/wendy-ivanouskas.jpg';

const Equipa = () => {
  const { t } = useLanguage();

  const coordinator = {
    name: 'Sandra Soares',
    photo: sandraSoares,
    description: t(
      'Doutora em Física Nuclear; Professora na Universidade da Beira Interior (UBI); Investigadora no Laboratório de Instrumentação e Física Experimental de Partículas (LIP).',
      'PhD in Nuclear Physics; Professor at the University of Beira Interior (UBI); Researcher at the Laboratory of Instrumentation and Experimental Particle Physics (LIP).'
    ),
  };

  const collaborators = [
    {
      name: 'Luís Peralta',
      photo: luisPeralta,
      description: t(
        'Doutor em Física de Partículas; Professor na Universidade de Lisboa (UL); Investigador no Laboratório de Instrumentação e Física Experimental de Partículas (LIP).',
        'PhD in Particle Physics; Professor at the University of Lisbon (UL); Researcher at the Laboratory of Instrumentation and Experimental Particle Physics (LIP).'
      ),
    },
    {
      name: 'Joaquim Kessongo',
      photo: joaquimKessongo,
      description: t(
        'Doutor em Física; Professor de Física Geral e Física Ambiental no Instituto Superior de Ciências da Educação da Huíla.',
        'PhD in Physics; Professor of General Physics and Environmental Physics at the Instituto Superior de Ciências da Educação da Huíla.'
      ),
    },
    {
      name: 'Yoenls Prata Bahu',
      photo: yoenlsBahu,
      description: t(
        'Doutor em Física; Professor de Física Geral no Instituto Superior Politécnico da Huíla da Universidade Mandume Ya Ndemufayo.',
        'PhD in Physics; Professor of General Physics at the Instituto Superior Politécnico da Huíla, Universidade Mandume Ya Ndemufayo.'
      ),
    },
    {/*
      name: 'Pedro Almeida',
      photo: pedroAlmeida,
      description: t(
        'Doutor em Engenharia Civil; Professor na Universidade da Beira Interior (UBI); Investigador nos centros GeoBioTec e C-Made.',
        'PhD in Civil Engineering; Professor at the University of Beira Interior (UBI); Researcher at GeoBioTec and C-Made centres.'
      ),
    */},
  ];

  const students = [
    { name: 'Lígia Lopes', status: t('Estudante de Doutoramento', 'PhD Student'), affiliation: 'UBI/LIP', photo: ligiaLopes },
    { name: 'Maria João Dias', status: t('Estudante de Doutoramento', 'PhD Student'), affiliation: 'UBI/LIP', photo: mariaDias },
    { name: 'Mariana Vicente', status: t('Estudante de Doutoramento', 'PhD Student'), affiliation: 'UBI/LIP', photo: marianaVicente },
    { name: 'Caroline Licour', status: t('Estudante de Doutoramento', 'PhD Student'), affiliation: 'UBI/LIP/ISIB', photo: carolineLicour },
    { name: 'Thaís Alves', status: t('Estudante de Mestrado', "Master's Student"), affiliation: 'UBI/LIP', photo: thaisAlves },
    { name: 'Wendy Ivanouskas', status: t('Estudante de Mestrado', "Master's Student"), affiliation: 'UBI/LIP', photo: wendyIvanouskas },
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
              {t('Nossa Equipa', 'Our Team')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
              {t('Equipa de Investigação', 'Research Team')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t(
                'Uma equipa multidisciplinar dedicada à investigação em radiações ionizantes e à proteção da saúde pública.',
                'A multidisciplinary team dedicated to research in ionising radiation and public health protection.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Coordinator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            {t('Coordenação', 'Coordination')}
          </h2>
          
          <div className="max-w-2xl">
            <div className="group bg-card rounded-xl border border-border overflow-hidden hover-lift p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/30">
                <img 
                  src={coordinator.photo} 
                  alt={coordinator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">{coordinator.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{t('Coordenadora', 'Coordinator')}</p>
                <p className="text-muted-foreground text-sm">{coordinator.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators/Researchers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            {t('Colaboradores / Investigadores', 'Collaborators / Researchers')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborators.map((member, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl border border-border overflow-hidden hover-lift p-6"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {t('Estudantes de Mestrado / Doutoramento', "Master's / PhD Students")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            {t(
              'Estudantes a desenvolver trabalhos de investigação conducentes a dissertações de mestrado e teses de doutoramento.',
              "Students developing research work leading to master's dissertations and doctoral theses."
            )}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover-lift"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20 bg-muted flex items-center justify-center">
                  {student.photo ? (
                    <img 
                      src={student.photo} 
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{student.name}</h3>
                <p className="text-primary text-sm font-medium">{student.status} ({student.affiliation})</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipa;
