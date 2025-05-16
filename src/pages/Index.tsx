
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
