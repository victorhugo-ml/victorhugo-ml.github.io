import { ProjectCaseStudy } from "../../ProjectCaseStudy";
import { createProjectMetadata } from "../../project-metadata";

export function generateMetadata() {
  return createProjectMetadata({
    slug: "paysim",
    title: "PaySim — análise de fraude com grafos",
    description:
      "Estudo de caso sobre amostragem estrutural, análise exploratória de fraude e redes financeiras com DuckDB, Pandas, NumPy, Matplotlib e NetworkX.",
    image: "/projects/paysim/subgrafo-fraudes.png",
    imageWidth: 1289,
    imageHeight: 890,
    imageAlt: "Subgrafo das fraudes selecionadas no PaySim",
  });
}

export default function PaysimCaseStudyPage() {
  return <ProjectCaseStudy projectId="paysim" />;
}
