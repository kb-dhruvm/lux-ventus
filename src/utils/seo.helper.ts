import { urlFor } from "@/sanity/lib/image";
import logo from "@/assets/logo.png";
import { sanityFetch } from "@/sanity/lib/live";

export const getMetadata = async (slug: string, query: string) => {
  const { data } = await sanityFetch({
    query: query,
    params: {
      slug,
    },
  });
  
  if (!data?.seo) {
    return {
      title: "Not Found",
    };
  }

  const { seo } = data;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [
        {
          url: seo.ogImage ? urlFor(seo.ogImage).url() : logo.src,
        },
      ],
    },
  };
};
