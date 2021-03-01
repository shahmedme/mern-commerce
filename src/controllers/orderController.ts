import { Request, Response } from "express";
import Product from "../models/productModel";
import Order, { OrderItem } from "../models/orderModel";

export default class OrderController {
	public async getOrders(req: Request, res: Response) {
		const data = await Order.find()
			.populate("customer")
			.populate({
				path: "orderItems",
				select: "product price quantity",
				populate: {
					path: "product",
					model: "Product",
				},
			});
		res.send(data);
	}

	public async getOrderById(req: Request, res: Response) {
		let order = await Order.findOne({ _id: req.query.id })
			.populate("customer", "firstName lastName username email role")
			.populate({
				path: "orderItems",
				select: "product price quantity",
				populate: {
					path: "product",
					model: "Product",
					select: "title price description",
				},
			});
		res.send(order);
	}

	public async createOrder(req: Request, res: Response) {
		let newOrder = new Order({
			customer: req.body.user._id,
			shippingAddress: req.body.shippingAddress,
			orderEmail: req.body.orderEmail,
		});
		let orderInfo = await newOrder.save();

		let orderItems = await Product.find({
			_id: { $in: req.body.orderItems.map((item: any) => item.productId) },
		}).exec();

		req.body.orderItems.forEach((item: any, idx: any) => {
			let orderItem = new OrderItem({
				product: item.productId,
				order: orderInfo._id,
				price: (orderItems[idx].price as number) * item.quantity,
				quantity: item.quantity,
			});
			orderItem.save();
		});

		res.send(orderInfo);
	}

	public updateOrder(req: Request, res: Response): void {
		res.send({ msg: "updated orders are: " });
	}

	public deleteOrder(req: Request, res: Response): void {
		res.send({ msg: "orders are deleted" });
	}
}
