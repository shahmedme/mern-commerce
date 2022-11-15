import { Request, Response } from "express";
import User from "../models/userModel";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export default class AccountController {
	public async register(req: Request, res: Response) {
		const newUser = new User(req.body);

		if (!req.body.username || !req.body.password) {
			res.status(400).send({ msg: "Please provide username and password" });
		}

		try {
			let user = await newUser.save();
			res.send(user);
		} catch (err) {
			res.status(400).send(err);
		}
	}

	public async login(req: Request, res: Response) {
		const { username } = req.body;

		try {
			let user = await User.findOne({ username });

			if (user === null) {
				res.status(400).send({ msg: "User not found" });
			} else {
				bcrypt.compare(
					req.body.password,
					user.password,
					(err: any, result: any) => {
						if (err) {
							res.send(err);
						} else if (result) {
							jwt.sign(
								{ user },
								process.env.SECRET_KEY,
								(err: any, token: any) => {
									if (err) res.send(err);
									res.send({ token });
								}
							);
						} else {
							res.status(400).send({ msg: "Invalid Password" });
						}
					}
				);
			}
		} catch (err) {
			res.send(err);
		}
	}

	public async getUsers(req: Request, res: Response) {
		try {
			let users = await User.find().exec();
			res.send(users);
		} catch (err) {
			res.send(err);
		}
	}

	public async getUser(req: Request, res: Response) {
		let { user } = req.body;

		if (user) {
			res.send(user);
		} else {
			res.status(400).send({ msg: "User not found" });
		}
	}

	public async updateUser(req: Request, res: Response) {
		let userId = req.body._id;
		let updatedUser = req.body;

		try {
			let user = await User.findOneAndUpdate({ _id: userId }, updatedUser, {
				upsert: true,
				new: true,
			}).exec();
			res.send(user);
		} catch (err) {
			res.send(err);
		}
	}

	public async deleteUser(req: Request, res: Response) {
		let userId = req.body._id;

		try {
			let del = await User.deleteOne({ _id: userId }).exec();

			// @ts-ignore
			if (del.deletedCount > 0) {
				res.send({ msg: "User deleted successfully" });
			} else {
				res.status(500).send({ msg: "something error" });
			}
		} catch (err) {
			res.send(err);
		}
	}
}
