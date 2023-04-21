import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { useEffect } from "react";

import "@/styles/globals.css";
import store from "@/store";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
