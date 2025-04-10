import React, { FC } from "react";
import { ILeftPannel } from "./StandardPage";
import HostSection from "./HostSection";
import { isEmpty } from "lodash";
import { urlFor } from "@/sanity/lib/image";
import { SocialLinks } from "@/sanity/types";
import { NonUndefined } from "@/dto/custom-type.dto";
import NewsLetterSection from "./NewsLetterSection";

type ILeftPanalProps = {
  leftPanal: NonNullable<ILeftPannel>["selectBlcks"];
};

const LeftPanal: FC<ILeftPanalProps> = (props) => {
  const { leftPanal } = props;

  if (!leftPanal || isEmpty(leftPanal)) return null;

  // Render the components instead of just mapping and not using the result
  return (
    <>
      {leftPanal.map((item) => {
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
        return null;
      })}
    </>
  );
};

export default LeftPanal;
