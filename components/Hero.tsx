
import React from 'react';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 skew-x-12 origin-top"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-slate-200">
              <Shield size={14} className="text-blue-600" />
              Consultoria Técnica Registrada
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-8">
              Gestão <span className="text-blue-700 italic">Pública</span> de Alta Performance.
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed font-light">
              Especialista em destravar convênios, captar recursos estratégicos e modernizar a máquina pública municipal com total transparência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a 
                href="#contato" 
                className="group flex items-center justify-center gap-3 bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-900 transition-all shadow-2xl hover:shadow-blue-200 transform hover:-translate-y-1"
              >
                Solicitar Consultoria
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos" 
                className="flex items-center justify-center bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all"
              >
                Nossas Soluções
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-slate-100">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                   </div>
                 ))}
               </div>
               <div className="text-sm font-medium text-slate-500">
                 Apoiando mais de <span className="text-slate-900 font-bold">50 municípios</span> em Minas Gerais.
               </div>
            </div>
          </div>

          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform group-hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1573164060897-425941c30241?auto=format&fit=crop&q=80&w=800" 
                alt="Consultoria Profissional" 
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Overlay Info Card */}
            <div className="absolute top-10 -left-10 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl z-20 border border-white max-w-[260px] animate-bounce-slow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle size={24} />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">98%</div>
              <div className="text-sm text-slate-500 font-medium">Sucesso em auditorias e prestações de contas.</div>
            </div>

            <div className="absolute bottom-10 -right-10 bg-blue-700 p-8 rounded-3xl shadow-2xl z-20 text-white max-w-[240px]">
              <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">Compromisso</div>
              <div className="text-lg font-serif italic mb-2">"Gestão pautada na ética e no resultado para o cidadão."</div>
              <div className="text-xs font-bold">— Ione Gonçalves</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
