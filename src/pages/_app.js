export default function MyApp({ Component, pageProps }) {
	return (
		<>
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
