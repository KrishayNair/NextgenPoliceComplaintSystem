import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

function MyApp({ Component, pageProps }) {
  return (
    <AnonAadhaarProvider >
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
    </AnonAadhaarProvider>
  );
}

export default MyApp;
