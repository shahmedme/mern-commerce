import { Request, Response } from "express";
import Product from "../models/productModel";

export default class ProductController {
	public createProduct(req: Request, res: Response): void {
		const newProduct = new Product(req.body);

		newProduct.save((err, product) => {
			if (err) res.send(err);
			res.send(product);
		});
	}

	public getProducts(req: Request, res: Response): void {
		Product.find({}, (err, products) => {
			if (err) res.send(err);
			res.send(products);
		});
	}

	public updateProduct(req: Request, res: Response): void {
		let productId = req.body._id;
		let updatedProduct = req.body;

		Product.findOneAndUpdate(
			{ _id: productId },
			updatedProduct,
			{ upsert: true, new: true },
			(err, product) => {
				if (err) res.send(err);
				res.send(product);
			}
		);
	}

	// public deleteProduct(req: Request, res: Response): void {
	// 	let productId = req.body._id;

	// 	Product.findOneAndDelete({ _id: productId }, (err, product) => {
	// 		if (err) {
	// 			res.send(err);
	// 		}
	// 		res.send(product);
	// 	});
	// }
}
