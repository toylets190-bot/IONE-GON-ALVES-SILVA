
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "A consultoria da Ione foi fundamental para organizarmos nossa prestação de contas. Profissionalismo impecável.",
      author: "Secretário de Finanças",
      city: "Município do Norte de Minas"
    },
    {
      text: "Conseguimos captar recursos federais que antes pareciam inalcançáveis graças ao planejamento estratégico proposto.",
      author: "Prefeito Municipal",
      city: "Vale do Jequitinhonha"
    },
    {
      text: "Excelente domínio do Transferegov. Agilizou processos que estavam travados há anos na nossa administração.",
      author: "Gestora de Convênios",
      city: "Central de Minas"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-slate-900 mb-4">Confiança de quem vive a <span className="text-blue-700">Gestão Pública</span></h2>
            <p className="text-lg text-slate-600">Resultados reais em municípios que transformaram sua forma de administrar com nossa assessoria.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:shadow-xl transition-all duration-500">
              <Quote className="absolute top-6 right-8 text-blue-200 group-hover:text-blue-500 transition-colors" size={40} />
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed text-lg">"{r.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{r.author}</div>
                <div className="text-sm text-blue-600 font-medium">{r.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
