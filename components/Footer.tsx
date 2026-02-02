
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaSCr1WiqCjKHNe0eY27ilYNV5Nd09oCIfKKaAdMIzw7gmyytSMNmTemrzvP5AwkC1-ZnvmiEb5-T3xg_-N-1-Zv2W_sEriYxmw5bwErlLcv3YyC7dDaL77uEOrS8xa9ffti1iZtJklv4Bv-SKBfJgMWN4pNH5Mzsiy5_Po9AR5vS-R3pJVkE5V1G5Y4Q/s500/WhatsApp_Image_2025-11-19_at_11.46.36-removebg-preview.png";

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <img src={logoUrl} alt="Ione Gonçalves" className="h-16 mb-8" />
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed mb-8">
              Referência em consultoria e gestão pública municipal, unindo experiência técnica, legalidade e inovação para o desenvolvimento de cidades.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-800 hover:text-white transition-all"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-slate-500 hover:text-blue-700 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-slate-500 hover:text-blue-700 transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-slate-500 hover:text-blue-700 transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-slate-500 hover:text-blue-700 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-700 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-700 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-700 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 text-center text-slate-400 text-sm">
          <p>© 2025 Ione Gonçalves Consultoria e Gestão Pública. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
