import React, { FC, HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import { IImage } from "../pages/HeroSection";
import { formatDateWithSuffix } from "@/utils/date.helper";

type FeaturePostProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  image?: IImage;
  category?: string | null;
  title: string | null;
  description?: string | null;
  author?: { title?: string | null; image?: IImage };
  date?: string | null;
  isHot?: boolean;
  link?: string | null;
};

const FeaturePost: FC<FeaturePostProps> = ({
  image,
  category,
  title,
  description,
  author,
  date,
  isHot = false,
  link,
  className,
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-[20px] overflow-hidden shadow-card",
        className
      )}
    >
      {/* Featured Image */}
      {image && image.src && (
        <div className="relative h-[274px] md:h-[355px] w-full">
          <Image
            src={image.src}
            alt={image.alt || title || ""}
            fill
            className="object-cover"
          />
          {category && (
            <div className="absolute top-6 left-9">
              <span className="bg-gray-950 text-white text-[12px] font-bold w-44 py-2.5 rounded-full uppercase block text-center">
                {category}
              </span>
            </div>
          )}
        </div>
      )}
      {/* Content */}
      <div className="sm:pt-6 sm:px-12 sm:pb-10 pt-5 pb-8 px-5">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center lg:gap-14 gap-4 lg:justify-start justify-between lg:w-fit w-full">
            <div className="flex items-center gap-4">
              {author?.image?.src && (
                <Image
                  src={author.image.src}
                  alt={author.image.alt || author.title || ""}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )}
              {author?.title && (
                <span className="text-gray-300">{author.title}</span>
              )}
            </div>
            {date && (
              <span className="text-gray-300 text-sm">
                {formatDateWithSuffix(date)}
              </span>
            )}
          </div>

          {isHot && (
            <span className="xl:block hidden text-red-450 font-semibold uppercase text-sm tracking-[0.25em]">
              Coming in hot!
            </span>
          )}
        </div>
        {isHot && (
          <div className="xl:hidden text-red-450 font-semibold uppercase text-sm tracking-[0.25em] mb-4">
            Coming in hot!
          </div>
        )}

        {title && <h2 className="text-h6 font-bold mb-[22px]">{title}</h2>}
        {description && <p className="mb-10 sm:text-base text-sm">{description}</p>}

        {link && (
          <Link
            href={link}
            className="inline-flex items-center text-primary-300 hover:text-primary-400 transition-colors gap-4 group"
          >
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            <span className="uppercase text-[12px] font-bold tracking-[0.25em]">
              Read More
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeaturePost;
