import { PAGE_QUERYResult } from "@/sanity/types";
import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import LeftPanal from "./LeftPanal";
import RightPanel from "./RightPanel";

export type ILeftPanel = NonNullable<PAGE_QUERYResult>["leftPannel"];
export type IRightPanel = NonNullable<PAGE_QUERYResult>["body"];

type IStandardPageProps = HTMLAttributes<HTMLDivElement> & {
  leftPanel?: NonNullable<ILeftPanel>["selectBlcks"];
  rightPanel?: IRightPanel;
};

const StandardPage: FC<IStandardPageProps> = (props) => {
  const { leftPanel, rightPanel } = props;

  return (
    <div className="container w-full grid lg:grid-cols-11 grid-cols-1 lg:gap-[46px] gap-12 pt-[26px] pb-28">
      <div
        className={clsx(
          "lg:col-span-11 col-span-1 order-2 lg:order-1",
          leftPanel && "xl:!col-span-8 lg:!col-span-7 !col-span-1"
        )}
      >
        {rightPanel && <RightPanel body={rightPanel} />}
      </div>

      <div className="xl:!col-span-3 lg:!col-span-4 col-span-1 flex flex-col gap-12 order-1 lg:order-2">
        {leftPanel && <LeftPanal leftPanel={leftPanel} />}
      </div>
    </div>
  );
};

export default StandardPage;
