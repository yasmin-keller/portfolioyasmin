export const WHATSAPP_NUMERO = "511945343249";
export const WHATSAPP_MESSAGE = "Olá, Yasmin! Vi o seu portfólio e quero conversar sobre um site.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const packages = [
  {
    name: "Essencial", subtitle: "Landing page", pages: 1, maxSections: 5, revisions: 2, days: [7, 7],
    features: ["1 página com até 5 seções", "Botão de WhatsApp com mensagem pronta", "Mapa e redes sociais do negócio", "SEO básico: título, descrição e imagem de compartilhamento", "2 rodadas de revisão", "Publicação no seu domínio", "Guia de entrega"],
    deadline: "Cerca de 7 dias úteis após receber os materiais.",
  },
  {
    name: "Institucional", subtitle: "Até 3 páginas", pages: 3, revisions: 2, days: [12, 15],
    features: ["Tudo do Essencial", "Páginas de serviços e portfólio", "Ficha de direção de arte"],
    deadline: "12 a 15 dias úteis após receber os materiais.",
  },
  {
    name: "Cuidado mensal", subtitle: "Continuidade para o seu site", frequency: "monthly",
    features: ["Hospedagem", "Ajustes pequenos por mês, com quantidade combinada na proposta", "Uma conferência mensal do site"],
    note: "Páginas ou funções novas são orçadas à parte.",
  },
];

export const processTiming = { conversationMinutes: 40, proposalSameDay: true, revisions: 2, publicationMinutes: 20 };