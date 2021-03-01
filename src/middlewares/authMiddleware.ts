import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

export async function authenticate(req: Request, res: Response, next: any) {
	const tokenHeader = req.headers["authorization"];

	if (typeof tokenHeader !== "undefined") {
		const token = (tokenHeader as string).split(" ")[1];

		jwt.verify(token, process.env.SECRET_KEY, (err: any, authData: any) => {
			if (err) {
				req.body.user = null;
			} else {
				req.body.user = authData.user;
			}
		});
	}
	next();
}

export function authorize(...permittedRoles: any) {
	return (req: Request, res: Response, next: any) => {
		const { user } = req.body;

		if (user && permittedRoles.includes(user.role)) {
			next();
		} else {
			res.status(400).send({ msg: "Method Not Allowed" });
		}
	};
}
