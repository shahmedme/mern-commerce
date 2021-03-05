import mongoose, { Schema } from "mongoose";
import ProductDoc from "../interfaces/productInterface";

const productSchema = new Schema({
	title: { type: String, required: true, index: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	image: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ProductDoc>("Product", productSchema);
