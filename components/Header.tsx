
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  const logoUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaSCr1WiqCjKHNe0eY27ilYNV5Nd09oCIfKKaAdMIzw7gmyytSMNmTemrzvP5AwkC1-ZnvmiEb5-T3xg_-N-1-Zv2W_sEriYxmw5bwErlLcv3YyC7dDaL77uEOrS8xa9ffti1iZtJklv4Bv-SKBfJgMWN4pNH5Mzsiy5_Po9AR5vS-R3pJVkE5V1G5Y4Q/s500/WhatsApp_Image_2025-11-19_at_11.46.36-removebg-preview.png";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src={logoUrl} 
              alt="Ione Gonçalves Consultoria" 
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
            />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Fale Comigo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? 'max-h-96 opacity-100 py-6 border-b' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-800 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg font-bold"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
