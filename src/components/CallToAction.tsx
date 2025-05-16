
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-finx-navy to-finx-primary"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-white/20 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-roboto mb-4 text-white">Let's Build the Future Together</h2>
            <p className="text-xl font-inter mb-8 max-w-3xl mx-auto text-white/90">
              Whether you're starting from scratch or scaling your digital product, FinXBridge is your trusted engineering partner.
            </p>
            <Button className="bg-finx-accent hover:bg-finx-accent/90 text-finx-primary font-medium text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
              <Mail className="mr-2 h-5 w-5" /> Contact us today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
