
import React from 'react';
import { Briefcase, FileSpreadsheet, Globe, PiggyBank, Search, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Briefcase size={32} />,
      title: "Consultoria Especializada",
      desc: "Assessoria técnica contínua para prefeitos e secretários na tomada de decisões estratégicas.",
      color: "blue"
    },
    {
      icon: <FileSpreadsheet size={32} />,
      title: "Gestão de Convênios",
      desc: "Operacionalização completa de sistemas como SICONV/Transferegov, do cadastro à prestação de contas.",
      color: "slate"
    },
    {
      icon: <PiggyBank size={32} />,
      title: "Captação de Recursos",
      desc: "Identificação de oportunidades e elaboração de projetos para obtenção de recursos extras.",
      color: "blue"
    },
    {
      icon: <Settings size={32} />,
      title: "Planejamento Estratégico",
      desc: "Elaboração de PPA, LDO e LOA com foco em metas reais e viabilidade financeira.",
      color: "slate"
    },
    {
      icon: <Search size={32} />,
      title: "Auditoria de Processos",
      desc: "Análise técnica preventiva para garantir a conformidade com as leis de responsabilidade fiscal.",
      color: "blue"
    },
    {
      icon: <Globe size={32} />,
      title: "Modernização da Gestão",
      desc: "Implementação de novas tecnologias e fluxos de trabalho para aumentar a eficiência administrativa.",
      color: "slate"
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-6">Soluções Integradas para o Setor Público</h2>
          <p className="text-lg text-slate-600">
            Oferecemos uma gama completa de serviços para transformar a administração do seu município em um modelo de eficiência e transparência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`mb-6 inline-flex p-4 rounded-xl ${s.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'} group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{s.desc}</p>
              <a href="#contato" className="text-sm font-bold text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Solicitar Proposta 
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-serif mb-6">Precisa de uma solução personalizada?</h3>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
            Analisamos as necessidades específicas do seu município para criar um plano de consultoria sob medida.
          </p>
          <a href="#contato" className="inline-block bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all">
            Agendar Reunião Técnica
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
