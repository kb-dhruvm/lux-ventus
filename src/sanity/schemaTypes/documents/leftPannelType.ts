import { defineField, defineType } from "sanity";

export const leftPannelType = defineType({
  name: "leftPannel",
  title: "Left Pannel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "selectBlcks",
      title: "Select Blcks",
      type: "array",
      of: [
        { type: "hostCard" },
        { type: "newsLetterCard" },
        { type: "topRatedPosts" },
        { type: "categoryCard" },
      ],
    }),
  ],
});
