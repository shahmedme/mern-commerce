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
