import React, { FC, HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import { IImage } from "./HeroSection";
import { formatDateWithSuffix } from "@/utils/date.helper";

export type IPostCard = {
  image?: IImage;
  category?: string | null;
  title?: string | null;
  description?: string | null;
  author?: { title?: string | null; image?: IImage };
  date?: string | null;
  isHot?: boolean;
  link?: string | null;
};

type IPostCardProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> &
  IPostCard & {
    isHorizontal?: boolean;
  };

const PostCard: FC<IPostCardProps> = ({
  image,
  category,
  title,
  description,
  author,
  date,
  link,
  isHorizontal = false,
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-[20px] overflow-hidden shadow-[0px_6px_6px_0px_#0000000D] flex",
        isHorizontal ? "xl:flex-row flex-col xl:col-span-2" : "flex-col"
      )}
    >
      {/* Image */}
      {image && image.src && (
        <div
          className={clsx(
            "relative overflow-hidden",
            isHorizontal
              ? "xl:w-2/5 w-full xl:h-full xl:rounded-r-[20px] sm:h-[274px] h-[244px] xl:rounded-bl-none rounded-b-[20px]"
              : "w-full sm:h-[274px] h-[244px] rounded-b-[20px]"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt || title || ""}
            fill
            className="object-cover"
          />
          {category && (
            <div className="absolute top-4 left-4">
              <span className="bg-gray-950 text-white text-[12px] font-semibold w-[132px] py-2.5 rounded-full uppercase block text-center">
                {category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div
        className={clsx(
          "",
          isHorizontal
            ? "xl:w-3/5 w-full sm:pl-9 sm:pr-11 sm:pt-6 sm:pb-10 pl-5 pr-7 pt-6 pb-10"
            : "w-full pl-5 pr-7 pt-6 pb-10"
        )}
      >
        {/* Author and Date */}
        {(author?.title || date) && (
          <div className="flex items-center gap-2 mb-6">
            {author?.image && author.image.src && (
              <Image
                src={author.image.src}
                alt={author.image.alt || author.title || ""}
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            {author?.title && (
              <span className="text-gray-950 text-sm">{author.title}</span>
            )}
            {date && (
              <span className="text-gray-950 text-sm ml-auto">
                {formatDateWithSuffix(date)}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        {title && <h3 className="text-h6 font-bold sm:mb-4 mb-2">{title}</h3>}

        {/* Description */}
        {description && (
          <p
            className={clsx(
              "text-gray-950 sm:text-base text-sm mb-[30px] sm:mb-4"
            )}
          >
            {description}
          </p>
        )}

        {/* Read More Link */}
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

export default PostCard;
