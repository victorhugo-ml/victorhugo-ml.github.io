import { ProjectCaseStudy } from "../../ProjectCaseStudy";
import { createProjectMetadata } from "../../project-metadata";

export function generateMetadata() {
  return createProjectMetadata({
    slug: "paysim",
    title: "PaySim — análise de fraude com grafos",
    description:
      "Projeto exploratório de estudo sobre amostragem estrutural, análise de fraude e redes financeiras com DuckDB, Pandas, NumPy, Matplotlib e NetworkX.",
    image: "/projects/paysim/subgrafo-fraudes.png",
    imageWidth: 1289,
    imageHeight: 890,
    imageAlt: "Subgrafo das fraudes selecionadas no PaySim",
  });
}

export default function PaysimCaseStudyPage() {
  return <ProjectCaseStudy projectId="paysim" />;
}
