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
      selectCategory[]->{
        title,
        "postCount": count(*[_type == "posts" && references(^._id)])
      },
      selectPost[]->{
            title,
    image,
    alt,
    ratings,
        pageLocation
      }
    }
  },
  body[]{
    ...,
    featurePost->
  }
}`);
