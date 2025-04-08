import { defineField, defineType } from "sanity";
import { imageFieldValidation } from "../../common/validations/imageFieldValidation";

export const heroSectionTypes = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted Text",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
  ],
});
