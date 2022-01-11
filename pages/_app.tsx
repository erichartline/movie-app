import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import fetcher from "../lib/fetcher";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
