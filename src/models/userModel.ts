import mongoose, { Schema } from "mongoose";

const bcrypt = require("bcrypt");

const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, default: "user" },
	timestamp: { type: Date, default: Date.now },
});

userSchema.path("username").validate(async (username: String) => {
	let usernameCount = await mongoose.models.User.countDocuments({ username });
	return !usernameCount;
}, "Username already exist");

userSchema.path("email").validate(async (email: String) => {
	let emailCount = await mongoose.models.User.countDocuments({ email });
	return !emailCount;
}, "Email already exist");

userSchema.path("role").validate(async (role: String) => {
	if (role === "superadmin") return false;
}, "Can't be registered as superadmin. Please ask another superadmin to create account for you");

userSchema.pre("save", async function (this: any, next: any) {
	try {
		let salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (err) {
		console.log(err);
	}
});

export default mongoose.model("User", userSchema);
