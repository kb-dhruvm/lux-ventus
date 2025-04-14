import { defineField, defineType } from "sanity";

export const newsletterType = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      email: "email",
    },
    prepare: ({ email }) => ({
      title: email,
    }),
  },
});
