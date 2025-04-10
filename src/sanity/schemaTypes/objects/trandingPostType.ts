import { defineField, defineType } from "sanity";

export const trandingPostType = defineType({
  name: "trandingPost",
  title: "Tranding Posts",
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
      name: "posts",
      title: "Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "posts" }] }],
      hidden: ({ parent }) => !parent?.isManual,
    }),
  ],
});
