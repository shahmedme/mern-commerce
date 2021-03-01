import { Request, Response } from "express";

export default function loggerMiddleware(
	req: Request,
	res: Response,
	next: any
) {
	console.log("Request logged:", req.method, req.path);
	next();
}
