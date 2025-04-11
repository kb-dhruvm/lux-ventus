import { defineQuery } from "next-sanity";

export const HEADER_QUERY = defineQuery(
  `*[_type == "header"] | order(_updatedAt desc)[0]`
);

export const LEFT_PANEL_QUERY = defineQuery(
  `*[_type == "leftPanel"] | order(_updatedAt desc)[0]`
);

export const TOP_RATED_POSTS_QUERY =
  defineQuery(`*[_type == "posts"] | order(ratings desc)[0...5]{
  pageLocation,
    title,
    image,
    alt,
    ratings
}
`);
