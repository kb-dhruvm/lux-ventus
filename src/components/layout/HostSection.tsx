import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IImage } from "../pages/HeroSection";

type IHostSectionProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
  image?: IImage;
  hostText?: string;
  description?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
};

const HostSection: FC<IHostSectionProps> = (props) => {
  const {
    name,
    image,
    hostText,
    description,
    socialLinks,
    className,
    ...others
  } = props;

  return (
    <div
      className={clsx(
        "bg-white rounded-2xl lg:px-8 lg:pt-7 lg:pb-9 py-7 px-[22px] shadow-[0px_6px_6px_0px_#0000000D] flex flex-col",
        className
      )}
      {...others}
    >
      <div className="flex lg:flex-col flex-row items-center lg:gap-0 gap-6 lg:justify-start justify-center">
        {image && image.src && (
          <Image
            src={image.src}
            alt={image.alt || name || ""}
            width={125}
            height={125}
            className="lg:size-[140px] size-24 rounded-full lg:border-8 border-[6px] border-primary-300 lg:mb-8"
          />
        )}
        <div className="flex flex-col items-center">
          {hostText && (
            <p className="uppercase text-[12px] font-bold tracking-[3px] text-center md:text-left text-gray-200 lg:pb-0 pb-1.5">
              {hostText}
            </p>
          )}
          {name && (
            <h2 className="text-h6 font-normal lg:w-full lg:mb-6 pb-4 lg:border-b-2 border-b-gray-100 lg:text-center">
              {name}
            </h2>
          )}
          {description && (
            <p className="text-gray-950 text-left text-[12px] mb-10 lg:block hidden">
              {description}
            </p>
          )}
          <div className="flex flex-col items-center gap-8 w-full">
            <button className="bg-primary-300 text-gray-950 py-2.5 rounded-full hover:bg-primary-400 transition-colors w-full max-w-44 font-bold text-[12px]">
              Let&apos;s Chat
            </button>
            <div className="hidden lg:flex gap-4">
              {socialLinks?.facebook && (
                <Link
                  href={socialLinks.facebook}
                  aria-label="Facebook"
                  className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
                >
                  <FaFacebook size={22} className="md:size-3 size-[22px]" />
                </Link>
              )}
              {socialLinks?.twitter && (
                <Link
                  href={socialLinks.twitter}
                  aria-label="Twitter"
                  className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
                >
                  <FaTwitter size={22} className="md:size-3 size-[22px]" />
                </Link>
              )}
              {socialLinks?.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  aria-label="LinkedIn"
                  className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
                >
                  <FaLinkedinIn size={22} className="md:size-3 size-[22px]" />
                </Link>
              )}
              {socialLinks?.youtube && (
                <Link
                  href={socialLinks.youtube}
                  aria-label="YouTube"
                  className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
                >
                  <FaYoutube size={22} className="md:size-3 size-[22px]" />
                </Link>
              )}
              {socialLinks?.instagram && (
                <Link
                  href={socialLinks.instagram}
                  aria-label="Instagram"
                  className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
                >
                  <FaInstagram size={22} className="md:size-3 size-[22px]" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostSection;
