import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ogTitle",
      title: "OG Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ogDescription",
      title: "OG Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
