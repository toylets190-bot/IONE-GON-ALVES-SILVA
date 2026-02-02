
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Pronto para elevar o nível da sua gestão?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Vamos conversar sobre como podemos otimizar a captação de recursos e a execução de convênios no seu município.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-700 flex-shrink-0 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Atendimento Direto</h4>
                  <p className="text-slate-500 font-medium">{siteConfig.contact.whatsappDisplay}</p>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" className="text-blue-600 font-bold flex items-center gap-1 mt-1 text-sm hover:underline">
                    <MessageCircle size={16} /> Abrir WhatsApp Agora
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-700 flex-shrink-0 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">E-mail Corporativo</h4>
                  <p className="text-slate-500 font-medium">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-700 flex-shrink-0 border border-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Localização</h4>
                  <p className="text-slate-500 font-medium">{siteConfig.personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-500">Obrigado pelo contato. Retornaremos em breve.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-blue-600 font-bold text-sm underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Envie uma proposta de consultoria</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Nome</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Prefeitura / Município</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Assunto</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-200"
                  >
                    {formStatus === 'loading' ? 'Enviando...' : (
                      <>
                        Enviar Agora <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
