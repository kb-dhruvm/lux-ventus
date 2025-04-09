import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white md:pb-9 pb-12 md:pt-[88px] pt-[84px] rounded-t-[40px] shadow-[6px_0px_6px_0px_#0000000D]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src={logo.src}
                alt="Lux Ventus"
                width={logo.width}
                height={logo.height}
                className="h-10 w-[200px]"
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center md:gap-2.5 gap-9">
            <h3 className="text-gray-800 font-bold text-2xl mr-2">
              Let&apos;s Hang Out
            </h3>
            <div className="flex md:gap-5 gap-6">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
              >
                <FaFacebook size={22} className="md:size-4 size-[22px]" />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
              >
                <FaTwitter size={22} className="md:size-4 size-[22px]" />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
              >
                <FaLinkedinIn size={22} className="md:size-4 size-[22px]" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
              >
                <FaYoutube size={22} className="md:size-4 size-[22px]" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="bg-primary-300 md:p-2 p-3 rounded-full text-white"
              >
                <FaInstagram size={22} className="md:size-4 size-[22px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-950 text-sm text-center font-bold md:text-left">
            &copy; 2025 - Lux Ventus by Zine.E.Falouti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
