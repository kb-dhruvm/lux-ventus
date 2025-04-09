import RootPages from "@/components/pages/RootPages";
import React, { FC } from "react";

type IPagesProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Pages: FC<IPagesProps> = async (props) => {
  const { slug } = await props.params;

  return <RootPages slug={slug} />;
};

export default Pages;
