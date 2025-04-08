import { defineField, defineType } from "sanity";
import { imageFieldValidation } from "../../common/validations/imageFieldValidation";

export const categoriesType = defineType({
  name: "categories",
  title: "Categories",
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
      name: "thumbline",
      title: "Category Identity Image",
      type: "image", 
      options: {
        hotspot: true,
      },
      validation: imageFieldValidation,
    }),
    defineField({
      name: "alt",
      title: "Category Identity Image Alt Text",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.thumbline,
    })
  ],
});
