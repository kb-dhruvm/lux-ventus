"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import HeaderDrawer from "./HeaderDrawer";
import menuIcon from "@/assets/hamburger-Icon.svg";

interface INavItem {
  title: string;
  slug: string;
}

interface IHeaderProps {
  navItems?: INavItem[];
  button?: INavItem;
  showSearch?: boolean;
}

export default function Header({ navItems, button, showSearch }: IHeaderProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <header className="container flex justify-between items-center py-4 md:py-9 px-6 md:px-16">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo.src}
              alt="Lux Ventus"
              width={logo.width}
              height={logo.height}
              priority
              className="h-12 w-[234px]"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-16 text-sm">
          {navItems &&
            navItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item.slug}`}
                className="text-gray-950 hover:text-gray-600 font-bold"
              >
                {item.title}
              </Link>
            ))}

          {button && (
            <Link
              href={button.slug}
              className="bg-primary-300 hover:text-white text-gray-950 font-bold px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
            >
              {button.title}
            </Link>
          )}
          {showSearch && (
            <button
              className="ml-4 p-3.5 rounded-full bg-primary-300 text-black"
              onClick={toggleDrawer(true)}
            >
              <FiSearch size={20} />
            </button>
          )}
        </nav>

        <button
          className="lg:hidden size-14 flex justify-center items-center rounded-full bg-primary-300"
          onClick={toggleDrawer(true)}
        >
          <Image
            src={menuIcon}
            alt="menu"
            width={25}
            height={18}
            className="h-fit w-fit"
          />
        </button>
      </header>

      <HeaderDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        navItems={navItems}
        showSearch={showSearch}
        button={button}
      />
    </>
  );
}
