import { ProjectCaseStudy } from "../../ProjectCaseStudy";
import { createProjectMetadata } from "../../project-metadata";

export function generateMetadata() {
  return createProjectMetadata({
    slug: "nois-dois",
    title: "Nós Dois — projeto pessoal com IA generativa",
    description:
      "Aplicativo pessoal com agenda, finanças, memórias e localização compartilhada por GPS, criado com implementação majoritariamente produzida por IA generativa sob minha direção e validação.",
    image: "/projects/nois-dois/inicio.png",
    imageWidth: 390,
    imageHeight: 844,
    imageAlt: "Tela inicial do aplicativo Nós Dois com dados fictícios",
  });
}

export default function NoisDoisCaseStudyPage() {
  return <ProjectCaseStudy projectId="nois-dois" />;
}
