import { PAGE_QUERY } from "@/queries/pages.query";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import HeroSection from "./HeroSection";
import { urlFor } from "@/sanity/lib/image";
import TopicsSlider from "./TopicsSliderSection";
import StandardPage from "../layout/StandardPage";

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

  const { heroSection, topics, body, leftPannel } = data;

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
      {topics && (
        <TopicsSlider
          title={topics.title}
          topics={topics.topics?.map(({ title, slug, thumbline, alt }) => ({
            title,
            slug: slug?.current,
            image: thumbline
              ? {
                  src: urlFor(thumbline).url(),
                  alt,
                }
              : undefined,
          }))}
        />
      )}
      {body && <StandardPage leftPanal={leftPannel?.selectBlcks} />}
    </main>
  );
};

export default RootPages;
