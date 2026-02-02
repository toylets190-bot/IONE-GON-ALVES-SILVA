
import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config';

const About: React.FC = () => {
  const valueIcons = [<Target key="t" className="text-blue-600" />, <ShieldCheck key="s" className="text-blue-600" />, <Users key="u" className="text-blue-600" />, <TrendingUp key="tr" className="text-blue-600" />];

  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-serif text-slate-900 mb-8 tracking-tight">Compromisso com o Futuro dos Municípios</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
              {siteConfig.personal.fullBio}
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {["Foco Estratégico", "Transparência", "Parceria", "Resultados"].map((title, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group hover:bg-blue-600 transition-colors duration-500">
                    {React.cloneElement(valueIcons[i] as React.ReactElement, { className: "group-hover:text-white transition-colors" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Excelência técnica em cada etapa da gestão pública.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative z-10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <ShieldCheck size={300} />
              </div>
              <h3 className="text-3xl font-serif mb-8 relative z-20">Por que escolher nossa assessoria?</h3>
              <ul className="space-y-8 relative z-20">
                {[
                  "Especialista em legislações vigentes e normas de convênios.",
                  "Metodologia comprovada na captação de recursos extraordinários.",
                  "Acompanhamento rigoroso de auditorias e tribunais de contas."
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-sm font-black">0{i+1}</span>
                    <p className="text-slate-300 font-medium leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-14 pt-10 border-t border-white/10 flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-lg">
                  <img src={siteConfig.personal.image} alt={siteConfig.personal.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-xl">{siteConfig.personal.name}</div>
                  <div className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-black">Consultora Sênior</div>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
