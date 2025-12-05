import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offerType = defineType({
  name: "offer",
  title: "Special Offers",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Offer Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Offer Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "isActive",
      title: "Show this offer",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, media, isActive } = selection;
      return {
        title: title,
        subtitle: isActive ? "✅ Active" : "❌ Inactive",
        media: media,
      };
    },
  },
});
