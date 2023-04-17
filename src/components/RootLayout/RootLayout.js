import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import MainFooter from "../MainFooter/MainFooter";
import MainNavigation from "../MainNavigation/MainNavigation";
import { authActions } from "@/store/auth";

export default function RootLayout({ children }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.auth.userLogin);
  // get session handle
  useEffect(() => {
    if (!userLogin) {
      axios
        .get("/api/user/get-session")
        .then((response) => {
          dispatch(authActions.login(response.data.user));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userLogin]);
  //
  const [modalActive, setModalActive] = useState(null);
  // Register
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShowRegister() {
    setFullscreen("sm-down");
    setShow(true);
    setModalActive("register");
  }
  function onHide() {
    setShow(false);
    setModalActive(null);
  }
  // Login
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  function handleShowLogin() {
    setFullscreenLogin("sm-down");
    setShowLogin(true);
    setModalActive("login");
  }
  function onHideLogin() {
    setShowLogin(false);
    setModalActive(null);
  }
  // Switch Handle
  function switchHandle() {
    switch (modalActive) {
      case "register":
        onHide();
        handleShowLogin();
        break;
      case "login":
        onHideLogin();
        handleShowRegister();
        break;
    }
  }
  return (
    <div className="container-fluid p-0">
      <>
        <Register
          show={show}
          fullscreen={fullscreen}
          onHide={onHide}
          switchHandle={switchHandle}
        />
        <Login
          show={showLogin}
          fullscreen={fullscreenLogin}
          onHide={onHideLogin}
          switchHandle={switchHandle}
        />
        <MainNavigation
          handleShowLogin={handleShowLogin}
          handleShowRegister={handleShowRegister}
        />
        {children}
        <MainFooter />
      </>
    </div>
  );
}
