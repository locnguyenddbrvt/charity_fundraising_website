import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useRouter } from "next/router";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./MainNavigation.module.css";
import { authActions } from "@/store/auth";
import axios from "axios";

export default function MainNavigation({
  handleShowRegister,
  handleShowLogin,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const modeLayout = "light";
  const expand = "xl";
  const userLogin = useSelector((state) => state.auth.userLogin);

  const logoutHandle = () => {
    axios
      .post("/api/user/logout")
      .then((response) => {
        dispatch(authActions.logout());
      })
      .catch((err) => console.log(err));
  };

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
                  href="/contact"
                  className={`nav-link ${
                    router.pathname === "/contact" && "active"
                  }`}
                >
                  Liên hệ
                </Link>
              </Nav>
              {userLogin ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {userLogin.email}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${styles["dropdown"]}`}>
                    <Dropdown.Item
                      className={`${styles["dropdown-el"]}`}
                      href="#/action-1"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      Thông tin tài khoản
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={`${styles["dropdown-el"]}`}
                      href="#/action-2"
                    >
                      <FontAwesomeIcon icon={faGear} />
                      Cài đặt
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={`${styles["dropdown-el"]}`}
                      onClick={logoutHandle}
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      Đăng xuất
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div className="d-flex gap-2">
                  <Button
                    type="button"
                    variant="success"
                    onClick={() => handleShowRegister()}
                  >
                    Register
                  </Button>
                  <Button
                    type="button"
                    variant="outline-success"
                    onClick={() => handleShowLogin()}
                  >
                    Log In
                  </Button>
                </div>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
