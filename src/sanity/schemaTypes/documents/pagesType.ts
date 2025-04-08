import { defineField, defineType } from "sanity";

export const pagesType = defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "heroSection",
    }),
    defineField({
      name: "topics",
      title: "Topics",
      type: "topicsSlider",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "featurePost" }, { type: "trandingPost" }],
    }),
    defineField({
      name: "leftPannel",
      title: "Left Panel",
      type: "reference",
      to: [{ type: "leftPannel" }],
    }),
  ],
});
