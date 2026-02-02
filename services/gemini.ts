
import { GoogleGenAI } from "@google/genai";
import { siteConfig } from "../config";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAssistantStream = async (message: string) => {
  const servicesList = siteConfig.services.map(s => `- ${s.title}: ${s.desc}`).join('\n');
  
  return await ai.models.generateContentStream({
    model: 'gemini-3-flash-preview',
    contents: [{ role: 'user', parts: [{ text: message }] }],
    config: {
      systemInstruction: `Você é o Assistente Virtual da consultora ${siteConfig.personal.name}.
      
      SOBRE A CONSULTORA:
      - Nome: ${siteConfig.personal.name}
      - Papel: ${siteConfig.personal.title}
      - Biografia: ${siteConfig.personal.fullBio}
      - Experiência: ${siteConfig.personal.experienceYears}
      - Localização: ${siteConfig.personal.location}
      
      SERVIÇOS PRESTADOS:
      ${servicesList}
      
      DIRETRIZES DE RESPOSTA:
      1. Seja extremamente profissional, educado e institucional.
      2. Responda em Português do Brasil.
      3. Se perguntarem sobre preços, diga que cada projeto é único e sugira agendar uma conversa.
      4. Se perguntarem sobre contatos, forneça o WhatsApp ${siteConfig.contact.whatsappDisplay} ou o email ${siteConfig.contact.email}.
      5. Mantenha as respostas focadas em Gestão Pública e Consultoria Municipal.
      6. Se não souber algo, sugira que falem diretamente com a Ione para uma análise técnica.`,
    },
  });
};
