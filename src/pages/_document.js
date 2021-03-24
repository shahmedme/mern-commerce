import Document, { Html, Head, Main, NextScript } from "next/document";
import Ribon from "../components/Ribon";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
						integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
						crossOrigin="anonymous"
					/>
					<title>MERN Commerce | Shakil Ahmed</title>
				</Head>
				<body>
					<Ribon />
					<Main />
					<NextScript />
					<style>{`
						body {
							overflow-x: hidden;
						}
					`}</style>
				</body>
			</Html>
		);
	}
}
