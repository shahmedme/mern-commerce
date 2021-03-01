import { Request, Response } from "express";
import axios from "axios";
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

	public async deleteProduct(req: Request, res: Response) {
		let productId = req.body._id;
		let del = await Product.deleteOne({ _id: productId }).exec();
		if (del.deletedCount > 0) {
			res.send({ msg: "Product deleted successfully" });
		} else {
			res.status(500).send({ msg: "something error" });
		}
	}

	public async generateProducts(req: Request, res: Response) {
		try {
			let productResponse = await axios.get(
				"https://fakestoreapi.com/products"
			);
			let products = await Product.insertMany(productResponse.data);
			res.send(products);
		} catch (err) {
			res.send(err);
		}
	}
}
