import { Router } from "express";
import { authorize } from "../middlewares/authMiddleware";
import AccountController from "../controllers/accountController";

export default class UserRoutes {
	private router = Router();
	private accountController: AccountController = new AccountController();

	constructor() {
		this.initRoutes();
	}

	private initRoutes(): void {
		this.router.post("/register", this.accountController.register);
		this.router.post("/login", this.accountController.login);
		this.router.get("/user", this.accountController.getUser);
		this.router.get(
			"/users",
			authorize("superadmin", "admin"),
			this.accountController.getUsers
		);
		this.router.put(
			"/users",
			authorize("superadmin", "admin"),
			this.accountController.updateUser
		);
		this.router.delete(
			"/users",
			authorize("superadmin", "admin"),
			this.accountController.deleteUser
		);
	}
}
