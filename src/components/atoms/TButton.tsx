import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React, { FC, HTMLAttributes, ReactNode } from "react";

type ITButtonProps = LinkProps &
  HTMLAttributes<HTMLElement> & {
    href: string;
    children: ReactNode;
  };

const TButton: FC<ITButtonProps> = (props) => {
  const { href, children, className } = props;

  return (
    <Link
      href={href}
      className={clsx(
        "bg-primary-300 font-bold px-6 py-2 rounded-full hover:bg-primary-400 transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default TButton;
