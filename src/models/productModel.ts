import mongoose, { Schema } from "mongoose";
import ProductDoc from "../interfaces/productInterface";

const slugify = require("slugify");

const productSchema = new Schema({
	title: { type: String, required: true, index: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	slug: { type: String, required: true },
	category: { type: String, required: true },
	image: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

productSchema.pre("validate", async function (this: any, next: any) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});

export default mongoose.model<ProductDoc>("Product", productSchema);

const categorySchema = new Schema({
	title: { type: String, required: true, index: true },
	slug: { type: String, required: true },
});

categorySchema.pre("validate", async function (this: any, next: any) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});

export const Category = mongoose.model("Category", categorySchema);
