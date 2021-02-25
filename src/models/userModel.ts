import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
