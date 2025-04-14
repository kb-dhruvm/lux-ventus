import { defineField, defineType } from "sanity";

export const categotyCardType = defineType({
  name: "categoryCard",
  title: "Category Card",
  type: "object",
  fields: [
    defineField({
      name: "selectCategory",
      title: "Select Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categories" }] }],
      validation: (Rule) => Rule.required(),
    }),
  ],preview: {
    prepare: () => ({
      title: "Category Card",
    }),
  },
});
