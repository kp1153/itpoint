import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categories",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      options: {
        list: [
          { title: "Accessories", value: "accessories" },
          { title: "Cartridge", value: "cartridge" },
          { title: "Laptop", value: "laptop" },
          { title: "Monitor", value: "monitor" },
          { title: "Printer", value: "printer" },
          { title: "Tablet", value: "tablet" },
          { title: "Assemble Desktop", value: "assemble-desktop" },
          { title: "Cabinet", value: "cabinet" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
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
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Show this category",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: title,
        subtitle: isActive ? "✅ Active" : "❌ Inactive",
      };
    },
  },
});
