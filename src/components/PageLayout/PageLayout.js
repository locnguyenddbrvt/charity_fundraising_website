import { Container } from "react-bootstrap";

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
          <div className={`col-md-2`}>ADs space</div>
        </Container>
      </RootLayout>
    </>
  );
}
