import { Request, Response } from "express";
import User from "../models/userModel";

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
		const { username, password } = req.body;

		User.findOne({ username }, (err: any, user: any) => {
			if (err) {
				res.send(err);
			} else if (user == null) {
				res.status(404).send("User not found");
			}
		});
	}
}
