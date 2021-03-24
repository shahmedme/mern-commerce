import bodyParser from "body-parser";
import cors from "cors";
import App from "./app";
import appRoutes from "./routes";
import { authenticate } from "./middlewares/authMiddleware";
import loggerMiddleware from "./middlewares/logger";

const dotenv = require("dotenv");
const next = require("next");

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const nxt = next({ dev });
const handle = nxt.getRequestHandler();

nxt.prepare().then(() => {
	const app = new App({
		port: 5000,
		middlewares: [
			bodyParser.json(),
			bodyParser.urlencoded({ extended: false }),
			cors(),
			loggerMiddleware,
			authenticate,
		],
		mongoURL:
			process.env.DB_STRING || "mongodb://127.0.0.1:27017/mern-commerce",
		routes: appRoutes,
	});

	app.app.all("*", (req, res) => {
		return handle(req, res);
	});

	app.listen();
});
