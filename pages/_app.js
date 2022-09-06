import "../styles/globals.css";
import Layout from "../components/Layout";
import GlobalStyle from "../components/GlobalStyle";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Link />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
