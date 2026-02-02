
import React from 'react';
import { siteConfig } from '../config';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Metodologia de Trabalho</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Um processo estruturado para garantir que cada centavo de recurso público seja bem aplicado e transformado em benefício para a população.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {siteConfig.process.map((p, i) => (
            <div key={i} className="relative group">
              <div className="mb-6 flex items-baseline gap-4">
                <span className="text-5xl font-serif font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500">
                  {p.step}
                </span>
                <h4 className="text-xl font-bold text-slate-900">{p.title}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed border-l-2 border-slate-100 pl-6 group-hover:border-blue-500 transition-all duration-500">
                {p.desc}
              </p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-[2px] bg-slate-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
