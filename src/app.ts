import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";

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

		this.initMiddlewares(appInit.middlewares);
		this.connectDB(appInit.mongoURL);
		this.initRoutes(appInit.routes);
	}

	private initMiddlewares(middlewares: any) {
		middlewares.forEach((middleware: any) => {
			this.app.use(middleware);
		});
	}

	private connectDB(mongoURL: string): void {
		mongoose.connect(mongoURL);
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
