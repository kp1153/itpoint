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
          { title: "Antivirus", value: "antivirus" },
          { title: "Assemble Desktop", value: "assemble-desktop" },
          { title: "Cabinet", value: "cabinet" },
          { title: "Cartridge", value: "cartridge" },
          { title: "CCTV Camera", value: "cctv-camera" },
          { title: "Desktop", value: "desktop" },
          { title: "Laptop", value: "laptop" },
          { title: "Monitor", value: "monitor" },
          { title: "Motherboard", value: "motherboard" },
          { title: "Printer", value: "printer" },
          { title: "RAM", value: "ram" },
          { title: "Storage", value: "storage" },
          { title: "Tablet", value: "tablet" },
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
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
});
