import { ProjectCaseStudy } from "../../ProjectCaseStudy";
import { createProjectMetadata } from "../../project-metadata";

export function generateMetadata() {
  return createProjectMetadata({
    slug: "paysim",
    title: "PaySim — análise de fraude com grafos",
    description:
      "Projeto acadêmico desenvolvido na disciplina Comunicação e Redes da UFABC, em 2026, com amostragem estrutural e análise exploratória de fraude em grafos.",
    image: "/projects/paysim/subgrafo-fraudes.png",
    imageWidth: 1289,
    imageHeight: 890,
    imageAlt: "Subgrafo das fraudes selecionadas no PaySim",
  });
}

export default function PaysimCaseStudyPage() {
  return <ProjectCaseStudy projectId="paysim" />;
}
