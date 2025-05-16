
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold font-roboto text-finx-primary mb-4">FinXBridge</h3>
            <p className="text-sm font-inter text-gray-600 mb-4">
              Shaping the future of Fintech, One Innovation at a Time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-finx-gray hover:text-finx-primary transition-colors p-2 bg-gray-100 rounded-full">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-finx-gray hover:text-finx-primary transition-colors p-2 bg-gray-100 rounded-full">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-finx-gray hover:text-finx-primary transition-colors p-2 bg-gray-100 rounded-full">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-finx-gray hover:text-finx-primary transition-colors p-2 bg-gray-100 rounded-full">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-bold font-roboto text-finx-navy mb-4">Services</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">SaaS Development</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Payment Platforms</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Software Maintenance</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-bold font-roboto text-finx-navy mb-4">Company</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-bold font-roboto text-finx-navy mb-4">Legal</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-finx-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-sm text-center md:text-left text-gray-500 font-inter mb-4 md:mb-0">
              © {new Date().getFullYear()} FinXBridge. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="text-xs text-gray-500 hover:text-finx-primary transition-colors">Privacy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-finx-primary transition-colors">Terms</a>
              <a href="#" className="text-xs text-gray-500 hover:text-finx-primary transition-colors">Cookies</a>
              <a href="#" className="text-xs text-gray-500 hover:text-finx-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
