
import { FileSpreadsheet, Globe, PiggyBank, Search, Target, TrendingUp } from 'lucide-react';
import React from 'react';

// Use React.createElement to avoid JSX syntax in a .ts file
const Award = (props: any) => React.createElement(TrendingUp, props);
const Building2 = (props: any) => React.createElement(Globe, props);

export const siteConfig = {
  personal: {
    name: "Ione Gonçalves",
    title: "Consultora em Gestão Pública",
    shortBio: "Especialista em assessoria para municípios, convênios e modernização administrativa.",
    fullBio: "Com mais de uma década de experiência no setor público, Ione Gonçalves é referência em consultoria para prefeituras. Sua atuação é focada na desburocratização, captação de recursos estratégicos e execução rigorosa de convênios, garantindo que a gestão municipal seja sinônimo de eficiência e legalidade.",
    experienceYears: "10+",
    location: "Minas Gerais / Remoto para todo o Brasil",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  contact: {
    whatsapp: "5538999999999",
    whatsappDisplay: "(38) 99999-9999",
    email: "contato@ionegoncalves.com.br",
    linkedin: "https://linkedin.com/in/ionegoncalves",
    instagram: "https://instagram.com/ionegoncalves",
    facebook: "https://facebook.com/ionegoncalves",
  },
  stats: [
    { label: "Anos de Experiência", value: "10+", icon: Award },
    { label: "Municípios Atendidos", value: "50+", icon: Building2 },
    { label: "Aprovação em Convênios", value: "98%", icon: TrendingUp },
    { label: "Recursos Captados", value: "R$ 50M+", icon: PiggyBank },
  ],
  services: [
    {
      title: "Gestão de Convênios",
      desc: "Operacionalização completa no Transferegov (antigo SICONV), desde o cadastramento até a prestação de contas final.",
      icon: FileSpreadsheet,
      color: "blue"
    },
    {
      title: "Captação de Recursos",
      desc: "Identificação de editais e oportunidades de emendas parlamentares e recursos extraordinários para o município.",
      icon: PiggyBank,
      color: "blue"
    },
    {
      title: "Planejamento Estratégico",
      desc: "Apoio técnico na elaboração de PPA, LDO e LOA, alinhando as metas políticas à viabilidade orçamentária.",
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
  process: [
    { step: "01", title: "Diagnóstico", desc: "Análise profunda da situação atual dos convênios e finanças do município." },
    { step: "02", title: "Planejamento", desc: "Criação de um cronograma de ações para captação e regularização de pendências." },
    { step: "03", title: "Execução", desc: "Acompanhamento técnico diário e suporte direto às secretarias municipais." },
    { step: "04", title: "Resultados", desc: "Entrega de obras concluídas e contas aprovadas com transparência total." }
  ]
};
