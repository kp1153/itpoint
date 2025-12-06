import { TagIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

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
      name: "images",
      title: "Offer Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
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
      media: "images.0",
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
