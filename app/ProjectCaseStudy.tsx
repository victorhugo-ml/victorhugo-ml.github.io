"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher, usePortfolioLanguage } from "./language";

type ProjectId = "paysim" | "nois-dois";

const common = {
  pt: { back: "Voltar ao portfólio", repository: "Ver repositório", challenge: "O desafio", approach: "A abordagem", evidence: "Evidências", considerations: "Leitura responsável", next: "Próximo estudo", portfolio: "Victor Hugo · Portfólio" },
  en: { back: "Back to portfolio", repository: "View repository", challenge: "The challenge", approach: "The approach", evidence: "Evidence", considerations: "Responsible reading", next: "Next case study", portfolio: "Victor Hugo · Portfolio" },
  es: { back: "Volver al portafolio", repository: "Ver repositorio", challenge: "El desafío", approach: "El enfoque", evidence: "Evidencias", considerations: "Lectura responsable", next: "Siguiente caso", portfolio: "Victor Hugo · Portafolio" },
};

const projects = {
  paysim: {
    repo: "https://github.com/victorhugo-ml/paysim-fraud-network-analysis",
    nextHref: "/projetos/nois-dois",
    nextName: "Nós Dois",
    theme: "case-data",
    images: [
      { src: "/projects/paysim/subgrafo-fraudes.png", width: 1289, height: 890 },
      { src: "/projects/paysim/correlacao-metricas.png", width: 826, height: 690 },
      { src: "/projects/paysim/maior-componente.png", width: 1289, height: 890 },
    ],
    titles: {
      pt: "PaySim — análise de fraude com grafos",
      en: "PaySim — fraud analysis with graphs",
      es: "PaySim — análisis de fraude con grafos",
    },
    copy: {
      pt: {
        category: "Dados · grafos · análise exploratória",
        title: "PaySim",
        intro: "Uma investigação sobre como a estrutura de uma rede de transações financeiras pode revelar padrões associados às fraudes selecionadas.",
        facts: [["1.000", "transações"], ["25", "fraudes selecionadas"], ["1.780", "nós"], ["305", "períodos"]],
        challengeTitle: "Preservar estrutura sem carregar milhões de linhas",
        challengeBody: "Uma amostra aleatória pequena poderia eliminar recorrências, caminhos e hubs importantes. O desafio foi reduzir o PaySim para uma análise visualmente explorável sem fingir que a amostra representa toda a população.",
        approachTitle: "A amostragem também faz parte da análise",
        steps: [
          ["Consultar", "DuckDB e SQL filtram o CSV completo sem carregá-lo integralmente em um DataFrame."],
          ["Amostrar", "A seleção combina fraudes distribuídas no tempo, contas recorrentes, hubs, vizinhanças e transações normais."],
          ["Modelar", "Pandas e NumPy preparam os dados, NetworkX representa a rede e Matplotlib constrói as visualizações."],
        ],
        evidenceTitle: "Resultados que ajudam a formular novas perguntas",
        findings: [
          "Nós associados às fraudes selecionadas tiveram in-degree médio de 1,88, contra 0,52 nos demais nós.",
          "O valor mediano das transações fraudulentas foi 722.832,95, contra 96.824,08 nas transações normais.",
          "A conta de origem terminou com saldo zero em 100% das fraudes selecionadas, contra 24,82% das demais transações.",
        ],
        considerationsTitle: "Exploratório, não preditivo",
        considerationsBody: "A amostra foi construída para preservar fraudes e estruturas interessantes. Os números não estimam a prevalência real, não sustentam inferência causal e não avaliam um classificador. Centralidade também não é evidência de fraude.",
        captions: ["Subgrafo das fraudes e suas vizinhanças", "Correlação de Spearman entre métricas", "Maior componente fracamente conexa"],
        alt: ["Subgrafo das fraudes selecionadas", "Mapa de correlação entre métricas da rede", "Maior componente da rede de transações"],
      },
      en: {
        category: "Data · graphs · exploratory analysis",
        title: "PaySim",
        intro: "An investigation into how the structure of a financial transaction network may reveal patterns associated with selected fraud cases.",
        facts: [["1,000", "transactions"], ["25", "selected frauds"], ["1,780", "nodes"], ["305", "time steps"]],
        challengeTitle: "Preserving structure without loading millions of rows",
        challengeBody: "A small random sample could remove relevant recurrences, paths, and hubs. The challenge was to reduce PaySim into a visually explorable analysis without pretending the sample represents the full population.",
        approachTitle: "Sampling is also part of the analysis",
        steps: [
          ["Query", "DuckDB and SQL filter the complete CSV without loading it entirely into a DataFrame."],
          ["Sample", "The selection combines frauds across time, recurring accounts, hubs, neighborhoods, and normal transactions."],
          ["Model", "Pandas and NumPy prepare the data, NetworkX represents the network, and Matplotlib builds the visualizations."],
        ],
        evidenceTitle: "Results that help frame new questions",
        findings: [
          "Nodes linked to selected frauds had a mean in-degree of 1.88, compared with 0.52 for other nodes.",
          "The median fraudulent transaction value was 722,832.95, compared with 96,824.08 for normal transactions.",
          "The origin account ended with a zero balance in 100% of selected frauds, compared with 24.82% of other transactions.",
        ],
        considerationsTitle: "Exploratory, not predictive",
        considerationsBody: "The sample was designed to preserve frauds and interesting structures. The figures do not estimate real prevalence, support causal inference, or evaluate a classifier. Centrality is not evidence of fraud either.",
        captions: ["Fraud subgraph and its neighborhoods", "Spearman correlation between metrics", "Largest weakly connected component"],
        alt: ["Subgraph of selected frauds", "Correlation map for network metrics", "Largest component in the transaction network"],
      },
      es: {
        category: "Datos · grafos · análisis exploratorio",
        title: "PaySim",
        intro: "Una investigación sobre cómo la estructura de una red de transacciones financieras puede revelar patrones asociados a los fraudes seleccionados.",
        facts: [["1.000", "transacciones"], ["25", "fraudes seleccionados"], ["1.780", "nodos"], ["305", "períodos"]],
        challengeTitle: "Preservar la estructura sin cargar millones de filas",
        challengeBody: "Una muestra aleatoria pequeña podría eliminar recurrencias, caminos y hubs relevantes. El desafío fue reducir PaySim a un análisis visualmente explorable sin afirmar que la muestra representa a toda la población.",
        approachTitle: "El muestreo también forma parte del análisis",
        steps: [
          ["Consultar", "DuckDB y SQL filtran el CSV completo sin cargarlo íntegramente en un DataFrame."],
          ["Muestrear", "La selección combina fraudes distribuidos en el tiempo, cuentas recurrentes, hubs, vecindarios y transacciones normales."],
          ["Modelar", "Pandas y NumPy preparan los datos, NetworkX representa la red y Matplotlib construye las visualizaciones."],
        ],
        evidenceTitle: "Resultados que ayudan a formular nuevas preguntas",
        findings: [
          "Los nodos asociados a los fraudes seleccionados tuvieron un in-degree medio de 1,88, frente a 0,52 en los demás nodos.",
          "El valor mediano de las transacciones fraudulentas fue 722.832,95, frente a 96.824,08 en las transacciones normales.",
          "La cuenta de origen terminó con saldo cero en el 100% de los fraudes seleccionados, frente al 24,82% de las demás transacciones.",
        ],
        considerationsTitle: "Exploratorio, no predictivo",
        considerationsBody: "La muestra fue construida para preservar fraudes y estructuras interesantes. Las cifras no estiman la prevalencia real, no sustentan inferencias causales y no evalúan un clasificador. La centralidad tampoco es evidencia de fraude.",
        captions: ["Subgrafo de los fraudes y sus vecindarios", "Correlación de Spearman entre métricas", "Mayor componente débilmente conexo"],
        alt: ["Subgrafo de los fraudes seleccionados", "Mapa de correlación de métricas de la red", "Mayor componente de la red de transacciones"],
      },
    },
  },
  "nois-dois": {
    repo: "https://github.com/victorhugo-ml/nois-dois-app",
    nextHref: "/projetos/paysim",
    nextName: "PaySim",
    theme: "case-product",
    images: [
      { src: "/projects/nois-dois/inicio.png", width: 390, height: 844 },
      { src: "/projects/nois-dois/agenda.png", width: 390, height: 844 },
      { src: "/projects/nois-dois/gastos.png", width: 390, height: 844 },
      { src: "/projects/nois-dois/diario.png", width: 390, height: 844 },
    ],
    titles: {
      pt: "Nós Dois — aplicação multiplataforma",
      en: "Nós Dois — cross-platform application",
      es: "Nós Dois — aplicación multiplataforma",
    },
    copy: {
      pt: {
        category: "Produto · engenharia · mobile",
        title: "Nós Dois",
        intro: "Um espaço compartilhado para duas pessoas organizarem rotina, finanças, metas, memórias e eventos, disponível na web, como PWA e no Android.",
        facts: [["3", "plataformas"], ["Tempo real", "sincronização"], ["Testes + CI", "qualidade"], ["Incremental", "refatoração"]],
        challengeTitle: "Evoluir um produto real sem recomeçar do zero",
        challengeBody: "O aplicativo cresceu rapidamente e concentrou muitas responsabilidades em um app.js extenso. Em vez de uma reescrita total, a estratégia escolhida foi preservar o comportamento e criar fronteiras técnicas em etapas pequenas e revisáveis.",
        approachTitle: "Produto primeiro, arquitetura em evolução",
        steps: [
          ["Construir", "Agenda, gastos, metas, diário, bilhetes, galeria e compras formam uma experiência compartilhada."],
          ["Conectar", "Firebase oferece autenticação, dados em tempo real, armazenamento e mensagens; Capacitor leva a experiência ao Android."],
          ["Refatorar", "Bootstrap, configuração pública, autenticação e sessão foram extraídos em PRs pequenos, com testes e CI."],
        ],
        evidenceTitle: "Uma interface sustentada por decisões de engenharia",
        findings: [
          "A mesma experiência atende web, instalação PWA e Android com recursos como biometria, câmera e haptics.",
          "A camada de autenticação e sessão é testada com mocks, sem acessar o Firebase real.",
          "A versão pública usa somente dados fictícios e mantém credenciais e configuração de produção fora do repositório.",
        ],
        considerationsTitle: "Um produto ainda em evolução",
        considerationsBody: "A interface continua concentrada em um arquivo grande. As próximas fronteiras são acesso ao banco por domínio, notificações, uploads e funcionalidades estáveis. O valor do projeto está tanto no produto quanto na decisão de melhorar a base sem apagar sua história.",
        captions: ["Início e próximos eventos", "Agenda compartilhada", "Orçamento e divisão de gastos", "Diário e memórias"],
        alt: ["Tela inicial do aplicativo Nós Dois", "Agenda compartilhada do Nós Dois", "Painel de gastos do Nós Dois", "Diário do aplicativo Nós Dois"],
      },
      en: {
        category: "Product · engineering · mobile",
        title: "Nós Dois",
        intro: "A shared space for two people to organize routines, finances, goals, memories, and events across the web, PWA, and Android.",
        facts: [["3", "platforms"], ["Real time", "sync"], ["Tests + CI", "quality"], ["Incremental", "refactoring"]],
        challengeTitle: "Evolving a real product without starting over",
        challengeBody: "The application grew quickly and concentrated many responsibilities in a large app.js file. Instead of a full rewrite, the chosen strategy preserves behavior while introducing technical boundaries in small, reviewable steps.",
        approachTitle: "Product first, architecture evolving",
        steps: [
          ["Build", "Calendar, expenses, goals, journal, notes, gallery, and shopping create a shared experience."],
          ["Connect", "Firebase provides authentication, real-time data, storage, and messaging; Capacitor brings the experience to Android."],
          ["Refactor", "Bootstrap, public configuration, authentication, and session logic were extracted through small PRs with tests and CI."],
        ],
        evidenceTitle: "An interface supported by engineering decisions",
        findings: [
          "The same experience supports web, PWA installation, and Android features such as biometrics, camera, and haptics.",
          "The authentication and session layer is tested with mocks without accessing the real Firebase project.",
          "The public version uses fictional data and keeps production credentials and configuration outside the repository.",
        ],
        considerationsTitle: "A product still evolving",
        considerationsBody: "The interface remains concentrated in a large file. The next boundaries include domain-based database access, notifications, uploads, and stable features. The project’s value lies in both the product and the decision to improve the codebase without erasing its history.",
        captions: ["Home and upcoming events", "Shared calendar", "Budget and expense split", "Journal and memories"],
        alt: ["Nós Dois application home screen", "Nós Dois shared calendar", "Nós Dois expense dashboard", "Nós Dois journal"],
      },
      es: {
        category: "Producto · ingeniería · mobile",
        title: "Nós Dois",
        intro: "Un espacio compartido para que dos personas organicen rutinas, finanzas, metas, recuerdos y eventos en web, PWA y Android.",
        facts: [["3", "plataformas"], ["Tiempo real", "sincronización"], ["Pruebas + CI", "calidad"], ["Incremental", "refactorización"]],
        challengeTitle: "Evolucionar un producto real sin empezar de cero",
        challengeBody: "La aplicación creció rápidamente y concentró muchas responsabilidades en un archivo app.js extenso. En lugar de una reescritura total, la estrategia elegida preserva el comportamiento e introduce fronteras técnicas en etapas pequeñas y revisables.",
        approachTitle: "Primero el producto, arquitectura en evolución",
        steps: [
          ["Construir", "Agenda, gastos, metas, diario, notas, galería y compras forman una experiencia compartida."],
          ["Conectar", "Firebase ofrece autenticación, datos en tiempo real, almacenamiento y mensajería; Capacitor lleva la experiencia a Android."],
          ["Refactorizar", "Bootstrap, configuración pública, autenticación y sesión se extrajeron en PRs pequeños, con pruebas y CI."],
        ],
        evidenceTitle: "Una interfaz respaldada por decisiones de ingeniería",
        findings: [
          "La misma experiencia funciona en web, como PWA y en Android con biometría, cámara y haptics.",
          "La capa de autenticación y sesión se prueba con mocks sin acceder al proyecto real de Firebase.",
          "La versión pública usa datos ficticios y mantiene las credenciales y la configuración de producción fuera del repositorio.",
        ],
        considerationsTitle: "Un producto todavía en evolución",
        considerationsBody: "La interfaz sigue concentrada en un archivo grande. Las próximas fronteras son el acceso al banco por dominio, notificaciones, uploads y funcionalidades estables. El valor del proyecto está tanto en el producto como en la decisión de mejorar la base sin borrar su historia.",
        captions: ["Inicio y próximos eventos", "Agenda compartida", "Presupuesto y división de gastos", "Diario y recuerdos"],
        alt: ["Pantalla inicial de Nós Dois", "Agenda compartida de Nós Dois", "Panel de gastos de Nós Dois", "Diario de Nós Dois"],
      },
    },
  },
} as const;

export function ProjectCaseStudy({ projectId }: { projectId: ProjectId }) {
  const project = projects[projectId];
  const { locale, changeLanguage } = usePortfolioLanguage(project.titles);
  const copy = project.copy[locale];
  const labels = common[locale];

  return (
    <main className={`case-page ${project.theme}`}>
      <nav className="case-nav shell">
        <Link href="/#projetos">← {labels.back}</Link>
        <LanguageSwitcher locale={locale} onChange={changeLanguage} />
      </nav>

      <section className="case-hero shell">
        <p className="eyebrow">{copy.category}</p>
        <div className="case-title-row">
          <h1>{copy.title}</h1>
          <a className="button button-primary" href={project.repo} target="_blank" rel="noreferrer">
            {labels.repository} <span aria-hidden="true">↗︎</span>
          </a>
        </div>
        <p className="case-intro">{copy.intro}</p>
        <dl className="case-facts">
          {copy.facts.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
        </dl>
      </section>

      <section className={`case-gallery shell ${projectId === "nois-dois" ? "phone-gallery" : "chart-gallery"}`} aria-label={labels.evidence}>
        {project.images.map((image, index) => (
          <figure key={image.src} className={index === 0 ? "gallery-feature" : ""}>
            <div className="case-image-frame"><Image src={image.src} width={image.width} height={image.height} alt={copy.alt[index]} /></div>
            <figcaption><span>0{index + 1}</span>{copy.captions[index]}</figcaption>
          </figure>
        ))}
      </section>

      <section className="case-narrative shell">
        <article>
          <p className="eyebrow">{labels.challenge}</p>
          <h2>{copy.challengeTitle}</h2>
          <p className="case-body">{copy.challengeBody}</p>
        </article>
        <article>
          <p className="eyebrow">{labels.approach}</p>
          <h2>{copy.approachTitle}</h2>
          <div className="case-steps">
            {copy.steps.map(([title, description], index) => (
              <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{description}</p></div>
            ))}
          </div>
        </article>
        <article>
          <p className="eyebrow">{labels.evidence}</p>
          <h2>{copy.evidenceTitle}</h2>
          <ul className="finding-list">{copy.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul>
        </article>
        <aside className="case-note">
          <p className="eyebrow">{labels.considerations}</p>
          <h3>{copy.considerationsTitle}</h3>
          <p>{copy.considerationsBody}</p>
        </aside>
      </section>

      <Link className="next-case" href={project.nextHref}>
        <span>{labels.next}</span><strong>{project.nextName}</strong><i aria-hidden="true">→</i>
      </Link>

      <footer className="footer shell"><span>{labels.portfolio}</span><Link href="/">VH.</Link></footer>
    </main>
  );
}
