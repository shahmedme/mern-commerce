import { Router } from "express";
import { authorize } from "../middlewares/authMiddleware";
import OrderController from "../controllers/orderController";

export default class OrderRoutes {
	private router = Router();
	private orderController: OrderController = new OrderController();

	constructor() {
		this.initRoutes();
	}

	private initRoutes(): void {
		this.router.get(
			"/orders",
			authorize("superadmin", "admin"),
			this.orderController.getOrders
		);
		this.router.get(
			"/order",
			authorize("superadmin", "admin", "user"),
			this.orderController.getOrderById
		);
		this.router.post(
			"/orders",
			authorize("superadmin", "admin", "user"),
			this.orderController.createOrder
		);
		this.router.put(
			"/orders",
			authorize("superadmin", "admin"),
			this.orderController.updateOrder
		);
		this.router.delete(
			"/orders",
			authorize("superadmin", "admin"),
			this.orderController.deleteOrder
		);

		this.router.get(
			"/orders/report",
			authorize("superadmin"),
			this.orderController.generateReport
		);
	}
}
