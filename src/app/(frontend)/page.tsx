import RootPages from "@/components/pages/RootPages";
import { PAGE_SEO_QUERY } from "@/queries/pages.query";
import { getMetadata } from "@/utils/seo.helper";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata("home", PAGE_SEO_QUERY);
}

export default function Home() {
  return <RootPages slug="home" />;
}
