import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import "../components/Game/rocket.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
