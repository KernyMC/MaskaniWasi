
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface NewsletterButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
}

const NewsletterButton: React.FC<NewsletterButtonProps> = ({ 
  variant = 'outline',
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Error de validación",
        description: "Por favor, introduce un correo electrónico válido",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "¡Gracias por suscribirte!",
      description: "Recibirás nuestras actualizaciones por correo electrónico.",
    });
    
    // In a real implementation, you would submit the email to your newsletter service
    setTimeout(() => {
      setOpen(false);
      setEmail('');
    }, 1500);
  };

  const buttonClass = variant === 'primary' 
    ? 'btn-primary'
    : 'btn-outline';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`${buttonClass} ${className}`}>
          Suscríbete al Boletín
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center text-maskani-dark-green">Nuestro Boletín</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Mantente al día sobre nuestras iniciativas, eventos y novedades.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com" 
              className="w-full"
              required
              aria-required="true"
            />
          </div>
          
          <div className="text-sm text-gray-500">
            No compartiremos tu correo electrónico con terceros. Puedes darte de baja en cualquier momento.
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-maskani-dark-green hover:bg-maskani-dark-green/90 text-white"
            aria-label="Suscribirse al boletín"
          >
            Suscribirse
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterButton;
