
import React from 'react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { siteConfig } from '../config';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      {/* Elementos Decorativos de UI */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -z-10 skew-x-6 origin-top"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100">
              <ShieldCheck size={14} /> Consultoria Técnica de Excelência
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-8">
              Gestão <span className="text-blue-700 italic">Pública</span> <br/>de Resultados.
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed font-light italic">
              "{siteConfig.personal.shortBio}"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#contato" 
                className="group flex items-center justify-center gap-3 bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-900 transition-all shadow-xl hover:shadow-blue-200"
              >
                Fale Comigo agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos" 
                className="flex items-center justify-center bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={siteConfig.personal.image} 
                alt={siteConfig.personal.name} 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Cards Flutuantes (UI Moderna) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-50 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex text-yellow-400"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Referência Regional</span>
              </div>
              <div className="text-2xl font-black text-slate-900">98%</div>
              <div className="text-xs text-slate-500 font-medium">Aprovação em Auditorias</div>
            </div>

            <div className="absolute top-20 -right-8 bg-slate-900 p-6 rounded-3xl shadow-2xl z-20 text-white hidden md:block">
              <div className="text-blue-400 font-bold mb-1">Captação Estratégica</div>
              <div className="text-xs opacity-70">R$ 50 Milhões+ em recursos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
