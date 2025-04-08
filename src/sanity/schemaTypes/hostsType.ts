import { defineField, defineType } from "sanity";
import { imageFieldValidation } from "../validations/imageFieldValidation";

export const hostsType = defineType({
  name: "hosts",
  title: "Hosts",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
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
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hostText",
      title: "Host Indentity Text",
      type: "array",
      of: [
        {
          type: "socialLinks",
        },
      ],
    }),
  ],
});
