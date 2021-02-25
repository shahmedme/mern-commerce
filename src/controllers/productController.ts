import { Request, Response } from "express";

export default class ProductController {
	public createProduct(req: Request, res: Response) {
		res.send("Product is successfully created");
	}

	public getProducts(req: Request, res: Response) {
		let products = [
			{ name: "Item 1", price: 100.0, quantity: 5 },
			{ name: "Item 2", price: 150.0, quantity: 50 },
			{ name: "Item 3", price: 177.0, quantity: 54 },
		];

		res.end(JSON.stringify(products));
	}
}
