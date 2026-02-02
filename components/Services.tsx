
import React from 'react';
import { siteConfig } from '../config';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Especialidades</div>
          <h2 className="text-5xl font-serif text-slate-900 mb-6 leading-tight">Soluções que transformam <br/>a administração municipal.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((s, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {React.createElement(s.icon as React.ComponentType<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">{s.desc}</p>
              <a href="#contato" className="text-[10px] font-black uppercase tracking-widest text-blue-700 hover:text-slate-900 transition-colors">
                Saber mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
