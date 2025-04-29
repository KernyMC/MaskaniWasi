
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
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface DonateButtonProps {
  fullWidth?: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({ fullWidth = false }) => {
  const [donationAmount, setDonationAmount] = useState<string>('50');
  const [recurringOption, setRecurringOption] = useState<string>('monthly');
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "¡Gracias por su donación!",
      description: `Donación de ${donationAmount}€ registrada. Procesando el pago...`,
    });
    
    // In a real implementation, you would process the payment here
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`btn-primary ${fullWidth ? 'w-full' : ''}`}>
          Donar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center text-maskani-dark-green">Apoyar a Maskani Wasi</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Su donativo ayuda a preservar la Amazonía y apoyar a las comunidades locales.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDonationSubmit} className="space-y-6 pt-4">
          <Tabs defaultValue="one-time">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="one-time">Única vez</TabsTrigger>
              <TabsTrigger value="recurring">Recurrente</TabsTrigger>
            </TabsList>
            <TabsContent value="one-time" className="py-4">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="amount">Cantidad (€)</Label>
                  <RadioGroup
                    defaultValue="50"
                    className="flex flex-wrap gap-3"
                    onValueChange={setDonationAmount}
                  >
                    {['15', '25', '50', '100', '250'].map((amount) => (
                      <div key={amount} className="flex items-center">
                        <RadioGroupItem value={amount} id={`amount-${amount}`} className="peer sr-only" />
                        <Label
                          htmlFor={`amount-${amount}`}
                          className="flex h-10 w-16 items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors"
                        >
                          {amount}€
                        </Label>
                      </div>
                    ))}
                    <div className="flex items-center">
                      <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                      <Label
                        htmlFor="amount-custom"
                        className="flex h-10 items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors w-20"
                      >
                        Otro
                      </Label>
                    </div>
                  </RadioGroup>
                  {donationAmount === 'custom' && (
                    <Input
                      type="number"
                      min="1"
                      placeholder="Ingrese cantidad"
                      className="mt-2 w-32"
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="recurring" className="py-4">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="recurring-amount">Cantidad (€)</Label>
                  <RadioGroup
                    defaultValue="25"
                    className="flex flex-wrap gap-3"
                    onValueChange={setDonationAmount}
                  >
                    {['10', '25', '50', '100'].map((amount) => (
                      <div key={amount} className="flex items-center">
                        <RadioGroupItem value={amount} id={`recurring-amount-${amount}`} className="peer sr-only" />
                        <Label
                          htmlFor={`recurring-amount-${amount}`}
                          className="flex h-10 w-16 items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors"
                        >
                          {amount}€
                        </Label>
                      </div>
                    ))}
                    <div className="flex items-center">
                      <RadioGroupItem value="custom" id="recurring-amount-custom" className="peer sr-only" />
                      <Label
                        htmlFor="recurring-amount-custom"
                        className="flex h-10 items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors w-20"
                      >
                        Otro
                      </Label>
                    </div>
                  </RadioGroup>
                  {donationAmount === 'custom' && (
                    <Input
                      type="number"
                      min="1"
                      placeholder="Ingrese cantidad"
                      className="mt-2 w-32"
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  )}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Label>Frecuencia</Label>
                  <RadioGroup
                    defaultValue="monthly"
                    className="grid grid-cols-2 gap-2"
                    onValueChange={setRecurringOption}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                      <Label
                        htmlFor="monthly"
                        className="w-full py-2 flex items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors"
                      >
                        Mensual
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="quarterly" id="quarterly" className="peer sr-only" />
                      <Label
                        htmlFor="quarterly"
                        className="w-full py-2 flex items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors"
                      >
                        Trimestral
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="semi-annual" id="semi-annual" className="peer sr-only" />
                      <Label
                        htmlFor="semi-annual"
                        className="w-full py-2 flex items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors"
                      >
                        Semestral
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="annual" id="annual" className="peer sr-only" />
                      <Label
                        htmlFor="annual"
                        className="w-full py-2 flex items-center justify-center rounded-md border border-maskani-light-green bg-white text-center peer-data-[state=checked]:bg-maskani-dark-green peer-data-[state=checked]:text-white hover:bg-maskani-light-green/20 cursor-pointer transition-colors"
                      >
                        Anual
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Button 
            type="submit" 
            className="w-full bg-maskani-dark-green hover:bg-maskani-dark-green/90 text-white"
            aria-label="Proceder con donativo"
          >
            Donar ahora
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonateButton;
