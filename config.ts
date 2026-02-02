
import { FileSpreadsheet, Globe, PiggyBank, Search, Target, TrendingUp } from 'lucide-react';
import React from 'react';

// --- CONFIGURAÇÃO DE ÍCONES (Não mexer aqui) ---
const Award = (props: any) => React.createElement(TrendingUp, props);
const Building2 = (props: any) => React.createElement(Globe, props);

export const siteConfig = {
  // --- SUAS INFORMAÇÕES PESSOAIS ---
  personal: {
    name: "Ione Gonçalves", // Seu nome completo
    title: "Consultora em Gestão Pública", // Seu cargo/título
    shortBio: "Especialista em assessoria para municípios, convênios e modernização administrativa.",
    
    // Sua biografia detalhada (Aparece na seção "Sobre")
    fullBio: "Com mais de uma década de experiência no setor público, Ione Gonçalves é referência em consultoria para prefeituras. Sua atuação é focada na desburocratização, captação de recursos estratégicos e execução rigorosa de convênios, garantindo que a gestão municipal seja sinônimo de eficiência e legalidade.",
    
    experienceYears: "10+", // Anos de experiência
    location: "Minas Gerais / Atendimento em todo Brasil", // Onde você atende
    
    // FOTO PRINCIPAL: Coloque o link da sua foto entre as aspas abaixo
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },

  // --- SEUS CONTATOS ---
  contact: {
    // WhatsApp: Apenas números, com o código do país (55) e o DDD. Ex: 5538999999999
    whatsapp: "5538999999999", 
    whatsappDisplay: "(38) 99999-9999", // Como o número aparece visualmente no site
    email: "contato@ionegoncalves.com.br",
    
    // Links das redes sociais (se não tiver, pode deixar vazio "")
    linkedin: "https://linkedin.com/in/ionegoncalves",
    instagram: "https://instagram.com/ionegoncalves",
    facebook: "https://facebook.com/ionegoncalves",
  },

  // --- NÚMEROS DE DESTAQUE (Aparecem logo abaixo do início) ---
  stats: [
    { label: "Anos de Experiência", value: "10+", icon: Award },
    { label: "Municípios Atendidos", value: "50+", icon: Building2 },
    { label: "Aprovação em Convênios", value: "98%", icon: TrendingUp },
    { label: "Recursos Captados", value: "R$ 50M+", icon: PiggyBank },
  ],

  // --- SEUS SERVIÇOS (Você pode mudar os nomes e as descrições abaixo) ---
  services: [
    {
      title: "Gestão de Convênios",
      desc: "Operacionalização completa no Transferegov, desde o cadastramento até a prestação de contas final.",
      icon: FileSpreadsheet,
      color: "blue"
    },
    {
      title: "Captação de Recursos",
      desc: "Identificação de editais e oportunidades de emendas parlamentares para o seu município.",
      icon: PiggyBank,
      color: "blue"
    },
    {
      title: "Planejamento Estratégico",
      desc: "Apoio técnico na elaboração de PPA, LDO e LOA, alinhando metas à viabilidade orçamentária.",
      icon: Target,
      color: "slate"
    },
    {
      title: "Auditoria e Compliance",
      desc: "Análise preventiva de processos administrativos para evitar apontamentos em tribunais de contas.",
      icon: Search,
      color: "slate"
    }
  ],

  // --- PASSO A PASSO DO SEU TRABALHO ---
  process: [
    { step: "01", title: "Diagnóstico", desc: "Análise profunda da situação atual dos convênios do município." },
    { step: "02", title: "Planejamento", desc: "Criação de um cronograma de ações para captação de recursos." },
    { step: "03", title: "Execução", desc: "Acompanhamento técnico diário e suporte direto às secretarias." },
    { step: "04", title: "Resultados", desc: "Entrega de obras concluídas e contas aprovadas com transparência." }
  ]
};
