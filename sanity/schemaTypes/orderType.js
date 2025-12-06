import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Orders",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Delivery Address",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "pincode",
      title: "Pincode",
      type: "string",
    }),
    defineField({
      name: "products",
      title: "Order Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              initialValue: 1,
              validation: (Rule) => Rule.required().positive().integer(),
            },
            {
              name: "priceAtOrder",
              title: "Price at Order Time (₹)",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            },
          ],
          preview: {
            select: {
              productTitle: "product.title",
              quantity: "quantity",
              price: "priceAtOrder",
            },
            prepare({ productTitle, quantity, price }) {
              return {
                title: productTitle,
                subtitle: `Qty: ${quantity} × ₹${price} = ₹${quantity * price}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "subtotal",
      title: "Subtotal (₹)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "discount",
      title: "Discount (₹)",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "tax",
      title: "Tax/GST (₹)",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "deliveryCharge",
      title: "Delivery Charge (₹)",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "total",
      title: "Total Amount (₹)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "⏳ Pending", value: "pending" },
          { title: "✅ Confirmed", value: "confirmed" },
          { title: "📦 Processing", value: "processing" },
          { title: "🚚 Shipped", value: "shipped" },
          { title: "✔️ Delivered", value: "delivered" },
          { title: "❌ Cancelled", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "⏳ Pending", value: "pending" },
          { title: "✅ Paid", value: "paid" },
          { title: "❌ Failed", value: "failed" },
          { title: "💰 Refunded", value: "refunded" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "💳 Razorpay (Online)", value: "razorpay" },
          { title: "💵 Cash on Delivery", value: "cod" },
        ],
        layout: "radio",
      },
      initialValue: "razorpay",
    }),
    defineField({
      name: "razorpayPaymentId",
      title: "Razorpay Payment ID",
      type: "string",
      hidden: ({ document }) => document?.paymentMethod !== "razorpay",
    }),
    defineField({
      name: "razorpayOrderId",
      title: "Razorpay Order ID",
      type: "string",
      hidden: ({ document }) => document?.paymentMethod !== "razorpay",
    }),
    defineField({
      name: "razorpaySignature",
      title: "Razorpay Signature",
      type: "string",
      hidden: ({ document }) => document?.paymentMethod !== "razorpay",
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deliveryDate",
      title: "Expected Delivery Date",
      type: "datetime",
    }),
    defineField({
      name: "notes",
      title: "Order Notes / Special Instructions",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "adminNotes",
      title: "Admin Notes (Internal)",
      type: "text",
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: "Order Date (Newest First)",
      name: "orderDateDesc",
      by: [{ field: "orderDate", direction: "desc" }],
    },
    {
      title: "Order Date (Oldest First)",
      name: "orderDateAsc",
      by: [{ field: "orderDate", direction: "asc" }],
    },
    {
      title: "Total Amount (High to Low)",
      name: "totalDesc",
      by: [{ field: "total", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      orderNumber: "orderNumber",
      customerName: "customerName",
      total: "total",
      orderStatus: "orderStatus",
      paymentStatus: "paymentStatus",
      orderDate: "orderDate",
    },
    prepare(selection) {
      const {
        orderNumber,
        customerName,
        total,
        orderStatus,
        paymentStatus,
        orderDate,
      } = selection;

      const statusEmoji = {
        pending: "⏳",
        confirmed: "✅",
        processing: "📦",
        shipped: "🚚",
        delivered: "✔️",
        cancelled: "❌",
      };

      const paymentEmoji = {
        pending: "⏳",
        paid: "✅",
        failed: "❌",
        refunded: "💰",
      };

      const date = orderDate
        ? new Date(orderDate).toLocaleDateString("en-IN")
        : "";

      return {
        title: `#${orderNumber} - ${customerName}`,
        subtitle: `₹${total} | ${statusEmoji[orderStatus]} ${orderStatus.toUpperCase()} | ${paymentEmoji[paymentStatus]} ${paymentStatus.toUpperCase()} | ${date}`,
      };
    },
  },
});
