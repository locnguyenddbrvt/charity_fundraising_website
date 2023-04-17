import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import "@/styles/globals.css";
import store from "@/store";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1543717981390827"
        crossorigin="anonymous"
      /> */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
