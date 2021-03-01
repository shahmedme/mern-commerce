import bodyParser from "body-parser";
import App from "./app";
import appRoutes from "./routes";
import { authenticate } from "./middlewares/authMiddleware";
import loggerMiddleware from "./middlewares/logger";

const dotenv = require("dotenv");
dotenv.config();

const app = new App({
	port: 5000,
	middlewares: [
		bodyParser.json(),
		bodyParser.urlencoded({ extended: false }),
		loggerMiddleware,
		authenticate,
	],
	mongoURL: process.env.DB_STRING || "mongodb://127.0.0.1:27017/mern-commerce",
	routes: appRoutes,
});

app.listen();