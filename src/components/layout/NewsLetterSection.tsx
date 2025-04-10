import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";

type INewsLetterSectionProps = HTMLAttributes<HTMLDivElement> & {};

const NewsLetterSection: FC<INewsLetterSectionProps> = (props) => {
  const { className, ...others } = props;

  return (
    <div
      className={clsx(
        "bg-white rounded-2xl lg:pl-5 lg:pr-7 lg:pt-10 lg:pb-12 px-10 pb-7 pt-5 shadow-lg flex flex-col lg:justify-center justify-start",
        className
      )}
      {...others}
    >
      <div className="flex-1 flex flex-col">
        <div className="text-center flex flex-col justify-center lg:mb-8 mb-6 items-center">
          <h2 className="text-h5 font-bold lg:pb-5 pb-1.5">Newsletter</h2>
          <span className="w-36 h-[1px] bg-gray-300 lg:block hidden mb-5"></span>
          <p className="text-[12px]">Join the 36,000 Lux Ventus!</p>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary-300 transition-colors text-sm placeholder:text-gray-300 placeholder:italic lg:mb-5 mb-3.5"
          />
          <button className="w-full bg-primary-300 py-2.5 rounded-full hover:bg-primary-400 transition-colors text-[12px] font-bold mb-7">
            Subscribe
          </button>
          <p className="text-[12px] text-center lg:block hidden">
            Rest assured! You&apos;re gonna have a lot of fun when you press
            this
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
