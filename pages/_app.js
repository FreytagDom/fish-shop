import "../styles/globals.css";
import Layout from "../components/Layout";
import GlobalStyle from "../components/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
