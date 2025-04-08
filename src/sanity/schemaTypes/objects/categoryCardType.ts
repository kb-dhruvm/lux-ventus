import { defineField, defineType } from "sanity";

export const categotyCardType = defineType({
  name: "categoryCard",
  title: "Category Card",
  type: "object",
  fields: [
    defineField({
      name: "selectCategory",
      title: "Select Category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
