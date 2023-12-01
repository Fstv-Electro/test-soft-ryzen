import { GlobalProvider } from "@/store/Context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
