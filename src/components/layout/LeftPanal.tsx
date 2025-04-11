import React, { FC } from "react";
import { ILeftPanel } from "./StandardPage";
import HostSection from "./HostSection";
import { isEmpty } from "lodash";
import { urlFor } from "@/sanity/lib/image";
import { SocialLinks } from "@/sanity/types";
import { NonUndefined } from "@/dto/custom-type.dto";
import NewsLetterSection from "./NewsLetterSection";
import TopRatedSection from "./TopRatedSection";
import { sanityFetch } from "@/sanity/lib/live";
import { TOP_RATED_POSTS_QUERY } from "@/queries/layout.query";
import CategoriesSection from "./CategoriesSection";

type ILeftPanalProps = {
  leftPanel: NonNullable<ILeftPanel>["selectBlcks"];
};

const LeftPanal: FC<ILeftPanalProps> = async (props) => {
  const { leftPanel } = props;

  if (!leftPanel || isEmpty(leftPanel)) return null;

  return (
    <>
      {leftPanel.map(async (item) => {
        if (item._type === "hostCard") {
          const { selectHost } = item;

          const { name, hostText, description, socialLinks, image, alt } =
            selectHost!;

          return (
            <HostSection
              key={item._key}
              name={name}
              hostText={hostText}
              description={description}
              image={image ? { src: urlFor(image).url(), alt } : undefined}
              socialLinks={socialLinks?.reduce(
                (acc, { socialMedia, url }) => {
                  acc[socialMedia!] = url;
                  return acc;
                },
                {} as Record<
                  NonUndefined<SocialLinks["socialMedia"]>,
                  string | undefined
                >
              )}
            />
          );
        }
        if (item._type === "newsLetterCard") {
          if (!item.showNewsLetterCard) return null;

          return <NewsLetterSection key={item._key} />;
        }
        if (item._type === "topRatedPosts") {
          let posts;

          if (!item.isManual) {
            const { data } = await sanityFetch({
              query: TOP_RATED_POSTS_QUERY,
            });

            posts = data.map(({ title, pageLocation, image, alt }) => ({
              title,
              link: pageLocation,
              image: image ? { src: urlFor(image).url(), alt } : undefined,
            }));
          } else {
            console.log(item);
            posts = item.selectPost?.map(
              ({ title, pageLocation, image, alt }) => ({
                title,
                link: pageLocation,
                image: image ? { src: urlFor(image).url(), alt } : undefined,
              })
            );
          }

          return (
            <TopRatedSection key={item._key} title="Top Rateds" posts={posts} />
          );
        }
        if (item._type === "categoryCard") {
          const { selectCategory, _key } = item;
          if (!selectCategory) return null;
          return <CategoriesSection key={_key} categories={selectCategory} />;
        }
        return null;
      })}
    </>
  );
};

export default LeftPanal;
