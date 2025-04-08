import { defineField, defineType } from "sanity";

export const featurePostType = defineType({
  name: "featurePost",
  title: "Feature Post",
  type: "object",
  fields: [
    defineField({
      name: "featurePost",
      title: "Feature Post",
      type: "reference",
      to: { type: "posts" },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
