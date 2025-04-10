import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";

type ICategoriesSectionProps = HTMLAttributes<HTMLDivElement> & {
  categories?: {
    title?: string | null;
    postCount: number;
  }[];
};

const CategoriesSection: FC<ICategoriesSectionProps> = (props) => {
  const { categories, className, ...others } = props;

  return (
    <div
      className={clsx(
        "lg:flex hidden flex-col gap-6 pl-[22px] pr-[30px] pt-[38px] pb-11 rounded-[20px] shadow-[0px_6px_6px_0px_#0000000D] bg-white",
        className
      )}
      {...others}
    >
      <h2 className="text-2xl font-bold mb-1.5">Categories</h2>
      {categories &&
        categories.map(({ title, postCount }, idx) => (
          <div
            key={idx}
            className="pt-6 border-t border-t-gray-200 flex justify-between items-center"
          >
            <span className="text-base font-bold">{title}</span>
            <span className="size-11 flex justify-center items-center bg-primary-300 font-bold text-2xl rounded-full">
              {postCount}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CategoriesSection;
