
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-finx-primary to-finx-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col-span-1 border-r border-white/10"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="row-span-1 border-b border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-roboto mb-4 leading-tight">
              Product Engineering
            </h1>
            <h2 className="text-xl md:text-2xl font-inter font-light mb-6">
              Innovate, Build, and Scale with Confidence
            </h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 font-inter leading-relaxed">
              At FinXBridge, we specialize in building high-quality, scalable, and intelligent software products tailored
              to the needs of modern businesses. Our product engineering services cover the entire lifecycle—from idea
              validation to deployment and ongoing optimization.
            </p>
            <Button className="bg-finx-accent hover:bg-finx-accent/90 text-finx-primary font-medium text-base px-6 py-6 h-auto">
              Explore Our Services <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-finx-accent/20 to-finx-lime/20 flex items-center justify-center p-10 relative">
                <img
                  src="/engineering-team.svg"
                  alt="Product Engineering"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=600";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-white">
        <div className="h-20 bg-gradient-to-br from-finx-primary to-finx-navy skew-y-3 transform origin-top-left"></div>
      </div> */}
    </div>
  );
};

export default HeroSection;
