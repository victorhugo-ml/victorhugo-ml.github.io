import type { Metadata } from "next";

const origin = "https://victorhugo-ml.github.io";

type ProjectMetadataInput = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

export function createProjectMetadata({
  slug,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
}: ProjectMetadataInput): Metadata {
  const pageUrl = `${origin}/projetos/${slug}`;
  const imageUrl = `${origin}${image}`;
  const fullTitle = `${title} — Estudo de caso | Victor Hugo`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: fullTitle,
      description,
      type: "article",
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
