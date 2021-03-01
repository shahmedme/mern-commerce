import AccountRoutes from "./accountRoutes";
import OrderRoutes from "./orderRoutes";
import ProductRoutes from "./productRoutes";

const appRoutes = [new AccountRoutes(), new ProductRoutes(), new OrderRoutes()];

export default appRoutes;
