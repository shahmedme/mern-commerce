import React from "react";
import indexStyles from "./index.module.css";
import Ribbon from "components/Ribbon";

export default function index() {
	return (
		<>
		<Ribbon/>
			<div className={indexStyles.wrapper}>
				<div className={indexStyles.header}>
					<h1 className={indexStyles.title}>MERN Commerce</h1>
					<p>
						Made with <i className={`fas fa-heart ${indexStyles.fa_heart}`}></i> by&nbsp;
						<a href="https://github.com/shakilahmmeed" target="_blank">
							Shakil Ahmed
						</a>
					</p>
				</div>
				<main>
					<b>Endpoints:</b>
					<ul className={indexStyles.endpoints}>
						<li>
							GET <code>/api/products</code> get all products
						</li>
						<li>
							POST <code>/api/products</code> create a new product
						</li>
						<li>
							PUT <code>/api/products</code> update a product
						</li>
						<li>
							DELETE <code>/api/products</code> Delete a product
						</li>
						<li>
							GET <code>/api/products/generate</code> Generate product from
							third party API
						</li>
						<div className={indexStyles.separator}></div>
						<li>
							GET <code>/api/orders</code> get all orders
						</li>
						<li>
							GET <code>/api/order/?id=ORDER_ID</code> get an order by ID
						</li>
						<li>
							POST <code>/api/orders</code> create a new order
						</li>
						<li>
							PUT <code>/api/orders</code> update an order
						</li>
						<li>
							DELETE <code>/api/orders</code> delete an order
						</li>
						<li>
							GET <code>/api/orders/report</code> generate summary report
						</li>
						<div className={indexStyles.separator}></div>
						<li>
							POST <code>/api/register</code> create a new account
						</li>
						<li>
							POST <code>/api/login</code> login as user
						</li>
						<li>
							GET <code>/api/users</code> get all users
						</li>
						<li>
							PUT <code>/api/users</code> update an user
						</li>
						<li>
							DELETE <code>/api/users</code> delete an user
						</li>
					</ul>
				</main>
			</div>
		</>
	);
}
