import { Router } from "express";
import { authorize } from "../middlewares/authMiddleware";
import ProductController from "../controllers/productController";

export default class ProductRoutes {
	private router = Router();
	private productController: ProductController = new ProductController();

	constructor() {
		this.initRoutes();
	}

	private initRoutes() {
		this.router.get("/products", this.productController.getProducts);
		this.router.post(
			"/products",
			authorize("superadmin", "admin"),
			this.productController.createProduct
		);
		this.router.put(
			"/products",
			authorize("superadmin", "admin"),
			this.productController.updateProduct
		);
		// this.router.delete("/products", this.productController.deleteProduct);
	}
}
