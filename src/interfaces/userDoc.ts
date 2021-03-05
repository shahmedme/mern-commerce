import mongoose from "mongoose";

export default interface UserDoc extends mongoose.Document {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	role: string;
	timestamp: Date;
}
