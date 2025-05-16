
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  imagePath?: string;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  capabilities, 
  imagePath = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
}: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl h-full border-none overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-finx-primary/80 mix-blend-multiply transition-opacity group-hover:opacity-70"></div>
        <img 
          src={imagePath} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
          <Icon className="h-6 w-6 text-finx-primary" />
        </div>
      </div>
      <CardHeader className="pb-2 pt-5">
        <CardTitle className="text-xl font-roboto font-bold text-finx-primary">{title}</CardTitle>
        <CardDescription className="text-lg font-inter font-medium text-finx-navy">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-5 font-inter">{description}</p>
        <div className="mt-5">
          <h4 className="text-sm font-roboto font-medium text-finx-gray mb-3">Our capabilities include:</h4>
          <ul className="space-y-2">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start">
                <div className="h-5 min-w-5 bg-finx-green/20 rounded-full mt-1 flex items-center justify-center">
                  <div className="h-2 w-2 bg-finx-green rounded-full"></div>
                </div>
                <span className="ml-3 text-sm text-gray-600 font-inter">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
