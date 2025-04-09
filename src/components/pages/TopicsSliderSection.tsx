"use client";
import React, {
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import clsx from "clsx";
import { IImage } from "./HeroSection";
import Image from "next/image";
import { EmblaCarouselType } from "embla-carousel";

interface Topic {
  image?: IImage;
  title?: string;
  slug?: string;
}

type ITopicsSliderProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  title: string | null;
  topics?: Topic[];
};

const TopicsSlider: FC<ITopicsSliderProps> = (props) => {
  const { className, title, topics, ...others } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className={clsx("container pt-11 pb-[26px]", className)}
      {...others}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {topics && topics.length > 0 && (
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className={clsx(
                "p-3 rounded-full bg-primary-300 hover:bg-primary-400 transition-colors cursor-pointer",
                prevBtnDisabled &&
                  "!cursor-not-allowed !opacity-50 hover:!bg-primary-300"
              )}
              aria-label="Previous topic"
            >
              <LuChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={scrollNext}
              className={clsx(
                "p-3 rounded-full bg-primary-300 hover:bg-primary-400 transition-colors cursor-pointer",
                nextBtnDisabled &&
                  "!cursor-not-allowed !opacity-50 hover:!bg-primary-300"
              )}
              aria-label="Next topic"
            >
              <LuChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        )}
      </div>

      <div
        className="overflow-hidden pb-[88px] border-b border-b-gray-200"
        ref={emblaRef}
      >
        <div className="flex">
          {topics &&
            topics.map(({ image, slug, title }, idx) => (
              <div
                key={idx}
                className="xl:flex-[0_0_16.66%] lg:flex-[0_0_20%] md:flex-[0_0_25%] sm:flex-[0_0_33.33%] flex-[0_0_50%] min-w-0 relative sm:px-[5px] px-0.5"
              >
                <div className="bg-white rounded-[20px] shadow-[0px_6px_6px_0px_#0000000D] sm:p-6 p-3 pt-10 sm:pb-8 pb-6 flex flex-col items-center justify-center transition-all duration-300">
                  {image && image?.src && (
                    <Image
                      src={image.src}
                      alt={image.alt || title || ""}
                      height={100}
                      width={100}
                      className="max-h-[100px] h-fit mb-5"
                      quality={100}
                    />
                  )}
                  {title && (
                    <h3 className="sm:text-xl text-base font-bold mb-9">
                      {title}
                    </h3>
                  )}
                  {slug && (
                    <Link
                      href={slug}
                      className="2xl:px-10 xl:px-8 lg:px-7 md:px-5 px-8 py-2.5 bg-primary-300 rounded-full hover:bg-primary-400 transition-colors text-[12px] font-bold"
                    >
                      View More
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSlider;
