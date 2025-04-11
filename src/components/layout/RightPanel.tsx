import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import FeaturePost from "./FeaturePost";
import { IRightPanel } from "./StandardPage";
import { urlFor } from "@/sanity/lib/image";
import TrandingPostsSection from "../pages/TrandingPostsSection";
import { sanityFetch } from "@/sanity/lib/live";
import { TRANDING_POSTS_QUERY } from "@/queries/posts.query";

type IRightPanelProps = HTMLAttributes<HTMLDivElement> & {
  body: NonNullable<IRightPanel>;
};

const RightPanel: FC<IRightPanelProps> = async (props) => {
  const { body, className, ...others } = props;

  return (
    <div className={clsx("w-full flex flex-col gap-24", className)} {...others}>
      {body.map(async (item) => {
        if (item._type === "featurePost") {
          const { featurePost, _key } = item;

          if (!featurePost) {
            return null;
          }

          const {
            author,
            title,
            image,
            publishedAt,
            alt,
            category,
            pageLocation,
            teaserDescription,
          } = featurePost;

          return (
            <FeaturePost
              key={_key}
              title={title}
              image={image ? { src: urlFor(image).url(), alt } : undefined}
              date={publishedAt}
              category={category?.title}
              link={pageLocation}
              description={teaserDescription}
              isHot={true}
              author={
                author
                  ? {
                      title: author.name,
                      image: {
                        alt: author.alt,
                        src: author.image
                          ? urlFor(author.image).url()
                          : undefined,
                      },
                    }
                  : undefined
              }
            />
          );
        }

        if (item._type === "trandingPost") {
          const { title, posts: selectedPosts, isManual, _key } = item;

          let posts;

          if (isManual) {
            posts = selectedPosts;
          } else {
            const { data } = await sanityFetch({ query: TRANDING_POSTS_QUERY });
            posts = data;
          }

          if (!posts || posts.length === 0) {
            return null;
          }

          const _posts = posts?.map((post) => {
            const {
              author,
              title,
              image,
              publishedAt,
              alt,
              category,
              pageLocation,
              teaserDescription,
            } = post;

            return {
              image: image
                ? {
                    src: urlFor(image).url(),
                    alt: alt || title || "",
                  }
                : undefined,
              link: pageLocation,
              title,
              author: author
                ? {
                    title: author.name,
                    image: {
                      alt: author.alt,
                      src: author.image
                        ? urlFor(author.image).url()
                        : undefined,
                    },
                  }
                : undefined,
              date: publishedAt,
              category: category?.title,
              description: teaserDescription,
            };
          });

          return (
            <TrandingPostsSection key={_key} title={title} posts={_posts} />
          );
        }
        return null;
      })}
    </div>
  );
};

export default RightPanel;
