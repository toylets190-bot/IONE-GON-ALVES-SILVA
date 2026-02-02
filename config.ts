
import { FileSpreadsheet, Globe, PiggyBank, Search, Target, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import React from 'react';

// --- GUIA DE EDIÇÃO ---
// 1. Fotos: Coloque o link entre as aspas em 'image'.
// 2. Textos: Altere o que está entre as aspas.
// 3. WhatsApp: Use o formato 55 + DDD + Numero (sem espaços).

export const siteConfig = {
  personal: {
    name: "Ione Gonçalves",
    title: "Consultoria & Gestão Pública",
    shortBio: "Especialista em destravar recursos federais e modernizar a administração municipal.",
    fullBio: "Com mais de uma década de atuação, Ione Gonçalves é especialista em converter burocracia em resultados. Atua diretamente na captação de recursos estratégicos e na gestão técnica de convênios, garantindo que o município cumpra todas as exigências dos órgãos fiscalizadores.",
    experienceYears: "10+",
    location: "Minas Gerais | Atendimento Nacional",
    // TROQUE O LINK DA FOTO ABAIXO
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },

  contact: {
    whatsapp: "5538999999999", 
    whatsappDisplay: "(38) 99999-9999",
    email: "contato@ionegoncalves.com.br",
    linkedin: "#",
    instagram: "#",
  },

  // ÍCONES DE DESTAQUE
  stats: [
    { label: "Anos de Experiência", value: "10+", icon: TrendingUp },
    { label: "Municípios Atendidos", value: "50+", icon: Globe },
    { label: "Aprovação Técnica", value: "98%", icon: ShieldCheck },
    { label: "Recursos Captados", value: "R$ 50M+", icon: PiggyBank },
  ],

  services: [
    {
      title: "Gestão de Convênios",
      desc: "Domínio completo do Transferegov, do cadastro à prestação de contas final sem glosas.",
      icon: FileSpreadsheet,
    },
    {
      title: "Captação de Recursos",
      desc: "Identificação estratégica de emendas e editais para financiamento de obras e saúde.",
      icon: PiggyBank,
    },
    {
      title: "Planejamento Orçamentário",
      desc: "Suporte técnico na elaboração de PPA, LDO e LOA com foco em viabilidade real.",
      icon: Target,
    },
    {
      title: "Auditoria e Compliance",
      desc: "Revisão preventiva de processos para evitar apontamentos em Tribunais de Contas.",
      icon: Search,
    }
  ],

  process: [
    { step: "01", title: "Diagnóstico", desc: "Análise situacional de convênios e pendências do município." },
    { step: "02", title: "Estratégia", desc: "Criação de um plano de metas para captação e regularização." },
    { step: "03", title: "Execução", desc: "Acompanhamento técnico presencial e remoto diário." },
    { step: "04", title: "Resultado", desc: "Aprovação de contas e entrega de benefícios à população." }
  ]
};
