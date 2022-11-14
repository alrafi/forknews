import { LinkProvider } from "../lib/LinkProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LinkProvider>
      <Component {...pageProps} />
    </LinkProvider>
  );
}

export default MyApp;
