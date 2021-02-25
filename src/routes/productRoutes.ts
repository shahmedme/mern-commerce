import { Router } from "express";
import ProductController from "../controllers/productController";

export default class ProductRoutes {
	private router = Router();
	private productController: ProductController = new ProductController();

	constructor() {
		this.initRoutes();
	}

	private initRoutes() {
		this.router.get("/products", this.productController.getProducts);
		this.router.post("/products", this.productController.createProduct);
	}
}
