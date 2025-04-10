import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import FeaturePost from "./FeaturePost";
import { IRightPanel } from "./StandardPage";
import { urlFor } from "@/sanity/lib/image";

type IRightPanelProps = HTMLAttributes<HTMLDivElement> & {
  body: NonNullable<IRightPanel>;
};

const RightPanel: FC<IRightPanelProps> = (props) => {
  const { body, className, ...others } = props;

  return (
    <div className={clsx("w-full", className)} {...others}>
      {body.map((item) => {
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
        return null;
      })}
    </div>
  );
};

export default RightPanel;
