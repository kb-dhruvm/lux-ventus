"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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

  const path = usePathname();

  const DrawerList = (
    <Box
      sx={{ width: "100vw", maxWidth: "100%", height: "100vh" }}
      role="presentation"
      className="bg-primary-300 py-10 px-6 sm:px-9 md:px-12 lg:px-[3.75rem] xl:px-[4.5rem] 2xl:px-[2.25rem]"
    >
      <div className="flex justify-end">
        <button onClick={toggleDrawer(false)} className="text-black">
          <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.3333 15.6667L15.6667 37.3333M15.6667 15.6667L37.3333 37.3333M50.875 26.5C50.875 39.9619 39.9619 50.875 26.5 50.875C13.0381 50.875 2.125 39.9619 2.125 26.5C2.125 13.0381 13.0381 2.125 26.5 2.125C39.9619 2.125 50.875 13.0381 50.875 26.5Z"
              stroke="#262626"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-8 xl:hidden flex flex-col gap-8">
        <Link
          href="/"
          className={clsx(
            "text-black font-normal text-h5",
            path === "/" && "!font-bold"
          )}
          onClick={toggleDrawer(false)}
        >
          Home
        </Link>
        {navItems &&
          navItems.map((item, index) => (
            <Link
              key={index}
              href={`/${item.slug}`}
              className={clsx(
                "text-black font-normal text-h5",
                path === `/${item.slug}` && "!font-bold"
              )}
              onClick={toggleDrawer(false)}
            >
              {item.title}
            </Link>
          ))}
        {button && (
          <Link
            href={`/${button.slug}`}
            className={clsx(
              "text-black font-normal text-h5",
              path === button.slug && "!font-bold"
            )}
            onClick={toggleDrawer(false)}
          >
            {button.title}
          </Link>
        )}
      </div>

      <div className="mt-12 xl:border-t-0 border-t border-black pt-8 w-full">
        <h3 className="text-black font-bold text-h5 lg:mb-[70px] mb-9">
          Looking for a specific article?
        </h3>
        <div className="flex lg:flex-row flex-col lg:gap-3 gap-7 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Article title, topic or category"
              className="w-full rounded-full shadow-[0px_6px_6px_0px_#00000012] py-[22px] md:pl-10 pl-6 pr-12 text-sm bg-background placeholder:text-gray-950 placeholder:italic placeholder:text-sm placeholder:font-normal"
            />
            <div className="absolute right-[22px] top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
          <button className="shadow-[0px_6px_6px_0px_#00000012] transition duration-300 cursor-pointer bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-4 text-base rounded-full w-full max-w-[312px]">
            SEARCH
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <header className="container flex justify-between items-center py-4 px-6 md:px-16">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          )}
        </nav>

        <button className="lg:hidden" onClick={toggleDrawer(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
      <Drawer
        transitionDuration={{ enter: 600, exit: 600 }}
        open={open}
        onClose={toggleDrawer(false)}
        anchor="top"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
