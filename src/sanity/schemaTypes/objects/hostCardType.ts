import { defineField, defineType } from "sanity";

export const hostCardType = defineType({
  name: "hostCard",
  title: "Host Card",
  type: "object",
  fields: [
    defineField({
      name: "selectHost",
      title: "Select Host",
      type: "reference",
      to: [{ type: "hosts" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Host Card",
    }),
  },
});
