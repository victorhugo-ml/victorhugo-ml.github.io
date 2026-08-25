"use client";

import { LanguageSwitcher, type Locale, usePortfolioLanguage } from "./language";

const localizedTitles: Record<Locale, string> = {
  pt: "Victor Hugo — Dados, análise e produto",
  en: "Victor Hugo — Data, analysis, and product",
  es: "Victor Hugo — Datos, análisis y producto",
};

const translations = {
  pt: {
    navLabel: "Navegação principal",
    homeLabel: "Início",
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato" },
    available: "Disponível para estágio",
    hero: ["Dados, código", "e produto —"],
    heroAccent: "com propósito.",
    intro: "Sou Victor Hugo, estudante da UFABC. Investigo redes financeiras, desenvolvo análises e uso projetos pessoais para aprofundar o que aprendo sobre dados, método e produto.",
    seeProjects: "Ver projetos",
    signals: [
      ["Formação", "UFABC"],
      ["Portfólio", "2 projetos públicos"],
      ["Interesse", "Dados + análise"],
    ],
    focus: "Foco atual",
    focusItems: [
      ["Dados & grafos", "Estrutura, contexto e investigação."],
      ["Produto & IA", "Definição, iteração e validação."],
    ],
    selected: "Trabalho selecionado",
    projectHeading: ["Dois projetos.", "Duas perspectivas."],
    paysim: "Análise exploratória de fraude com uma amostra estrutural de 1.000 transações e grafos direcionados.",
    noisDois: "Projeto pessoal para mim e minha namorada: defini as funcionalidades e coordenei com IA generativa a criação de um app compartilhado para rotina e memórias.",
    noisTags: ["Projeto pessoal", "IA generativa", "Produto"],
    explore: "Ver estudo de caso",
    how: "Como eu trabalho",
    approachHeading: ["Curiosidade com", "método."],
    approaches: [
      ["Investigar", "Transformo perguntas amplas em análises delimitadas, com metodologia e limitações visíveis."],
      ["Orientar", "Conduzo iterações com clareza sobre o papel das ferramentas e testo os resultados antes de apresentá-los."],
      ["Evoluir", "Uso documentação, testes, CI e Pull Requests para melhorar projetos sem apagar sua história."],
    ],
    aboutLabel: "Sobre",
    aboutHeading: ["Aprender fazendo.", "Entender evoluindo."],
    aboutText: "Curso Bacharelado em Ciência e Tecnologia na UFABC, com trajetória planejada para Ciência de Dados. Minha experiência anterior no SENAI e na Mercedes-Benz trouxe disciplina de execução; hoje aplico essa base a problemas de dados e tecnologia.",
    ufabc: "BC&T · trajetória para Ciência de Dados",
    technical: "Aprendizagem técnica",
    languages: ["Português nativo", "Inglês C1 (EF SET)", "Espanhol intermediário"],
    tools: "Ferramentas em prática",
    toolsHeading: ["Uma base voltada a", "dados e investigação."],
    dataAnalysis: "Dados & análise",
    methods: "Métodos em prática",
    methodsList: "Análise exploratória · Amostragem estrutural · Grafos direcionados · Métricas de rede",
    transparencyTitle: "Transparência sobre o Nós Dois.",
    transparency: "A implementação foi produzida majoritariamente com IA generativa. Meu papel foi idealizar o produto, definir requisitos, orientar iterações, testar resultados e publicar uma versão sanitizada. O projeto demonstra coordenação e validação de IA, não autoria independente de frontend ou backend.",
    letsTalk: "Vamos conversar",
    contactHeading: ["Procuro problemas", "que valham a pena", "entender."],
    contactCopy: "Aberto a oportunidades de estágio em dados, analytics ou inteligência de negócios.",
    portfolio: "Victor Hugo · Portfólio",
    top: "Voltar ao topo ↑",
  },
  en: {
    navLabel: "Main navigation",
    homeLabel: "Home",
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    available: "Open to internship opportunities",
    hero: ["Data, code", "and product —"],
    heroAccent: "with purpose.",
    intro: "I’m Victor Hugo, a student at UFABC. I explore financial networks, develop analyses, and use personal projects to deepen what I learn about data, method, and product.",
    seeProjects: "View projects",
    signals: [
      ["Education", "UFABC"],
      ["Portfolio", "2 public projects"],
      ["Interest", "Data + analysis"],
    ],
    focus: "Current focus",
    focusItems: [
      ["Data & graphs", "Structure, context, and investigation."],
      ["Product & AI", "Definition, iteration, and validation."],
    ],
    selected: "Selected work",
    projectHeading: ["Two projects.", "Two perspectives."],
    paysim: "Exploratory fraud analysis using a structural sample of 1,000 transactions and directed graphs.",
    noisDois: "A personal project for my girlfriend and me: I defined the features and coordinated the creation of a shared routine-and-memories app with generative AI.",
    noisTags: ["Personal project", "Generative AI", "Product"],
    explore: "View case study",
    how: "How I work",
    approachHeading: ["Curiosity with", "method."],
    approaches: [
      ["Investigate", "I turn broad questions into focused analyses with a clear methodology and visible limitations."],
      ["Direct", "I guide iterations with clarity about the role of each tool and test the results before presenting them."],
      ["Evolve", "I use documentation, tests, CI, and Pull Requests to improve projects without erasing their history."],
    ],
    aboutLabel: "About",
    aboutHeading: ["Learning by building.", "Growing through understanding."],
    aboutText: "I study Science and Technology at UFABC, with a planned path toward Data Science. My previous experience at SENAI and Mercedes-Benz gave me discipline in execution; today I apply that foundation to data and technology problems.",
    ufabc: "Science & Technology · path toward Data Science",
    technical: "Technical apprenticeship",
    languages: ["Portuguese native", "English C1 (EF SET)", "Spanish intermediate"],
    tools: "Tools in practice",
    toolsHeading: ["A foundation focused on", "data and investigation."],
    dataAnalysis: "Data & analysis",
    methods: "Methods in practice",
    methodsList: "Exploratory analysis · Structural sampling · Directed graphs · Network metrics",
    transparencyTitle: "Transparency about Nós Dois.",
    transparency: "The implementation was produced primarily with generative AI. My role was to conceive the product, define requirements, guide iterations, test results, and publish a sanitized version. The project demonstrates AI coordination and validation, not independent frontend or backend authorship.",
    letsTalk: "Let’s talk",
    contactHeading: ["I’m looking for problems", "worth taking the time", "to understand."],
    contactCopy: "Open to internship opportunities in data, analytics, or business intelligence.",
    portfolio: "Victor Hugo · Portfolio",
    top: "Back to top ↑",
  },
  es: {
    navLabel: "Navegación principal",
    homeLabel: "Inicio",
    nav: { projects: "Proyectos", about: "Sobre mí", contact: "Contacto" },
    available: "Disponible para prácticas",
    hero: ["Datos, código", "y producto —"],
    heroAccent: "con propósito.",
    intro: "Soy Victor Hugo, estudiante de la UFABC. Investigo redes financieras, desarrollo análisis y uso proyectos personales para profundizar lo que aprendo sobre datos, método y producto.",
    seeProjects: "Ver proyectos",
    signals: [
      ["Formación", "UFABC"],
      ["Portafolio", "2 proyectos públicos"],
      ["Interés", "Datos + análisis"],
    ],
    focus: "Enfoque actual",
    focusItems: [
      ["Datos y grafos", "Estructura, contexto e investigación."],
      ["Producto e IA", "Definición, iteración y validación."],
    ],
    selected: "Trabajo seleccionado",
    projectHeading: ["Dos proyectos.", "Dos perspectivas."],
    paysim: "Análisis exploratorio de fraude con una muestra estructural de 1.000 transacciones y grafos dirigidos.",
    noisDois: "Un proyecto personal para mi novia y para mí: definí las funciones y coordiné con IA generativa la creación de una app compartida para la rutina y los recuerdos.",
    noisTags: ["Proyecto personal", "IA generativa", "Producto"],
    explore: "Ver caso de estudio",
    how: "Cómo trabajo",
    approachHeading: ["Curiosidad con", "método."],
    approaches: [
      ["Investigar", "Transformo preguntas amplias en análisis delimitados, con metodología y limitaciones visibles."],
      ["Orientar", "Guío iteraciones con claridad sobre el papel de las herramientas y pruebo los resultados antes de presentarlos."],
      ["Evolucionar", "Uso documentación, pruebas, CI y Pull Requests para mejorar proyectos sin borrar su historia."],
    ],
    aboutLabel: "Sobre mí",
    aboutHeading: ["Aprender construyendo.", "Crecer comprendiendo."],
    aboutText: "Estudio Ciencia y Tecnología en la UFABC, con una trayectoria planificada hacia Ciencia de Datos. Mi experiencia anterior en SENAI y Mercedes-Benz me aportó disciplina de ejecución; hoy aplico esa base a problemas de datos y tecnología.",
    ufabc: "Ciencia y Tecnología · trayectoria hacia Ciencia de Datos",
    technical: "Formación técnica",
    languages: ["Portugués nativo", "Inglés C1 (EF SET)", "Español intermedio"],
    tools: "Herramientas en práctica",
    toolsHeading: ["Una base centrada en", "datos e investigación."],
    dataAnalysis: "Datos y análisis",
    methods: "Métodos en práctica",
    methodsList: "Análisis exploratorio · Muestreo estructural · Grafos dirigidos · Métricas de redes",
    transparencyTitle: "Transparencia sobre Nós Dois.",
    transparency: "La implementación fue producida principalmente con IA generativa. Mi función fue concebir el producto, definir requisitos, orientar iteraciones, probar resultados y publicar una versión anonimizada. El proyecto demuestra coordinación y validación de IA, no autoría independiente de frontend o backend.",
    letsTalk: "Hablemos",
    contactHeading: ["Busco problemas", "que valga la pena", "comprender."],
    contactCopy: "Disponible para prácticas en datos, analytics o inteligencia de negocios.",
    portfolio: "Victor Hugo · Portafolio",
    top: "Volver arriba ↑",
  },
};

const Arrow = () => <span aria-hidden="true">↗︎</span>;

export default function Home() {
  const { locale, changeLanguage } = usePortfolioLanguage(localizedTitles);
  const copy = translations[locale];

  return (
    <main>
      <nav className="nav shell" aria-label={copy.navLabel}>
        <a className="monogram" href="#inicio" aria-label={copy.homeLabel}>VH<span>.</span></a>
        <div className="nav-controls">
          <div className="nav-links">
            <a href="#projetos">{copy.nav.projects}</a>
            <a href="#sobre">{copy.nav.about}</a>
            <a className="nav-contact" href="#contato">{copy.nav.contact} <Arrow /></a>
          </div>
          <LanguageSwitcher locale={locale} onChange={changeLanguage} />
        </div>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {copy.available}</p>
          <h1>{copy.hero[0]}<br />{copy.hero[1]}<br /><em>{copy.heroAccent}</em></h1>
          <p className="hero-intro">{copy.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">{copy.seeProjects} <Arrow /></a>
            <a className="button button-quiet" href="https://github.com/victorhugo-ml" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <dl className="hero-signals">
            {copy.signals.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </div>

        <aside className="focus-card" aria-label={copy.focus}>
          <div className="focus-topline"><span>{copy.focus}</span><span>2026 — 27</span></div>
          {copy.focusItems.map(([title, description], index) => (
            <div className="focus-item" key={title}>
              <span className="focus-number">0{index + 1}</span>
              <div><strong>{title}</strong><p>{description}</p></div>
            </div>
          ))}
          <div className="focus-footer">
            <span>Python · SQL · DuckDB</span>
            <span className="orbit" aria-hidden="true"><i /><i /><i /></span>
          </div>
        </aside>
      </section>

      <section className="project-preview shell" id="projetos" aria-labelledby="project-heading">
        <div className="section-heading">
          <p className="eyebrow">{copy.selected}</p>
          <h2 id="project-heading">{copy.projectHeading[0]}<br />{copy.projectHeading[1]}</h2>
        </div>
        <div className="project-grid">
          <a className="project-card project-data" href="/projetos/paysim">
            <span className="project-index">01 / DATA</span>
            <div className="project-visual data-visual" aria-hidden="true"><i /><i /><i /><i /><b /><b /></div>
            <div><h3>PaySim</h3><p>{copy.paysim}</p><ul className="project-tags" aria-label="PaySim stack"><li>Python</li><li>DuckDB</li><li>NetworkX</li></ul></div>
            <span className="project-link">{copy.explore} <Arrow /></span>
          </a>
          <a className="project-card project-product" href="/projetos/nois-dois">
            <span className="project-index">02 / PRODUCT</span>
            <div className="project-visual product-visual" aria-hidden="true"><i /><i /><span>ND</span></div>
            <div><h3>Nós Dois</h3><p>{copy.noisDois}</p><ul className="project-tags" aria-label="Nós Dois project framing">{copy.noisTags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            <span className="project-link">{copy.explore} <Arrow /></span>
          </a>
        </div>
      </section>

      <section className="approach" aria-labelledby="approach-heading">
        <div className="shell approach-inner">
          <div className="approach-title"><p className="eyebrow">{copy.how}</p><h2 id="approach-heading">{copy.approachHeading[0]}<br /><em>{copy.approachHeading[1]}</em></h2></div>
          <div className="approach-grid">
            {copy.approaches.map(([title, description], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="about shell" id="sobre" aria-labelledby="about-heading">
        <div className="about-statement">
          <p className="eyebrow">{copy.aboutLabel}</p>
          <h2 id="about-heading">{copy.aboutHeading[0]}<br />{copy.aboutHeading[1]}</h2>
          <p>{copy.aboutText}</p>
        </div>
        <div className="timeline" aria-label={copy.aboutLabel}>
          <div className="timeline-item"><span className="timeline-year">2025 — 29</span><div><strong>UFABC</strong><p>{copy.ufabc}</p></div></div>
          <div className="timeline-item"><span className="timeline-year">2023 — 25</span><div><strong>SENAI / Mercedes-Benz</strong><p>{copy.technical}</p></div></div>
          <div className="language-line">{copy.languages.map((language) => <span key={language}>{language}</span>)}</div>
        </div>
      </section>

      <section className="toolbox" aria-labelledby="toolbox-heading">
        <div className="shell toolbox-inner">
          <div><p className="eyebrow">{copy.tools}</p><h2 id="toolbox-heading">{copy.toolsHeading[0]}<br />{copy.toolsHeading[1]}</h2></div>
          <div className="tool-groups">
            <div><span>{copy.dataAnalysis}</span><p>Python · SQL · DuckDB · Pandas · NumPy · Matplotlib · NetworkX · Jupyter</p></div>
            <div><span>{copy.methods}</span><p>{copy.methodsList}</p></div>
          </div>
        </div>
      </section>

      <section className="transparency shell" aria-label={copy.transparencyTitle}>
        <span className="transparency-mark">*</span>
        <p><strong>{copy.transparencyTitle}</strong> {copy.transparency}</p>
      </section>

      <section className="contact" id="contato" aria-labelledby="contact-heading">
        <div className="shell contact-inner">
          <p className="eyebrow">{copy.letsTalk}</p>
          <h2 id="contact-heading">{copy.contactHeading[0]}<br />{copy.contactHeading[1]}<br /><em>{copy.contactHeading[2]}</em></h2>
          <p className="contact-copy">{copy.contactCopy}</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/victor-hugo-miranda-marcelino-6b2850369/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/victorhugo-ml" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell"><span>{copy.portfolio}</span><a href="#inicio">{copy.top}</a></footer>
    </main>
  );
}
