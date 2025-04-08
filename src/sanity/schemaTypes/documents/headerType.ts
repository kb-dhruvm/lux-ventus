import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "headerLink" }],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "headerLink",
    }),
    defineField({
      name: "enableSearch",
      title: "Enable Search",
      type: "boolean",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
