import RootPages from "@/components/pages/RootPages";
import { PAGE_SEO_QUERY } from "@/queries/pages.query";
import { Metadata } from "next";
import React, { FC } from "react";
import { getMetadata } from "@/utils/seo.helper";

type IPagesProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: IPagesProps): Promise<Metadata> {
  const { slug } = await params;
  return getMetadata(slug, PAGE_SEO_QUERY);
}

const Pages: FC<IPagesProps> = async (props) => {
  const { slug } = await props.params;

  return <RootPages slug={slug} />;
};

export default Pages;
