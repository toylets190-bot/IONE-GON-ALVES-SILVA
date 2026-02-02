
# 🚀 Guia de Publicação - Ione Gonçalves Consultoria

Parabéns pelo seu novo site! Ele foi desenvolvido com tecnologias de ponta. Siga os passos abaixo para deixá-lo online no GitHub.

## 1. Onde Editar as Informações?
Abra o arquivo `config.ts`. 
Lá você encontrará comentários em português (começando com `//`) explicando exatamente onde colocar:
- Seu nome e biografia.
- Seus contatos (WhatsApp, E-mail, Redes Sociais).
- Seus serviços.
- Links para suas fotos.

## 2. Como trocar as fotos?
No arquivo `config.ts`, procure pela linha que diz `image: "..."`. 
Você pode:
1. Usar um link de uma imagem que já esteja na internet.
2. Ou, se for subir para o GitHub, coloque a foto na pasta do projeto e use o nome dela, ex: `image: "minha-foto-perfil.jpg"`.

## 3. Como postar no GitHub (Passo a Passo)
Para este site funcionar no GitHub, o jeito mais fácil é usar o **Vercel** ou **Netlify** conectado ao seu GitHub:

1. **Crie uma conta no GitHub** (se ainda não tiver).
2. **Crie um novo repositório** chamado `consultoria-gestao-publica`.
3. **Suba todos os arquivos** deste projeto para lá.
4. **Crie uma conta na [Vercel](https://vercel.com/)** (é gratuito).
5. Clique em **"Add New"** > **"Project"**.
6. Importe o repositório do GitHub que você acabou de criar.
7. **IMPORTANTE:** Nas configurações de "Environment Variables" na Vercel, adicione:
   - Key: `API_KEY`
   - Value: (A sua chave do Google Gemini para o chat funcionar).
8. Clique em **Deploy**.

Pronto! Seu site ganhará um endereço como `consultoria-gestao-publica.vercel.app`.

---
*Dica: Se precisar de ajuda com a Chave de API do Google, acesse [aistudio.google.com](https://aistudio.google.com/).*
