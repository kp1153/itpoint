import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { useCallback, useState } from "react";
import { Stack, Button, Card, Text, Spinner, Flex, Grid } from "@sanity/ui";
import { insert, unset } from "sanity";
import { TrashIcon } from "@sanity/icons";

// Multiple Cloudinary Upload Component
function MultiCloudinaryInput(props) {
  const { onChange, value = [] } = props;
  const [uploading, setUploading] = useState(false);
  const [uploadCount, setUploadCount] = useState({ current: 0, total: 0 });

  const handleFileChange = useCallback(
    async (event) => {
      const files = Array.from(event.target.files);
      if (files.length === 0) return;

      setUploading(true);
      setUploadCount({ current: 0, total: files.length });

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadCount({ current: i + 1, total: files.length });

        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "itpoint");
          formData.append("folder", "products");

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dqewyfjpl/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) throw new Error("Upload failed");

          const data = await response.json();

          onChange(
            insert(
              [
                {
                  _type: "productImage",
                  _key: `img-${Date.now()}-${i}`,
                  url: data.secure_url,
                },
              ],
              "after",
              value.length > 0 ? [value.length - 1] : [-1]
            )
          );
        } catch (err) {
          console.error(`File ${i + 1} upload failed:`, err);
        }
      }

      setUploading(false);
      event.target.value = "";
    },
    [onChange, value]
  );

  const handleDelete = useCallback(
    (index) => {
      const newValue = value.filter((_, i) => i !== index);
      onChange(newValue.length > 0 ? newValue : unset());
    },
    [onChange, value]
  );

  return (
    <Stack space={3}>
      <Button
        as="label"
        mode="ghost"
        text={uploading ? "अपलोड हो रहा है..." : "कई तस्वीरें अपलोड करें"}
        tone="primary"
        disabled={uploading}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={uploading}
        />
      </Button>

      {uploading && (
        <Card padding={3} radius={2} shadow={1}>
          <Flex align="center" gap={3}>
            <Spinner />
            <Text size={1}>
              {uploadCount.current} / {uploadCount.total} अपलोड हो रही हैं...
            </Text>
          </Flex>
        </Card>
      )}

      {value.length > 0 && (
        <Grid columns={3} gap={2}>
          {value.map((img, index) => (
            <Card key={img._key} padding={2} radius={2} shadow={1}>
              <Stack space={2}>
                <img
                  src={img.url}
                  alt="Product"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <Button
                  mode="ghost"
                  text="डिलीट"
                  tone="critical"
                  icon={TrashIcon}
                  onClick={() => handleDelete(index)}
                  fontSize={1}
                />
              </Stack>
            </Card>
          ))}
        </Grid>
      )}
    </Stack>
  );
}

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      options: {
        list: [
          { title: "HP", value: "hp" },
          { title: "Dell", value: "dell" },
          { title: "Lenovo", value: "lenovo" },
          { title: "Asus", value: "asus" },
          { title: "Acer", value: "acer" },
          { title: "Canon", value: "canon" },
          { title: "Epson", value: "epson" },
          { title: "Samsung", value: "samsung" },
          { title: "LG", value: "lg" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "productImage",
          fields: [
            {
              name: "url",
              type: "string",
              title: "Image URL",
            },
          ],
        },
      ],
      components: {
        input: MultiCloudinaryInput,
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "price",
      title: "Price (₹)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "stock",
      title: "Stock Quantity",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category.name",
      price: "price",
      images: "images",
      inStock: "inStock",
    },
    prepare(selection) {
      const { title, category, price, images, inStock } = selection;
      const status = inStock ? "✅ In Stock" : "⚠️ Out of Stock";
      return {
        title: title,
        subtitle: `${category} | ₹${price} | ${status}`,
        media: images?.[0]?.url ? { url: images[0].url } : undefined,
      };
    },
  },
});
