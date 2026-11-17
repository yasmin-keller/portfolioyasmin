import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Check, Menu, MessageCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Accordion from "@radix-ui/react-accordion";
import nutrition from "@/assets/projeto-nutricionista.webp.asset.json";
import aesthetics from "@/assets/projeto-estetica.webp.asset.json";
import { packages, processTiming, WHATSAPP_URL } from "@/lib/portfolio-config";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Yasmin Keller · Sites com IA para negócios locais | Santos" },
    { name: "description", content: "Sites e landing pages para negócios locais e profissionais autônomos de Santos e região. Conheça os projetos demonstrativos de Yasmin Keller e converse pelo WhatsApp." },
    { property: "og:title", content: "Yasmin Keller · Sites com IA para negócios locais | Santos" },
    { property: "og:description", content: "Sites claros, revisados no celular e publicados no domínio do seu negócio. Conheça o trabalho de Yasmin Keller, de Santos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [["Projetos", "projetos"], ["Como funciona", "como-funciona"], ["Pacotes", "pacotes"], ["Perguntas", "perguntas"], ["Contato", "contato"]];
const projects = [
  { name: "Clara Moura · Nutrição", niche: "Nutricionista", action: "Agendar consulta pelo WhatsApp", url: "https://demonutricionista.lovable.app", image: nutrition.url },
  { name: "Ateliê Sereno · Estética", niche: "Centro de estética", action: "Solicitar avaliação pelo WhatsApp", url: "https://democlinestetica.lovable.app", image: aesthetics.url },
];
const steps = [
  { title: "Uma conversa para começar", text: `Conversa de ${processTiming.conversationMinutes} minutos: entendo o seu negócio e mostro uma demonstração no celular.` },
  { title: "Proposta clara", text: "Proposta clara, enviada por escrito no mesmo dia." },
  { title: "Seu negócio, em detalhes", text: "Você responde um briefing e envia logo, fotos e informações." },
  { title: "Primeira versão e ajustes", text: `Primeira versão revisada no celular, com até ${processTiming.revisions} rodadas de ajustes.` },
  { title: "Seu site no ar", text: `Publicação no seu domínio, em uma chamada de ${processTiming.publicationMinutes} minutos, e um guia de entrega.` },
];
const questions = [
  ["O domínio fica no nome de quem?", "No CPF ou CNPJ do seu negócio. Eu nunca peço a sua senha: a configuração é feita em uma chamada com tela compartilhada."],
  ["Quanto tempo leva?", "O Essencial leva cerca de 7 dias úteis e o Institucional de 12 a 15, contando a partir do recebimento dos materiais."],
  ["Posso pedir alterações depois de pronto?", "Sim. Pelo Cuidado mensal, dentro dos ajustes combinados, ou como um serviço avulso."],
  ["Preciso ter textos e fotos?", "Organizo e melhoro as informações que você me enviar. Textos criados do zero entram como adicional."],
  ["O site garante mais clientes?", "Não prometo vendas nem posição no Google. Entrego o site combinado, revisado no celular e com o contato funcionando."],
  ["Você faz loja virtual ou agendamento online?", "No momento, não. O contato é pelo WhatsApp."],
];

function WhatsAppButton({ floating = false }: { floating?: boolean }) {
  return <Button asChild variant="editorial" size="editorial" className={floating ? "floating-whatsapp" : undefined}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /><span>Conversar pelo WhatsApp</span><ArrowRight aria-hidden="true" /></a></Button>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    sections.forEach(section => { if (section.getBoundingClientRect().top > window.innerHeight) section.classList.add("will-reveal"); observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header">
      <div className="page-width header-inner">
        <a href="#conteudo" className="brand" aria-label="Yasmin Keller · Sites com IA"><span className="brand-name">Yasmin Keller<span className="brand-dot">.</span></span><span className="brand-descriptor">SITES COM IA</span></a>
        <nav aria-label="Menu principal" className={menuOpen ? "navigation is-open" : "navigation"}>{navigation.map(([label, id]) => <Button key={id} variant="editorialLink" asChild><a href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a></Button>)}</nav>
        <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <main id="conteudo">
      <section className="hero page-width" aria-labelledby="abertura-titulo">
        <div className="hero-copy"><p className="eyebrow"><span />SANTOS E REGIÃO · ATENDIMENTO ONLINE</p>
          <h1 id="abertura-titulo">Sites e landing pages para negócios locais, com o caminho até o seu <em>WhatsApp funcionando.</em></h1>
          <p className="hero-description">Organizo seus serviços, localização e contato em uma página clara, revisada no celular e publicada no domínio do seu negócio.</p>
          <div className="hero-actions"><WhatsAppButton /><Button variant="editorialLink" asChild><a href="#projetos">Ver projetos <ArrowDown aria-hidden="true" /></a></Button></div>
        </div>
        <figure className="hero-preview"><div className="phone"><div className="phone-camera" /><div className="phone-screen"><img src={nutrition.url} width="1465" height="768" alt="Captura de tela do projeto demonstrativo Clara Moura · Nutrição" /><div className="phone-screen-bottom" /></div><div className="phone-home" /></div><figcaption><span className="caption-line" />Clara Moura · Nutrição<span>Projeto demonstrativo</span></figcaption></figure>
      </section>

      <section id="projetos" className="section-band secondary-band reveal"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow"><span />PORTFÓLIO</p><h2>Projetos demonstrativos<span className="accent-period">.</span></h2></div><p>Sites criados para mostrar o meu trabalho,<br className="desktop-break" /> com marcas e dados fictícios.</p></div>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.name}><div className="project-image"><img src={project.image} alt={`Captura de tela do projeto demonstrativo ${project.name}`} loading="lazy" width="1473" height="768" /><span className="demo-label">Projeto demonstrativo</span></div><div className="project-info"><p className="project-niche">{project.niche}</p><h3>{project.name}</h3><p className="project-action"><MessageCircle aria-hidden="true" />{project.action}</p><Button variant="editorialOutline" size="editorial" asChild><a href={project.url} target="_blank" rel="noopener">Ver site <ArrowRight aria-hidden="true" /></a></Button></div></article>)}</div>
      </div></section>

      <section id="como-funciona" className="section-band reveal"><div className="page-width"><p className="eyebrow"><span />DO PRIMEIRO CONTATO À PUBLICAÇÃO</p><h2>Como funciona<span className="accent-period">.</span></h2><ol className="process-grid">{steps.map((step, i) => <li key={step.title}><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>

      <section id="pacotes" className="section-band secondary-band reveal"><div className="page-width"><div className="section-heading"><div><p className="eyebrow"><span />UM ESCOPO CLARO, DO INÍCIO AO FIM</p><h2>Pacotes<span className="accent-period">.</span></h2></div><p>Valor fixo apresentado na conversa,<br className="desktop-break" /> de acordo com o pacote.</p></div><div className="package-grid">{packages.map((pack, i) => <article className="package-card" key={pack.name}><span className="package-index">0{i + 1}</span><h3>{pack.name}</h3><p className="package-subtitle">{pack.subtitle}</p><ul>{pack.features.map(feature => <li key={feature}><Check aria-hidden="true" /><span>{feature}</span></li>)}</ul>{pack.deadline && <p className="package-note"><strong>Prazo</strong>{pack.deadline}</p>}{pack.note && <p className="package-note">{pack.note}</p>}<WhatsAppButton /></article>)}</div><p className="additions">Adicionais: página extra, animação, imagens criadas com IA, textos do zero, rodada extra de revisão.</p></div></section>

      <section id="sobre" className="section-band about-section reveal"><div className="page-width about-inner"><div className="portrait" aria-label="Iniciais de Yasmin Keller">YK</div><div><p className="eyebrow"><span />QUEM ESTÁ POR TRÁS</p><h2>Sou a Yasmin, de Santos<span className="accent-period">.</span></h2><p>Sou a Yasmin, de Santos. Trabalho com dados e tecnologia, sou formada em Nutrição pela UNIFESP e estou concluindo Análise e Desenvolvimento de Sistemas. Uso ferramentas de IA para construir sites com agilidade e reviso tudo manualmente, no celular, antes de entregar.</p></div></div></section>

      <section id="perguntas" className="section-band secondary-band reveal"><div className="page-width faq-grid"><div><p className="eyebrow"><span />SEM LETRAS MIÚDAS</p><h2>Perguntas<br />frequentes<span className="accent-period">.</span></h2></div><Accordion.Root type="single" collapsible className="faq-list">{questions.map(([question, answer], i) => <Accordion.Item value={`question-${i}`} key={question} className="faq-item"><Accordion.Header><Accordion.Trigger className="faq-trigger">{question}<Plus aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="faq-content"><p>{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>

      <section id="contato" className="section-band contact-section reveal"><div className="page-width contact-inner"><p className="eyebrow"><span />SEU PRÓXIMO PASSO</p><h2>Vamos conversar<br />sobre o seu site?</h2><p>Me conte o que o seu negócio faz e eu te mostro como poderia ficar.</p><WhatsAppButton /></div></section>
    </main>
    <footer className="site-footer"><div className="page-width footer-inner"><p>Yasmin Keller · Sites com IA · Santos/SP</p><p>Os projetos exibidos são demonstrativos, com marcas e dados fictícios.</p></div></footer>
    <WhatsAppButton floating />
  </>;
}
