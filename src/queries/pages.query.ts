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
    featurePost->{
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
    },
    posts[]->{
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
    }
  }
}`);

export const PAGE_SEO_QUERY = defineQuery(`*[_type == "pages" && slug.current == $slug][0]{
  seo
}`);