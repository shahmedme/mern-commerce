import { Request, Response } from "express";
import User from "../models/userModel";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export default class AccountController {
	public register(req: Request, res: Response): void {
		const newUser = new User(req.body);

		if (!req.body.username || !req.body.password) {
			res.status(400).send({ msg: "Please provide username and password" });
		}

		newUser.save((err, user) => {
			if (err) res.status(400).send(err);

			res.status(200).send(user);
		});
	}

	public login(req: Request, res: Response): void {
		const { username } = req.body;

		User.findOne({ username }, (err: any, user: any) => {
			if (err) {
				res.send(err);
			} else if (user === null) {
				res.status(400).send({ msg: "User not found" });
			}

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
		});
	}

	public getUsers(req: Request, res: Response): void {
		let users = User.find({}, (err, users) => {
			if (err) res.send(err);

			res.send(users);
		});
	}

	public updateUser(req: Request, res: Response): void {
		let userId = req.body._id;
		let updatedUser = req.body;

		User.findOneAndUpdate(
			{ _id: userId },
			updatedUser,
			{ upsert: true, new: true },
			(err, user) => {
				if (err) res.send(err);
				res.send(user);
			}
		);
	}

	// public deleteuser(req: Request, res: Response): void {
	// 	let userId = req.body._id;

	// 	User.findOneAndDelete({ _id: userId }, (err, user) => {
	// 		if (err) res.send(err);
	// 		res.send(user);
	// 	});
	// }
}
