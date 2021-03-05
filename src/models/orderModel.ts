import mongoose, { Schema } from "mongoose";

const AutoIncrement = require("mongoose-sequence")(mongoose);

const orderItemSchema = new Schema({
	product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
	order: {
		type: Schema.Types.ObjectId,
		ref: "Order",
		required: true,
	},
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
	timestamp: { type: Date, default: Date.now },
});

export const OrderItem = mongoose.model("OrderItem", orderItemSchema);

const orderSchema = new Schema({
	customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
	shippingAddress: { type: String, required: true },
	orderEmail: { type: String, required: true },
	status: { type: String, default: "pending", index: true },
	timestamp: { type: Date, default: Date.now },
});

orderSchema.plugin(AutoIncrement, { inc_field: "orderNo" });
orderSchema.virtual("orderItems", {
	ref: "OrderItem",
	localField: "_id",
	foreignField: "order",
});
orderSchema.set("toObject", { virtuals: true });
orderSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Order", orderSchema);
