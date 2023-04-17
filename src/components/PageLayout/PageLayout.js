import { Container } from "react-bootstrap";
import React from "react";
import AdSense from "react-adsense";

import RootLayout from "../RootLayout/RootLayout";

export default function PageLayout({ children, title }) {
  return (
    <>
      <RootLayout>
        <Container
          className={`container-xl pt-5 row`}
          style={{ margin: "70px auto" }}
        >
          <h3
            className="text-green-800 pb-3"
            style={{ borderBottom: "1px #ddd solid" }}
          >
            {title}
          </h3>
          <div
            className="col-md-10 p-5 mt-1"
            style={{
              backgroundColor: "#ddd",
              borderRadius: "0.5rem",
              color: "rgba(0,0,0,0.55)",
            }}
          >
            {children}
          </div>
          <div className={`col-md-2`}>
            <p>ADs space</p>
            <AdSense.Google
              client="1543717981390827"
              slot="8719506158"
              style={{ display: "block" }}
              format="auto"
              responsive="true"
            />
          </div>
        </Container>
      </RootLayout>
    </>
  );
}
