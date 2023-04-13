import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useRouter } from "next/router";

import styles from "./MainNavigation.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MainNavigation() {
  const router = useRouter();
  const modeLayout = "light";
  const expand = "xl";
  return (
    <>
      <Navbar
        key={expand}
        fixed="top"
        variant={modeLayout}
        bg={modeLayout}
        expand={expand}
        className="mb-3 shadow-sm p-0"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <span className="text-success">Navbar Offcanvas</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  href="/"
                  className={`nav-link ${
                    router.pathname === ("/" || "/home") && "active"
                  }`}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/introduction"
                  className={`nav-link ${
                    router.pathname === "/introduction" && "active"
                  }`}
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/programs"
                  className={`nav-link ${
                    router.pathname === "/programs" && "active"
                  }`}
                >
                  Chương trình
                </Link>
                <Link
                  href="/contribution"
                  className={`nav-link ${
                    router.pathname === "/contribution" && "active"
                  }`}
                >
                  Đóng góp
                </Link>
                <Link
                  href="/financial-report"
                  className={`nav-link ${
                    router.pathname === "/financial-report" && "active"
                  }`}
                >
                  Báo cáo tài chính
                </Link>
                <Link
                  href="/news"
                  className={`nav-link ${
                    router.pathname === "/news" && "active"
                  }`}
                >
                  Tin tức
                </Link>
                <Link
                  href="/introduction"
                  className={`nav-link ${
                    router.pathname === "/programs" && "active"
                  }`}
                >
                  Liên hệ
                </Link>
                {/* <Nav.Link href="/">Trang chủ</Nav.Link>
                <Nav.Link href="/">Trang chủ</Nav.Link>
                <Nav.Link href="/introduction">Giới thiệu</Nav.Link>
                <Nav.Link href="#actiosdg">Chương trình</Nav.Link>
                <Nav.Link href="#actifosdg">Đóng góp</Nav.Link>
                <Nav.Link href="#actifdsgsdgosdg">Báo cáo tài chính</Nav.Link>
                <Nav.Link href="#actifossdgdsdg">Tin tức</Nav.Link>
                <Nav.Link href="#actifdsosdg">Liên hệ</Nav.Link> */}
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <div className="d-flex gap-2">
                <Button type="button" variant="success">
                  Register
                </Button>
                <Button type="button" variant="outline-success">
                  Log In
                </Button>
              </div>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
