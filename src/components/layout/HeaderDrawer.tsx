"use client";
import { Box, Drawer, DrawerProps } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { FiSearch, FiXCircle } from "react-icons/fi";

type IHeaderProps = DrawerProps & {
  toggleDrawer: (newOpen: boolean) => () => void;
  open: boolean;
  navItems?: {
    title: string;
    slug: string;
  }[];
  button?: {
    title: string;
    slug: string;
  };
  showSearch?: boolean;
};

const HeaderDrawer: FC<IHeaderProps> = (props) => {
  const path = usePathname();

  const {
    toggleDrawer,
    open,
    navItems,
    button,
    showSearch,
    className,
    ...others
  } = props;

  return (
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
      classes={{
        paper: "!bg-primary-300",
      }}
      className={clsx("", className)}
      {...others}
    >
      <Box
        sx={{
          width: "100vw",
          maxWidth: "100%",
          height: "100%",
          minHeight: "100vh",
        }}
        role="presentation"
      >
        <div className="container py-10">
          <div className="flex justify-end">
            <button onClick={toggleDrawer(false)} className="text-black">
              <FiXCircle size={64} className="text-gray-950" strokeWidth={1} />
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

          {showSearch && (
            <div className="mt-12 xl:border-t-0 border-t border-black pt-8 w-full">
              <h3 className="text-black font-bold text-h5 lg:mb-[70px] mb-9">
                Looking for a specific article?
              </h3>
              <div className="flex lg:flex-row flex-col lg:gap-3 gap-7 w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Article title, topic or category"
                    className="w-full rounded-full py-[22px] md:pl-10 pl-6 pr-12 text-sm bg-background placeholder:text-gray-950 placeholder:italic placeholder:text-sm placeholder:font-normal"
                  />
                  <div className="absolute right-[22px] top-1/2 -translate-y-1/2">
                    <FiSearch
                      size={36}
                      className="text-gray-950"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <button className="shadow-[0px_6px_6px_0px_#00000012] transition duration-300 cursor-pointer bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-4 text-base rounded-full w-full max-w-[312px]">
                  SEARCH
                </button>
              </div>
            </div>
          )}
        </div>
      </Box>
    </Drawer>
  );
};

export default HeaderDrawer;
