import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IImage } from "../pages/HeroSection";
import Link from "next/link";

type ITopRatedSectionProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  posts?: {
    image?: IImage;
    title?: string | null;
    link?: string | null;
  }[];
};

const TopRatedSection: FC<ITopRatedSectionProps> = (props) => {
  const { title, posts, className, ...others } = props;

  return (
    <div
      className={clsx(
        "lg:flex hidden flex-col gap-6 pl-3 pt-10 pr-4 pb-14 w-full bg-white rounded-[20px] shadow-[0px_6px_6px_0px_#0000000D]",
        className
      )}
      {...others}
    >
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {posts &&
        posts.map(({ image, link, title }, idx) => (
          <div className="pt-6 border-t border-t-gray-300 flex gap-5" key={idx}>
            {image && image.src && (
              <Image
                src={image.src}
                alt={image.alt || title || ""}
                width={84}
                height={80}
                className="rounded-[10px] h-20 w-[84px] object-cover"
              />
            )}
            <div className="flex flex-col gap-2.5">
              {title && (
                <p className="text-sm font-bold line-clamp-2">{title}</p>
              )}
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
        ))}
    </div>
  );
};

export default TopRatedSection;
