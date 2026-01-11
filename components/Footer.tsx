import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-20 pb-10 border-t border-stone">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-6 h-6 bg-forest rounded-tr-lg rounded-bl-lg" />
               <span className="font-serif font-bold text-xl text-anthracite">
                  Hauptstadt Gartenpflege
               </span>
            </div>
            <p className="text-anthracite/60 max-w-sm mb-8">
              Wir verwandeln Außenbereiche in langlebige Lebensräume. Qualität, die bleibt.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full text-anthracite hover:bg-forest hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-anthracite hover:bg-forest hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-anthracite hover:bg-forest hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-anthracite mb-6">Kontakt</h4>
            <ul className="space-y-4 text-anthracite/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Musterstraße 123<br />10115 Berlin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+493012345678" className="hover:text-forest transition-colors">+49 30 123 456 78</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:kontakt@hauptstadt-garten.de" className="hover:text-forest transition-colors">kontakt@hauptstadt-garten.de</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-anthracite mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-anthracite/70">
              <li><a href="#" className="hover:text-forest transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-anthracite/10 text-sm text-anthracite/40">
          <p>&copy; {new Date().getFullYear()} Hauptstadt Gartenpflege. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
             {/* QR Code Placeholder for Vibe */}
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-anthracite/10 rounded flex items-center justify-center text-[8px] tracking-tighter">QR</div>
                <span className="text-xs">Scan for Contact</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;