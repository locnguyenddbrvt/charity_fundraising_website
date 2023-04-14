import { Container } from "react-bootstrap";

export default function AuthLayout({ children }) {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(to bottom right,#02735e,#007369,#36bfb1)",
        height: "100vh",
      }}
    >
      <Container
        className="container-fluid h-40 row"
        style={{
          height: "700px",
          borderRadius: "1rem",
          backgroundColor: "transparent",
        }}
      >
        <div className="col-md-8 p-0">
          <img src="" alt="df" />
        </div>
        <div
          className="col-md-4"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        ></div>
      </Container>
    </div>
  );
}
