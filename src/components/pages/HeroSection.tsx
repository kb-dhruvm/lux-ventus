import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import Image from "next/image";

export type IImage = {
  src?: string;
  alt?: string | null;
};

type IHeroSectionProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  highlightedText?: string;
  subtitle?: string;
  description?: string;
  image?: IImage;
};

const HeroSection: FC<IHeroSectionProps> = (props) => {
  const {
    className,
    title,
    highlightedText,
    subtitle,
    description,
    image,
    ...others
  } = props;

  return (
    <section
      className={clsx("container md:pt-3 md:pb-11 pb-4", className)}
      {...others}
    >
      <div
        className={clsx(
          "relative w-full h-[560px] rounded-[20px] overflow-hidden flex items-center"
        )}
      >
        {/* Background Image */}
        {image && image.src && (
          <div className="absolute inset-0 z-0">
            <Image
              src={image.src}
              alt={image.alt || "Hero background"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.33)]" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 px-6 md:px-[52px] text-white">
          {subtitle && (
            <p className="uppercase text-[12px] font-semibold mb-6 tracking-[3px] text-center md:text-left">
              {subtitle}
            </p>
          )}

          {(title || highlightedText) && (
            <h1 className="text-4xl md:text-h1 font-light mb-5 leading-normal text-center md:text-left">
              {title}{" "}
              {highlightedText && (
                <span className="font-bold bg-gradient-to-r from-[#4CE0D7] to-[#8BA9F4] bg-clip-text text-transparent">
                  {highlightedText}
                </span>
              )}
            </h1>
          )}

          {description && (
            <p className="max-w-[494px] text-sm sm:text-xl font-light text-center md:text-left">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
