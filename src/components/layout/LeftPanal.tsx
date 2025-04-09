import React, { FC } from "react";
import { ILeftPannel } from "./StandardPage";
import HostSection from "./HostSection";
import { HostCard } from "@/sanity/types";

type ILeftPanalProps = {
  leftPanal: NonNullable<ILeftPannel>["selectBlcks"];
};

const LeftPanal: FC<ILeftPanalProps> = (props) => {
  const { leftPanal } = props;

  console.log(leftPanal);

  if (!leftPanal) return null;

  leftPanal.map((item) => {
    if (item._type === "hostCard") {
      const { selectHost } = item as HostCard;
      if (!selectHost) return null;

      return <HostSection key={item._key} />;
    }
  });

  return null;
};

export default LeftPanal;
