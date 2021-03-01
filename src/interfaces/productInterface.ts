import mongoose from "mongoose";

export default interface ProductDoc extends mongoose.Document {
	title: string;
	description: string;
	price: Number;
	createdAt: Date;
}
