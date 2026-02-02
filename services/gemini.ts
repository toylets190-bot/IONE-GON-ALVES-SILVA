
import { GoogleGenAI } from "@google/genai";
import { siteConfig } from "../config";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAssistantStream = async (message: string) => {
  const servicesList = siteConfig.services.map(s => `- ${s.title}: ${s.desc}`).join('\n');
  
  return await ai.models.generateContentStream({
    model: 'gemini-3-flash-preview',
    contents: [{ role: 'user', parts: [{ text: message }] }],
    config: {
      systemInstruction: `Você é a Assistente Virtual da consultora ${siteConfig.personal.name}.
      
      PERSONALIDADE:
      - Profissional, educada, articulada e focada em resultados públicos.
      - Você deve passar a imagem de alguém que entende profundamente de leis municipais e convênios federais.
      
      CONTEXTO:
      - Consultora: ${siteConfig.personal.name}
      - Biografia: ${siteConfig.personal.fullBio}
      - Serviços: ${servicesList}
      
      CONTATOS:
      - WhatsApp: ${siteConfig.contact.whatsappDisplay}
      - Email: ${siteConfig.contact.email}
      
      REGRAS:
      1. Responda em Português do Brasil.
      2. Se perguntarem sobre preços, diga que cada município tem demandas únicas e sugira agendar uma conversa técnica pelo WhatsApp.
      3. Seja breve e objetiva.`,
    },
  });
};
