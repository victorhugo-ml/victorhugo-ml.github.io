"use client";

import Image from "next/image";
import { LanguageSwitcher, type Locale, usePortfolioLanguage } from "./language";
import { profile } from "./profile";
import { LossCurve, StatsVisual } from "./StatsVisual";

const localizedTitles: Record<Locale, string> = {
  pt: "Victor Hugo — Estatística, dados e Machine Learning",
  en: "Victor Hugo — Statistics, data, and Machine Learning",
  es: "Victor Hugo — Estadística, datos y Machine Learning",
};

const translations = {
  pt: {
    navLabel: "Navegação principal",
    homeLabel: "Início",
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato" },
    available: "Disponível para estágio em Dados e IA",
    hero: "Estatística, dados\u00a0e",
    heroAccent: "Machine Learning.",
    intro: "Sou Victor Hugo, estudante da UFABC em busca de estágio em Ciência de Dados, Análise de Dados ou IA. Pratico Python e SQL em projetos acadêmicos e aprofundo meus estudos em estatística e Machine Learning.",
    seeProjects: "Ver projetos",
    signals: [
      ["Formação", "UFABC"],
      ["Portfólio", "2 projetos públicos"],
      ["Interesse", "Dados + análise"],
    ],
    focus: "Foco atual",
    statsFit: "Regressão linear · IC 95%",
    statsOutlier: "|resíduo| > 1,6σ",
    statsResidual: "Resíduos e densidade normal ajustada · dados sintéticos",
    paysimMetric: "Saldo de origem zerado",
    paysimBars: [["Fraudes", "100%", 100], ["Demais transações", "24%", 24]] as [string, string, number][],
    focusItems: [
      ["Estatística & dados", "Análise exploratória, inferência e investigação."],
      ["Machine Learning", "Fundamentos em estudo no PMQ/UFABC."],
    ],
    selected: "Trabalho selecionado",
    projectHeading: ["Dois projetos.", "Duas perspectivas."],
    paysim: "Projeto exploratório de estudo desenvolvido na disciplina Comunicação e Redes (UFABC, 2026): usei uma amostra estrutural de 1.000 transações para praticar SQL, análise de dados e grafos direcionados. Achado principal: o próprio PaySim quase não tem recorrência (só 2 contas enviam mais de uma vez e também recebem), então grafo não era a ferramenta certa para esse dado.",
    noisDois: "Projeto pessoal para mim e minha namorada: coordenei com IA generativa a criação de um app com agenda, finanças, metas, memórias e localização compartilhada por GPS.",
    noisTags: ["Projeto pessoal", "IA generativa", "GPS compartilhado", "Produto"],
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
    pmq: "Inteligência Artificial Aplicada · extensão em andamento · setembro–dezembro",
    pmqTopics: "Preparação de dados · aprendizado supervisionado · agrupamento · dados textuais · avaliação de resultados",
    technical: "Aprendizagem industrial · 1.600 h",
    technicalDetail: "Montagem mecânica, sistemas elétricos e eletromecânicos e usinagem CNC na produção de caminhões e ônibus",
    certsLabel: "Certificações",
    certs: "CS50 Python e CS50 SQL (Harvard) · Power BI e Excel (Santander Open Academy)",
    languages: ["Português nativo", "Inglês C1 (EF SET)", "Espanhol intermediário"],
    tools: "Ferramentas em prática",
    toolsHeading: ["Uma base voltada a", "dados e investigação."],
    dataAnalysis: "Dados & análise",
    methods: "Métodos em prática",
    methodsList: "Análise exploratória · Amostragem estrutural · Grafos direcionados · Métricas de rede",
    transparencyTitle: "Transparência sobre o Nós Dois.",
    transparency: "A implementação foi produzida majoritariamente com IA generativa, sob minha orientação e validação. O estudo de caso detalha meu papel e os limites da autoria.",
    letsTalk: "Vamos conversar",
    contactHeading: ["Procuro problemas", "que valham a pena", "entender."],
    contactCopy: "Aberto a oportunidades de estágio em Ciência de Dados, Análise de Dados ou IA.",
    portfolio: "Victor Hugo · Portfólio",
    top: "Voltar ao topo ↑",
  },
  en: {
    navLabel: "Main navigation",
    homeLabel: "Home",
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    available: "Open to Data and AI internships",
    hero: "Statistics, data,\u00a0and",
    heroAccent: "Machine Learning.",
    intro: "I’m Victor Hugo, a UFABC student seeking an internship in Data Science, Data Analysis, or AI. I practice Python and SQL through academic projects and am developing my foundations in statistics and Machine Learning.",
    seeProjects: "View projects",
    signals: [
      ["Education", "UFABC"],
      ["Portfolio", "2 public projects"],
      ["Interest", "Data + analysis"],
    ],
    focus: "Current focus",
    statsFit: "Linear regression · 95% CI",
    statsOutlier: "|residual| > 1.6σ",
    statsResidual: "Residuals and fitted normal density · synthetic data",
    paysimMetric: "Zeroed origin balance",
    paysimBars: [["Frauds", "100%", 100], ["Other transactions", "24%", 24]] as [string, string, number][],
    focusItems: [
      ["Statistics & data", "Exploratory analysis, inference, and investigation."],
      ["Machine Learning", "Studying the foundations at PMQ/UFABC."],
    ],
    selected: "Selected work",
    projectHeading: ["Two projects.", "Two perspectives."],
    paysim: "Exploratory study project developed for the Communication and Networks course (UFABC, 2026): I used a structural sample of 1,000 transactions to practice SQL, data analysis, and directed graphs. Key finding: PaySim itself has almost no recurrence (only 2 accounts both send more than once and receive), so graphs were not the right tool for this data.",
    noisDois: "A personal project for my girlfriend and me: I coordinated with generative AI to create an app for calendars, finances, goals, memories, and shared GPS location.",
    noisTags: ["Personal project", "Generative AI", "Shared GPS", "Product"],
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
    pmq: "Applied Artificial Intelligence · extension programme in progress · September–December",
    pmqTopics: "Data preparation · supervised learning · clustering · text data · results evaluation",
    technical: "Industrial apprenticeship · 1,600 h",
    technicalDetail: "Mechanical assembly, electrical and electromechanical systems, and CNC machining in truck and bus production",
    certsLabel: "Certifications",
    certs: "CS50 Python and CS50 SQL (Harvard) · Power BI and Excel (Santander Open Academy)",
    languages: ["Portuguese native", "English C1 (EF SET)", "Spanish intermediate"],
    tools: "Tools in practice",
    toolsHeading: ["A foundation focused on", "data and investigation."],
    dataAnalysis: "Data & analysis",
    methods: "Methods in practice",
    methodsList: "Exploratory analysis · Structural sampling · Directed graphs · Network metrics",
    transparencyTitle: "Transparency about Nós Dois.",
    transparency: "The implementation was produced primarily with generative AI under my direction and validation. The case study explains my role and the scope of authorship.",
    letsTalk: "Let’s talk",
    contactHeading: ["I’m looking for problems", "worth taking the time", "to understand."],
    contactCopy: "Open to internship opportunities in Data Science, Data Analysis, or AI.",
    portfolio: "Victor Hugo · Portfolio",
    top: "Back to top ↑",
  },
  es: {
    navLabel: "Navegación principal",
    homeLabel: "Inicio",
    nav: { projects: "Proyectos", about: "Sobre mí", contact: "Contacto" },
    available: "Disponible para prácticas en Datos e IA",
    hero: "Estadística, datos\u00a0y",
    heroAccent: "Machine Learning.",
    intro: "Soy Victor Hugo, estudiante de la UFABC en busca de prácticas en Ciencia de Datos, Análisis de Datos o IA. Practico Python y SQL en proyectos académicos y profundizo mis estudios de estadística y Machine Learning.",
    seeProjects: "Ver proyectos",
    signals: [
      ["Formación", "UFABC"],
      ["Portafolio", "2 proyectos públicos"],
      ["Interés", "Datos + análisis"],
    ],
    focus: "Enfoque actual",
    statsFit: "Regresión lineal · IC 95 %",
    statsOutlier: "|residuo| > 1,6σ",
    statsResidual: "Residuos y densidad normal ajustada · datos sintéticos",
    paysimMetric: "Saldo de origen en cero",
    paysimBars: [["Fraudes", "100 %", 100], ["Demás transacciones", "24 %", 24]] as [string, string, number][],
    focusItems: [
      ["Estadística y datos", "Análisis exploratorio, inferencia e investigación."],
      ["Machine Learning", "Fundamentos en estudio en PMQ/UFABC."],
    ],
    selected: "Trabajo seleccionado",
    projectHeading: ["Dos proyectos.", "Dos perspectivas."],
    paysim: "Proyecto exploratorio de estudio desarrollado en la asignatura Comunicación y Redes (UFABC, 2026): usé una muestra estructural de 1.000 transacciones para practicar SQL, análisis de datos y grafos dirigidos. Hallazgo principal: el propio PaySim casi no tiene recurrencia (solo 2 cuentas envían más de una vez y también reciben), así que los grafos no eran la herramienta adecuada para estos datos.",
    noisDois: "Un proyecto personal para mi novia y para mí: coordiné con IA generativa la creación de una app con agenda, finanzas, metas, recuerdos y ubicación compartida por GPS.",
    noisTags: ["Proyecto personal", "IA generativa", "GPS compartido", "Producto"],
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
    pmq: "Inteligencia Artificial Aplicada · extensión en curso · septiembre–diciembre",
    pmqTopics: "Preparación de datos · aprendizaje supervisado · agrupamiento · datos textuales · evaluación de resultados",
    technical: "Aprendizaje industrial · 1.600 h",
    technicalDetail: "Montaje mecánico, sistemas eléctricos y electromecánicos y mecanizado CNC en la producción de camiones y autobuses",
    certsLabel: "Certificaciones",
    certs: "CS50 Python y CS50 SQL (Harvard) · Power BI y Excel (Santander Open Academy)",
    languages: ["Portugués nativo", "Inglés C1 (EF SET)", "Español intermedio"],
    tools: "Herramientas en práctica",
    toolsHeading: ["Una base centrada en", "datos e investigación."],
    dataAnalysis: "Datos y análisis",
    methods: "Métodos en práctica",
    methodsList: "Análisis exploratorio · Muestreo estructural · Grafos dirigidos · Métricas de redes",
    transparencyTitle: "Transparencia sobre Nós Dois.",
    transparency: "La implementación fue producida principalmente con IA generativa bajo mi orientación y validación. El caso de estudio explica mi función y el alcance de la autoría.",
    letsTalk: "Hablemos",
    contactHeading: ["Busco problemas", "que valga la pena", "comprender."],
    contactCopy: "Disponible para prácticas en Ciencia de Datos, Análisis de Datos o IA.",
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
          <h1>{copy.hero}<br /><em>{copy.heroAccent}</em></h1>
          <p className="hero-intro">{copy.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">{copy.seeProjects} <Arrow /></a>
            <a className="button button-quiet" href="https://github.com/victorhugo-ml" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <dl className="hero-signals">
            {copy.signals.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </div>

        <aside className="hero-panel" aria-label={copy.focus}>
          <div className="panel-top"><span>{copy.focus}</span><span>2026 — 27</span></div>
          <StatsVisual fitLabel={copy.statsFit} outlierLabel={copy.statsOutlier} residualLabel={copy.statsResidual} />
          <div className="focus-list">
            {copy.focusItems.map(([title, description], index) => (
              <div className="focus-item" key={title}>
                <span className="focus-number">0{index + 1}</span>
                <div><strong>{title}</strong><p>{description}</p></div>
              </div>
            ))}
          </div>
          <div className="panel-footer"><span>Python · SQL · DuckDB</span><span>pandas · NumPy</span></div>
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
            <div className="metric-visual" aria-hidden="true">
              <span className="metric-title">{copy.paysimMetric}</span>
              {copy.paysimBars.map(([label, value, pct]) => (
                <div className="metric-row" key={label}>
                  <span>{label}</span>
                  <div className="metric-track"><i style={{ width: `${pct}%` }} /></div>
                  <b>{value}</b>
                </div>
              ))}
            </div>
            <div><h3>PaySim</h3><p>{copy.paysim}</p><ul className="project-tags" aria-label="PaySim stack"><li>Python</li><li>DuckDB</li><li>NetworkX</li></ul></div>
            <span className="project-link">{copy.explore} <Arrow /></span>
          </a>
          <a className="project-card project-product" href="/projetos/nois-dois">
            <span className="project-index">02 / PRODUCT</span>
            <div className="phone-visual" aria-hidden="true"><Image src="/projects/nois-dois/inicio.png" width={390} height={844} alt="" /></div>
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
          <div className="timeline-item"><span className="timeline-year">{profile.bctStart} — {profile.bctGraduation}</span><div><strong>UFABC</strong><p>{copy.ufabc}</p></div></div>
          <div className="timeline-item"><span className="timeline-year">{profile.pmqYear}</span><div><strong>UFABC / Programa Manuel Querino</strong><p>{copy.pmq} · {profile.pmqHours} h</p><p style={{ marginTop: 6 }}>{copy.pmqTopics}</p></div></div>
          <div className="timeline-item"><span className="timeline-year">2026</span><div><strong>{copy.certsLabel}</strong><p>{copy.certs}</p></div></div>
          <div className="timeline-item"><span className="timeline-year">2023 — 25</span><div><strong>SENAI / Mercedes-Benz</strong><p>{copy.technical}</p><p style={{ marginTop: 6 }}>{copy.technicalDetail}</p></div></div>
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
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
          <LossCurve />
        </div>
      </section>

      <footer className="footer shell"><span>{copy.portfolio}</span><a href="#inicio">{copy.top}</a></footer>
    </main>
  );
}
