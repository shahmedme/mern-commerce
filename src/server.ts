import bodyParser from "body-parser";
import App from "./app";
import appRoutes from "./routes";

const dotenv = require("dotenv");
dotenv.config();

const app = new App({
	port: 5000,
	middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: false })],
	mongoURL: process.env.DB_STRING || "mongodb://127.0.0.1:27017/mern-commerce",
	routes: appRoutes,
});

app.listen();
