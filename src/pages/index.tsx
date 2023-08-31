import React, { Component, ReactElement } from "react";
import indexStyles from "./index.module.css";
import Ribbon from "components/Ribbon";
import Link from "next/link";
import { ApiClient } from "admin-bro";

const apiEndpoints: Record<string, { title: ReactElement, url: string }[]> = {
	products: [
		{
			title: (
				<>
					GET <code>/api/products</code> get all products.
				</>
			),
			url: "/api/products",
		},
		{
			title: (
				<>
					POST <code>/api/products</code> create a new product
				</>
			),
			url: "/api/products",
		},
		{
			title: (
				<>
					PUT <code>/api/products</code> update a product
				</>
			),
			url: "/api/products",
		},
		{
			title: (
				<>
					DELETE <code>/api/products</code> Delete a product
				</>
			),
			url: "/api/products",
		},
		{
			title: (
				<>
					GET <code>/api/products/generate</code> Generate product from third party API
				</>
			),
			url: "/api/products/generate",
		},
	],
	orders: [
		{
			title: (
				<>
					GET <code>/api/orders</code> get all orders
				</>
			),
			url: "/api/orders",
		},
		{
			title: (
				<>
					GET <code>/api/order/?id=ORDER_ID</code> get an order by ID
				</>
			),
			url: "/api/order/?id=ORDER_ID",
		},
		{
			title: (
				<>
					POST <code>/api/orders</code> create a new order
				</>
			),
			url: "/api/orders",
		},
		{
			title: (
				<>
					PUT <code>/api/orders</code> update an order
				</>
			),
			url: "/api/orders",
		},
		{
			title: (
				<>
					DELETE <code>/api/orders</code> delete an order
				</>
			),
			url: "/api/orders",
		},
		{
			title: (
				<>
					GET <code>/api/orders/report</code> generate summary report
				</>
			),
			url: "/api/orders/report",
		},
	],
	accounts: [
		{
			title: (
				<>
					POST <code>/api/register</code> create a new account
				</>
			),
			url: "/api/register",
		},
		{
			title: (
				<>
					POST <code>/api/login</code> login as user
				</>
			),
			url: "/api/login",
		},
		{
			title: (
				<>
					GET <code>/api/users</code> get all users
				</>
			),
			url: "/api/users",
		},
		{
			title: (
				<>
					PUT <code>/api/users</code> update an user
				</>
			),
			url: "/api/users",
		},
		{
			title: (
				<>
					DELETE <code>/api/users</code> delete an user
				</>
			),
			url: "/api/users",
		},
	],
};

console.log(apiEndpoints);


export default function index() {

	return (
		<>
			<Ribbon />
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
						{
							Object.keys(apiEndpoints).map(endpointKey => (
								<>
									{apiEndpoints[endpointKey].map(productAPI => (
										<li>
											{productAPI.title} - <Link href={productAPI.url} target="_blank">
												<i className={`fas fa-external-link-alt`}></i>
											</Link>
										</li>
									))}
									<div className={indexStyles.separator}></div>
								</>
							)
							)
						}

					</ul>
				</main>
			</div>
		</>
	);
}
