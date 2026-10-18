import "./Home.style.css"
import { profile } from "../../data/profile"

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="icon icon-arrow"><path d="M3 13 13 3M5 3h8v8" /></svg>
)

const ArrowRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="icon icon-arrow-right"><path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" /></svg>
)

const DownloadIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="icon icon-download"><path d="M8 2.5v7M5.2 7.2 8 10l2.8-2.8M3 12.5h10" /></svg>
)

const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-social"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.45-1.11-1.45-.9-.62.07-.61.07-.61.99.07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.82.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.21 2.4.11 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
)

const LinkedinIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-social"><path d="M5.16 7.67A1.67 1.67 0 1 0 5.16 4.33a1.67 1.67 0 0 0 0 3.34ZM3.7 19.67h2.92v-9.38H3.7v9.38ZM8.46 10.29h2.8v1.28h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.49 1.94 3.49 4.46v5.16h-2.92v-4.57c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.75 1.18-1.75 2.42v4.65H8.46v-9.38Z" /></svg>
)

const projects = [
  { number: "01", title: "Runfree · gestão de corridas", description: "Plataforma para organizadores gerenciarem múltiplos eventos, inscrições, equipes, patrocinadores e balanços. A demonstração apresenta dados fictícios em modo de consulta.", tags: ["React", "Supabase", "Eventos"], tone: "orange", url: "https://runfree.lovable.app/auth?next=%2Fdemo" },
  { number: "02", title: "Acompanhamento das Eleições BR", description: "Visualização de dados eleitorais oficiais, candidatos, votos e boletins de urna em uma interface para explorar os resultados.", tags: ["Dados públicos", "Eleições", "Web"], tone: "blue", url: "https://acompanhamento-eleicoes.vercel.app/" },
  { number: "03", title: "Portfólio 2.0", description: "Uma casa digital para apresentar meu trabalho com clareza, personalidade e boas histórias.", tags: ["React", "TypeScript", "Vite"], tone: "blue", url: "https://github.com/atilamariano/portifolio-2.0" },
]

const services = [
  { index: "01", title: "Produtos web", description: "Interfaces que traduzem problemas complexos em caminhos claros para quem usa." },
  { index: "02", title: "Sistemas que duram", description: "Back-end consistente, integrações bem pensadas e código preparado para evoluir." },
  { index: "03", title: "Do plano ao deploy", description: "Visão de ponta a ponta para tirar uma ideia do papel sem perder o que importa." },
]

export default function Home() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Atila Mariano, início"><span className="brand-mark">AM</span><span className="brand-name">atila<span>.</span>dev</span></a>
        <nav className="main-nav" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#trabalho">Trabalho</a><a href="#especialidades">IA &amp; entrega</a><a href="#stack">Stack</a></nav>
        <a className="header-contact" href={profile.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> construindo produtos digitais</p>
            <h1>Construo experiências digitais <em>que fazem sentido.</em></h1>
            <p className="hero-description">Sou Atila Mariano, desenvolvedor focado em transformar problemas reais em produtos web claros, rápidos e fáceis de evoluir.</p>
            <div className="hero-actions"><a className="button button-primary" href="#trabalho">Ver meu trabalho <ArrowRight /></a><a className="button button-quiet" href={profile.curriculumUrl} download>Baixar currículo <DownloadIcon /></a></div>
            <div className="hero-footnote"><span>Brasil, remoto</span><span className="footnote-separator" /><span>Desenvolvimento full-stack</span></div>
          </div>
          <div className="hero-visual" aria-label="Resumo visual do trabalho">
            <div className="profile-card">
              <div className="profile-photo-frame"><img src="/atila-mariano.jfif" alt="Atila Mariano" /></div>
              <div className="profile-card-copy"><span>01 / perfil</span><strong>Atila Mariano</strong><small>dev · IA · automação</small></div>
            </div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-card">
              <div className="code-card-bar"><span className="window-dots"><i /><i /><i /></span><span>next-project.ts</span><span className="code-card-status">● live</span></div>
              <pre><code><span className="code-muted">const</span> <span className="code-blue">nextProject</span> = {'{'}{`\n`}  <span className="code-key">impact</span>: <span className="code-string">&quot;real&quot;</span>,{`\n`}  <span className="code-key">complexity</span>: <span className="code-string">&quot;simple&quot;</span>,{`\n`}  <span className="code-key">details</span>: <span className="code-string">&quot;intentional&quot;</span>{`\n`}{'}'}</code></pre>
              <div className="code-card-footer"><span>01</span><span>pensar · construir · melhorar</span></div>
            </div>
            <div className="visual-caption"><span className="caption-line" /> código com intenção</div>
          </div>
        </section>

        <section className="intro-strip section-wrap" id="sobre"><p className="section-kicker">/ sobre mim</p><div className="intro-content"><h2>Não é só sobre fazer funcionar.<br /><span>É sobre fazer valer a pena usar.</span></h2><div className="intro-text"><p>Gosto de trabalhar na interseção entre tecnologia, produto e experiência. Começo entendendo o problema, organizo o caos e construo soluções que continuam fazendo sentido depois do primeiro deploy.</p><a className="text-link" href={`mailto:${profile.email}`}>Conheça meu jeito de trabalhar <ArrowUpRight /></a></div></div></section>

        <section className="services-section section-wrap"><div className="section-heading"><p className="section-kicker">/ como posso ajudar</p><span className="section-count">03 áreas de impacto</span></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.index}><span className="service-index">{service.index}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-line" /></article>)}</div></section>

        <section className="specialties-section section-wrap" id="especialidades">
          <div className="specialties-intro"><p className="section-kicker">/ além do código</p><h2>IA aplicada.<br /><span>Entrega contínua.</span></h2><p>Construo automações que aumentam a qualidade do time e encurtam o caminho entre uma ideia, um commit e uma entrega confiável.</p></div>
          <div className="capabilities-grid">
            <article className="capability-card capability-ai"><span className="capability-index">01</span><span className="capability-label">IA aplicada</span><h3>Modelos que trabalham junto.</h3><p>Uso IA para organizar contexto, acelerar decisões e transformar tarefas repetitivas em fluxos inteligentes.</p><div className="capability-tags"><span>LLMs</span><span>Prompts</span><span>Contexto</span></div></article>
            <article className="capability-card capability-cicd"><span className="capability-index">02</span><span className="capability-label">CI / CD</span><h3>Entrega com confiança.</h3><p>Pipelines, checks e automações para que cada mudança chegue mais rápido sem abrir mão da segurança.</p><div className="capability-tags"><span>Build</span><span>Checks</span><span>Deploy</span></div></article>
            <article className="capability-card capability-agents"><span className="capability-index">03</span><span className="capability-label">Agentes de automação</span><h3>O trabalho certo no momento certo.</h3><p>Agentes especializados, como um validador de código, que analisam, sinalizam riscos e devolvem feedback acionável.</p><div className="capability-tags"><span>OpenCode</span><span>Code validator</span><span>Workflows</span></div></article>
          </div>
          <div className="automation-case"><div className="automation-case-top"><span>case / validador de código</span><span className="automation-status"><i /> automação ativa</span></div><div className="automation-flow"><span>commit</span><b>→</b><span>agente analisa</span><b>→</b><span>feedback</span><b>→</b><strong>merge seguro</strong></div></div>
        </section>

        <section className="work-section section-wrap" id="trabalho"><div className="section-heading work-heading"><div><p className="section-kicker">/ trabalho selecionado</p><h2>Projetos com propósito.</h2></div><a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">Ver GitHub <ArrowUpRight /></a></div><div className="projects-list">{projects.map((project) => <a className={`project-card project-${project.tone}`} key={project.number} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.title} em nova aba`}><div className="project-number">{project.number}</div><div className="project-main"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow"><ArrowUpRight /></span></a>)}</div></section>

        <section className="stack-section section-wrap" id="stack"><div className="stack-heading"><p className="section-kicker">/ ferramentas do dia a dia</p><h2>Uma stack pragmática.<br /><span>Escolhida para entregar.</span></h2></div><div className="stack-cloud" aria-label="Tecnologias utilizadas">{['C#', '.NET', 'ASP.NET MVC', 'JavaScript', 'React', 'TypeScript', 'SQL Server', 'Dapper', 'SignalR', 'Git', 'CI/CD', 'OpenCode', 'Agentes IA'].map((technology, index) => <span className={index === 0 || index === 4 || index === 6 || index > 9 ? 'stack-pill stack-pill-highlight' : 'stack-pill'} key={technology}>{technology}</span>)}</div></section>

        <section className="contact-section section-wrap" id="contato"><div className="contact-copy"><p className="section-kicker">/ vamos criar algo bom</p><h2>Tem um problema interessante?<br /><em>Eu quero ouvir.</em></h2></div><div className="contact-action"><p>Seja uma ideia em fase inicial ou um produto que precisa de uma nova direção, a conversa começa simples.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a><a className="contact-whatsapp" href={profile.whatsappUrl} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight /></a></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">AM</span><span className="brand-name">atila<span>.</span>dev</span></a><span>Feito com intenção · {new Date().getFullYear()}</span><div className="social-links"><a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a><a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a><a className="social-whatsapp" href={profile.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></footer>
    </div>
  )
}
