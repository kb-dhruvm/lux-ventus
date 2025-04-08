import { defineField, defineType } from "sanity";
import { imageFieldValidation } from "../validations/imageFieldValidation";

export const postsType = defineType({
  name: "posts",
  title: "Posts",
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
      name: "teaserDescription",
      title: "Teaser Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(), // Set the initial value to the current date and time in ISO format
      options: {
        dateFormat: "YYYY-MM-DD", // Set the date format to YYYY-MM-DD
        timeFormat: "HH:mm", // Set the time format to HH:mm
      },
      validation: (Rule) => Rule.required().max(new Date().toISOString()),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "hosts" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: imageFieldValidation,
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Image Alt Text",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.image,
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "ratings",
      title: "Ratings",
      type: "number",
      initialValue: 0,
    }),
  ],
});
