import { PAGE_QUERYResult } from "@/sanity/types";
import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import LeftPanal from "./LeftPanal";

export type ILeftPannel = NonNullable<PAGE_QUERYResult>["leftPannel"];

type IStandardPageProps = HTMLAttributes<HTMLDivElement> & {
  leftPanal?: NonNullable<ILeftPannel>["selectBlcks"];
};

const StandardPage: FC<IStandardPageProps> = (props) => {
  const { leftPanal } = props;

  return (
    <div className="container w-full grid grid-cols-4 gap-[45px] pt-[26px] pb-28">
      <div className={clsx("col-span-4", leftPanal && "col-span-3")}>
        right panal
      </div>

      <div className="col-span-1 flex flex-col gap-12">
        {leftPanal && (
          <LeftPanal leftPanal={leftPanal} />
        )}
      </div>
    </div>
  );
};

export default StandardPage;
