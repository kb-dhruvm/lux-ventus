import { defineField, defineType } from "sanity";

export const TopicsSliderType = defineType({
  name: "topicsSlider",
  title: "Topics Slider",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categories" }] }],
    }),
  ],
});
