
import { Cloud, Smartphone, CreditCard, Code, PaintBucket, Link, Database, History } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: 'SaaS Development',
      subtitle: 'Cloud-Native Solutions for the Subscription Economy',
      description: 'We develop robust SaaS platforms that are secure, scalable, and ready for multi-tenant deployment. Our team builds subscription billing systems, admin portals, user management features, and ensures your SaaS product is cloud-optimized from day one.',
      capabilities: [
        'Multi-tenant SaaS architecture',
        'Subscription billing & user access control',
        'Cloud deployment (AWS, Azure, GCP)',
        'Admin & analytics dashboards'
      ],
      imagePath: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Mobile-First Products that Engage and Scale',
      description: 'We design and develop powerful mobile apps tailored for both iOS and Android. From consumer apps to enterprise tools, we ensure high performance, intuitive interfaces, and seamless user journeys across all devices.',
      capabilities: [
        'Native & cross-platform development (React Native, Flutter, Swift, Kotlin)',
        'UX-driven mobile interfaces',
        'API-driven mobile backends',
        'App Store & Play Store deployment'
      ],
      imagePath: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: CreditCard,
      title: 'Payment Platforms',
      subtitle: 'Secure, Scalable, and Compliant Payment Infrastructure',
      description: 'We design and integrate custom payment solutions that power seamless transactions. Whether you need a payment gateway, digital wallet, or subscription engine, we ensure security, compliance, and smooth payment experiences.',
      capabilities: [
        'Payment gateway integrations (Razorpay, Stripe, PayPal)',
        'Digital wallets, UPI, and BNPL',
        'Fraud detection & risk monitoring',
        'PCI-DSS compliance & reporting tools'
      ],
      imagePath: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: History,
      title: 'Software Maintenance',
      subtitle: 'Keep Your Products Running Smoothly',
      description: 'We provide ongoing support and maintenance to keep your software updated, secure, and optimized. Whether it\'s routine updates, bug fixes, or performance enhancements, we ensure your systems remain reliable and competitive.',
      capabilities: [
        'Performance monitoring & bug fixing',
        'Security updates & patching',
        'Feature enhancements',
        'SLA-based support services'
      ],
      imagePath: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: PaintBucket,
      title: 'UI/UX Development',
      subtitle: 'Beautiful, Intuitive, and Purposeful Design',
      description: 'We craft user experiences that not only look great but also convert. Our UI/UX team brings together user research, interface design, and usability testing to create seamless and responsive digital products.',
      capabilities: [
        'Wireframing & prototyping',
        'User journey design',
        'Responsive UI systems',
        'Design systems & branding alignment'
      ],
      imagePath: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Link,
      title: 'API Integrations',
      subtitle: 'Seamless Connectivity Across Digital Ecosystems',
      description: 'We build and integrate robust APIs to connect your product with third-party platforms, legacy systems, and cloud services. From CRM and ERP integrations to payment APIs, we ensure secure and scalable connectivity.',
      capabilities: [
        'RESTful & GraphQL APIs',
        'OAuth2, JWT, and token-based auth',
        'Webhooks & real-time sync',
        'CRM, ERP, and payment integrations'
      ],
      imagePath: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Database,
      title: 'Data & AI',
      subtitle: 'Empowering Products with Intelligence',
      description: 'We help businesses unlock the power of data and AI through smart features, automation, and actionable insights. From machine learning to natural language processing, we build AI-infused capabilities that drive innovation.',
      capabilities: [
        'Predictive analytics & ML models',
        'Chatbots & NLP-driven solutions',
        'Recommendation engines',
        'Data pipelines & visualization dashboards'
      ],
      imagePath: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Code,
      title: 'Custom Development',
      subtitle: 'Tailor-Made Solutions for Unique Challenges',
      description: 'When off-the-shelf solutions don\'t quite fit, our custom development services deliver precisely what you need. We build bespoke applications that align with your exact business requirements and technological preferences.',
      capabilities: [
        'Enterprise-grade backend systems',
        'Domain-specific applications',
        'Legacy system modernization',
        'High-performance computing solutions'
      ],
      imagePath: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <div className="h-1 w-20 bg-finx-accent rounded-full mb-1"></div>
            <div className="h-1 w-12 bg-finx-primary rounded-full ml-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-finx-primary mb-4">Our Engineering Services</h2>
          <p className="max-w-3xl mx-auto text-lg font-inter text-gray-600">
            From concept to deployment and beyond, we deliver end-to-end product engineering services that drive innovation and create business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
