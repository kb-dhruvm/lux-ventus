import { defineField, defineType } from "sanity";

export const topRatedPostsType = defineType({
  name: "topRatedPosts",
  title: "Top Rated Posts",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isManual",
      title: "select tranding manually",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: "selectPost",
      title: "Select Post",
      type: "reference",
      to: [{ type: "posts" }],
      hidden: ({ parent }) => !parent?.isManual,
    }),
  ],
});
