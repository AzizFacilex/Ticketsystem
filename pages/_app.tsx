import "../styles/tailwind.css";
import "../styles/slick.css";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../web3/getLibrary";
import { AppProps } from "next/app";


function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
