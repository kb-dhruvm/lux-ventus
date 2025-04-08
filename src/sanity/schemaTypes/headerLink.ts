import { defineField, defineType } from "sanity";

export const headerLink = defineType({
  name: "headerLink",
  title: "Header Link",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
