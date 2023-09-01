import { GetStaticProps } from "next";
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: {
    },
  }
}