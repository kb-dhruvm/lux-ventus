import { PAGE_QUERY } from "@/queries/pages.query";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import HeroSection from "./HeroSection";
import { urlFor } from "@/sanity/lib/image";

type IRootPagesProps = {
  slug: string;
};

const RootPages: FC<IRootPagesProps> = async (props) => {
  const { slug } = props;

  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: {
      slug,
    },
  });

  if (!data) return notFound();

  const { body, heroSection, leftPannel, topics } = data;

  console.log(body, heroSection, leftPannel, topics);

  return (
    <main>
      {heroSection && (
        <HeroSection
          title={heroSection.title}
          highlightedText={heroSection.highlightedText}
          subtitle={heroSection.subtitle}
          description={heroSection.description}
          image={
            heroSection.image
              ? {
                  src: urlFor(heroSection.image).url(),
                  alt: heroSection.alt,
                }
              : undefined
          }
        />
      )}
    </main>
  );
};

export default RootPages;
