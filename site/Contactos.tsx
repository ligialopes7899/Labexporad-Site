import { MultiPageNavigation } from '@/components/MultiPageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contactos = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: t('Mensagem Enviada', 'Message Sent'), description: t('Entraremos em contacto brevemente.', 'We will contact you shortly.') });
    }, 1000);
  }*/;

  const contactInfo = [
    { icon: MapPin, title: t('Morada', 'Address'), content: ['UBIMedical', 'Estrada Municipal 506', '6200-284 Covilhã, Portugal'] },
    { icon: Mail, title: 'Email', content: ['labexporad.ubi@ubi.pt'] },
    { icon: Phone, title: t('Telefone', 'Phone'), content: ['+351 275 241 272'] },
    { icon: Clock, title: t('Horário', 'Hours'), content: [t('Seg-Sex 09:00-18:00', 'Mon-Fri 09:00-18:00')] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MultiPageNavigation />
      <section className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('Contactos', 'Contacts')}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">{t('Entre em Contacto', 'Get in Touch')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t('Estamos disponíveis para esclarecer dúvidas.', 'We are available to answer your questions.')}</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground">{t('Informações', 'Information')}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><info.icon className="h-5 w-5 text-primary" /></div>
                    <div><h3 className="font-semibold text-foreground mb-1">{info.title}</h3>{info.content.map((line, idx) => (<p key={idx} className="text-muted-foreground text-sm">{line}</p>))}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground">{t('Envie-nos uma Mensagem', 'Send us a Message')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="name">{t('Nome', 'Name')} *</Label><Input id="name" required /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" type="email" required /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="subject">{t('Assunto', 'Subject')} *</Label><Input id="subject" required /></div>
                <div className="space-y-2"><Label htmlFor="message">{t('Mensagem', 'Message')} *</Label><Textarea id="message" rows={5} required /></div>
                <Button type="submit" disabled={isSubmitting}><Send className="h-4 w-4 mr-2" />{isSubmitting ? t('A Enviar...', 'Sending...') : t('Enviar', 'Send')}</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contactos;