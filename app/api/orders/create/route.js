import { client } from "@/sanity/lib/client";

export async function POST(request) {
  try {
    const orderData = await request.json();

    // Validate required fields
    if (
      !orderData.orderNumber ||
      !orderData.customerName ||
      !orderData.email ||
      !orderData.phone ||
      !orderData.products ||
      orderData.products.length === 0
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create order document in Sanity
    const order = {
      _type: "order",
      orderNumber: orderData.orderNumber,
      customerName: orderData.customerName,
      email: orderData.email,
      phone: orderData.phone,
      address: orderData.address,
      city: orderData.city || "",
      pincode: orderData.pincode || "",
      products: orderData.products.map((item) => ({
        _type: "object",
        _key: `item-${Date.now()}-${Math.random()}`,
        product: {
          _type: "reference",
          _ref: item.product,
        },
        quantity: item.quantity,
        priceAtOrder: item.priceAtOrder,
      })),
      subtotal: orderData.subtotal,
      discount: orderData.discount || 0,
      tax: orderData.tax,
      deliveryCharge: orderData.deliveryCharge,
      total: orderData.total,
      orderStatus: orderData.orderStatus || "pending",
      paymentStatus: orderData.paymentStatus || "pending",
      paymentMethod: orderData.paymentMethod,
      razorpayPaymentId: orderData.razorpayPaymentId || "",
      razorpayOrderId: orderData.razorpayOrderId || "",
      razorpaySignature: orderData.razorpaySignature || "",
      orderDate: new Date().toISOString(),
      notes: orderData.notes || "",
    };

    const result = await client.create(order);

    return Response.json(
      {
        success: true,
        orderId: result._id,
        orderNumber: result.orderNumber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return Response.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
