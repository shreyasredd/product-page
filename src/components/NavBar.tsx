
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center z-10">
          <span className={`self-center text-xl font-bold font-roboto whitespace-nowrap transition-colors ${scrolled ? 'text-finx-primary' : 'text-white'}`}>
            FinXBridge
          </span>
        </a>
        
        <div className="flex md:order-2">
          <Button className={`hidden md:flex text-sm font-medium px-5 py-2.5 rounded-md transition-all ${
            scrolled 
              ? 'bg-finx-primary hover:bg-finx-navy text-white' 
              : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
          }`}>
            Contact Us <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          
          <button
            type="button"
            className={`inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none z-10 transition-colors ${
              scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}>
          <div className={`${
            scrolled ? 'bg-white' : 'bg-finx-primary/90 backdrop-blur-sm md:bg-transparent'
          } p-4 mt-4 rounded-lg md:p-0 md:mt-0 md:border-0 absolute md:relative left-0 right-0 top-full md:top-0`}>
            <ul className="flex flex-col p-2 md:p-0 md:flex-row md:space-x-8 text-sm md:mt-0 md:font-medium">
              <li>
                <a 
                  href="#" 
                  className={`block py-2 px-3 md:p-0 rounded ${
                    scrolled 
                      ? 'text-finx-primary md:text-finx-primary font-medium' 
                      : 'text-white bg-finx-accent/20 md:bg-transparent md:text-white'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`block py-2 px-3 md:p-0 rounded ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-finx-primary' 
                      : 'text-white/90 hover:bg-white/10 md:hover:bg-transparent md:hover:text-white'
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`block py-2 px-3 md:p-0 rounded ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-finx-primary' 
                      : 'text-white/90 hover:bg-white/10 md:hover:bg-transparent md:hover:text-white'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`block py-2 px-3 md:p-0 rounded ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-finx-primary' 
                      : 'text-white/90 hover:bg-white/10 md:hover:bg-transparent md:hover:text-white'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
