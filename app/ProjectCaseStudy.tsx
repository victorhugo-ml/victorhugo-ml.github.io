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
      pt: "Nós Dois — projeto pessoal com IA generativa",
      en: "Nós Dois — personal project with generative AI",
      es: "Nós Dois — proyecto personal con IA generativa",
    },
    copy: {
      pt: {
        category: "Projeto pessoal · produto · IA generativa",
        title: "Nós Dois",
        intro: "Um aplicativo que idealizei por hobby para mim e minha namorada organizarmos agenda, finanças, metas, memórias e localização compartilhada por GPS. A implementação foi produzida majoritariamente com IA generativa, sob minha orientação e validação.",
        facts: [["Pessoal", "origem"], ["IA generativa", "implementação"], ["GPS ao vivo", "funcionalidade"], ["Sanitizada", "versão pública"]],
        challengeTitle: "Transformar uma necessidade pessoal em um produto funcional",
        challengeBody: "Eu queria reunir partes da nossa rotina em um único espaço compartilhado. Além de agenda, gastos, metas, diário, galeria, bilhetes, lembretes e recursos nativos, a versão privada inclui um sistema de GPS com mapa ao vivo do casal, rastreamento adaptativo em segundo plano, distância, status online ou offline, bateria, histórico do dia, rotas e lugares com alertas de chegada e saída. Como o objetivo era criar algo útil por hobby, e não demonstrar desenvolvimento web convencional, usei IA generativa como principal meio de implementação e conduzi o processo por ciclos de especificação, teste e ajuste.",
        approachTitle: "Meu papel no processo",
        steps: [
          ["Definir", "Mapeei necessidades reais, selecionei funcionalidades e organizei os fluxos que fariam sentido para nós dois."],
          ["Orientar", "Descrevi comportamentos esperados, priorizei mudanças e conduzi as iterações produzidas por ferramentas de IA."],
          ["Validar", "Testei os fluxos, revisei resultados e preparei uma versão pública sem dados pessoais, com documentação e verificações automatizadas."],
        ],
        evidenceTitle: "O que o projeto realmente demonstra",
        findings: [
          "Capacidade de transformar uma necessidade pessoal em um produto amplo, com organização compartilhada, recursos nativos e localização por GPS.",
          "Coordenação iterativa de IA: formular instruções, avaliar saídas, identificar problemas e pedir correções.",
          "Responsabilidade na publicação: dados fictícios, credenciais externas, documentação, testes e revisão de segurança.",
        ],
        considerationsTitle: "Escopo da autoria",
        considerationsBody: "A maior parte da implementação original foi produzida por ferramentas de IA generativa. Por isso, não apresento o Nós Dois como prova de domínio autônomo de frontend ou backend. Este estudo de caso documenta definição de produto, decomposição de problemas, avaliação crítica, testes e publicação responsável.",
        captions: ["Início e próximos eventos", "Agenda compartilhada", "Orçamento e divisão de gastos", "Diário e memórias"],
        alt: ["Tela inicial do aplicativo Nós Dois", "Agenda compartilhada do Nós Dois", "Painel de gastos do Nós Dois", "Diário do aplicativo Nós Dois"],
      },
      en: {
        category: "Personal project · product · generative AI",
        title: "Nós Dois",
        intro: "A hobby app I conceived for my girlfriend and me to organize calendars, finances, goals, memories, and shared GPS location. Most of the implementation was produced with generative AI under my direction and validation.",
        facts: [["Personal", "origin"], ["Generative AI", "implementation"], ["Live GPS", "feature"], ["Sanitized", "public version"]],
        challengeTitle: "Turning a personal need into a functional product",
        challengeBody: "I wanted to bring parts of our routine into a single shared space. Alongside calendars, expenses, goals, a journal, galleries, notes, reminders, and native features, the private version includes a GPS system with a live map for the couple, adaptive background tracking, distance, online or offline status, battery level, daily history, routes, and places with arrival and departure alerts. Because the goal was to create something useful as a hobby, rather than demonstrate conventional web development, I used generative AI as the primary implementation method and guided the process through specification, testing, and adjustment cycles.",
        approachTitle: "My role in the process",
        steps: [
          ["Define", "I mapped real needs, selected features, and organized the flows that made sense for the two of us."],
          ["Direct", "I specified expected behavior, prioritized changes, and guided iterations produced by AI tools."],
          ["Validate", "I tested flows, reviewed results, and prepared a public version without personal data, supported by documentation and automated checks."],
        ],
        evidenceTitle: "What the project actually demonstrates",
        findings: [
          "The ability to turn a personal need into a broad product combining shared organization, native features, and GPS location.",
          "Iterative AI coordination: writing instructions, evaluating outputs, identifying problems, and requesting corrections.",
          "Responsible publication: fictional data, externalized credentials, documentation, tests, and security review.",
        ],
        considerationsTitle: "Scope of authorship",
        considerationsBody: "Most of the original implementation was produced by generative AI tools. I therefore do not present Nós Dois as proof of independent frontend or backend expertise. This case study documents product definition, problem decomposition, critical evaluation, testing, and responsible publication.",
        captions: ["Home and upcoming events", "Shared calendar", "Budget and expense split", "Journal and memories"],
        alt: ["Nós Dois application home screen", "Nós Dois shared calendar", "Nós Dois expense dashboard", "Nós Dois journal"],
      },
      es: {
        category: "Proyecto personal · producto · IA generativa",
        title: "Nós Dois",
        intro: "Una aplicación que ideé como hobby para que mi novia y yo organicemos agenda, finanzas, metas, recuerdos y ubicación compartida por GPS. La mayor parte de la implementación fue producida con IA generativa bajo mi dirección y validación.",
        facts: [["Personal", "origen"], ["IA generativa", "implementación"], ["GPS en vivo", "funcionalidad"], ["Sanitizada", "versión pública"]],
        challengeTitle: "Convertir una necesidad personal en un producto funcional",
        challengeBody: "Quería reunir partes de nuestra rutina en un único espacio compartido. Además de agenda, gastos, metas, diario, galería, notas, recordatorios y recursos nativos, la versión privada incluye un sistema de GPS con mapa en vivo de la pareja, seguimiento adaptativo en segundo plano, distancia, estado en línea o sin conexión, batería, historial del día, rutas y lugares con alertas de llegada y salida. Como el objetivo era crear algo útil por afición, y no demostrar desarrollo web convencional, usé IA generativa como principal medio de implementación y dirigí el proceso mediante ciclos de especificación, prueba y ajuste.",
        approachTitle: "Mi papel en el proceso",
        steps: [
          ["Definir", "Mapeé necesidades reales, seleccioné funcionalidades y organicé los flujos que tenían sentido para los dos."],
          ["Orientar", "Describí los comportamientos esperados, prioricé cambios y dirigí las iteraciones producidas por herramientas de IA."],
          ["Validar", "Probé los flujos, revisé los resultados y preparé una versión pública sin datos personales, con documentación y verificaciones automatizadas."],
        ],
        evidenceTitle: "Lo que realmente demuestra el proyecto",
        findings: [
          "Capacidad para transformar una necesidad personal en un producto amplio, con organización compartida, recursos nativos y ubicación por GPS.",
          "Coordinación iterativa de IA: formular instrucciones, evaluar resultados, identificar problemas y solicitar correcciones.",
          "Publicación responsable: datos ficticios, credenciales externas, documentación, pruebas y revisión de seguridad.",
        ],
        considerationsTitle: "Alcance de la autoría",
        considerationsBody: "La mayor parte de la implementación original fue producida por herramientas de IA generativa. Por eso, no presento Nós Dois como prueba de dominio autónomo de frontend o backend. Este caso documenta definición de producto, descomposición de problemas, evaluación crítica, pruebas y publicación responsable.",
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
