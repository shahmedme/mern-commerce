import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
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
			<Component {...pageProps} />
			<style jsx global>{`
				body {
					background: #f1f1f1;
					font-family: "Rubik", sans-serif;
				}
			`}</style>
		</>
	);
}
