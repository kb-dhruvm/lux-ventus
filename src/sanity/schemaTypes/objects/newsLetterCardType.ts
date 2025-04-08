import { defineField, defineType } from "sanity";

export const newsLetterCardType = defineType({
  name: "newsLetterCard",
  title: "News Letter Card",
  type: "object",
  fields: [
    defineField({
      name: "showNewsLetterCard",
      title: "Show News Letter Card",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: true,
    }),
  ],
});
