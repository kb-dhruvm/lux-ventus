import { defineQuery } from "next-sanity";

export const PAGE_QUERY =
  defineQuery(`*[_type == "pages" && slug.current == $slug][0]{
  title,
  heroSection,
  topics{
    title,
    topics[]->
  },
  leftPannel->{
    ...,
    selectBlcks[]{
      ...,
      selectHost->,
      selectCategory->
    }
  },
  body[]{
    ...,
    featurePost->
  }
}`);
