import { defineQuery } from "next-sanity";

export const TRANDING_POSTS_QUERY =
  defineQuery(`*[_type == "posts"] | order(publishedAt desc)[$start...$end]{
  teaserDescription,
  alt,
  title,
  pageLocation,
  publishedAt,
  image,
  author->{
    name,
    image,
    alt
  },
  category->{
    title
  }
}`);
