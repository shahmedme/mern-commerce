import express, { Application, Request, Response } from "express";
import User from "./models/userModel";
import Product, { Category } from "./models/productModel";
import Order from "./models/orderModel";
import mongoose from "mongoose";

const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");

AdminBro.registerAdapter(AdminBroMongoose);
class App {
	public app: Application;
	public port: number;

	constructor(appInit: {
		port: number;
		middlewares: any;
		mongoURL: string;
		routes: any;
	}) {
		this.app = express();
		this.port = appInit.port;

		this.connectDB(appInit.mongoURL);
		this.setupAdmin();
		this.initMiddlewares(appInit.middlewares);
		this.initRoutes(appInit.routes);
	}

	private setupAdmin() {
		const adminBro = new AdminBro({
			rootPath: "/admin",
			resources: [Product, Order, User, Category],
		});

		const router = AdminBroExpress.buildRouter(adminBro);
		this.app.use(adminBro.options.rootPath, router);
	}

	private initMiddlewares(middlewares: any) {
		middlewares.forEach((middleware: any) => {
			this.app.use(middleware);
		});
	}

	private async connectDB(mongoURL: string) {
		await mongoose.connect(mongoURL);
		console.log("Database connected successfully");
	}

	private initRoutes(appRoutes: any): void {
		appRoutes.forEach((appRoutes: any) => {
			this.app.use("/api", appRoutes.router);
		});
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App is listening on port no ${this.port}`);
		});
	}
}

export default App;
