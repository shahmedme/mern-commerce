import { Router } from "express";
import AccountController from "../controllers/accountController";

export default class UserRoutes {
	private router = Router();
	private accountController: AccountController = new AccountController();

	constructor() {
		this.initRoutes();
	}

	private initRoutes(): void {
		this.router.post("/users", this.accountController.register);
	}
}
