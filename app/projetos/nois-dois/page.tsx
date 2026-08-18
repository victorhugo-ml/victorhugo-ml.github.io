import { ProjectCaseStudy } from "../../ProjectCaseStudy";
import { createProjectMetadata } from "../../project-metadata";

export function generateMetadata() {
  return createProjectMetadata({
    slug: "nois-dois",
    title: "Nós Dois — aplicação multiplataforma",
    description:
      "Estudo de caso de um produto compartilhado para rotina, finanças e memórias, construído para web, PWA e Android com Firebase e Capacitor.",
    image: "/projects/nois-dois/inicio.png",
    imageWidth: 390,
    imageHeight: 844,
    imageAlt: "Tela inicial do aplicativo Nós Dois com dados fictícios",
  });
}

export default function NoisDoisCaseStudyPage() {
  return <ProjectCaseStudy projectId="nois-dois" />;
}
