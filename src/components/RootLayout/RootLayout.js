import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import MainFooter from "../MainFooter/MainFooter";
import MainNavigation from "../MainNavigation/MainNavigation";
import { authActions } from "@/store/auth";

export default function RootLayout({ children }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.auth.userLogin);
  const [modalActive, setModalActive] = useState(null);
  const modalActiveRef = useRef(null);
  // Render Google Btn
  useEffect(() => {
    modalActiveRef.current = modalActive;
    if (modalActive === "login") {
      const btnGoogleLogin = document.getElementById("signInDiv");
      google.accounts.id.renderButton(btnGoogleLogin, {
        theme: "outline",
        size: "large",
        text: "continue_with",
        width: 280,
      });
    }
    if (modalActive === "register") {
      const btnGoogleSignUp = document.getElementById("btnGoogleSignup");
      google.accounts.id.renderButton(btnGoogleSignUp, {
        theme: "outline",
        size: "large",
        text: "continue_with",
        width: 280,
      });
    }
  }, [modalActive]);
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
    google.accounts.id.initialize({
      client_id:
        "661446037204-18vco7nln82nk8ftnj04d9vqkbgv3veg.apps.googleusercontent.com",
      callback: responseGoogle,
      native_callback: handleNavtive,
      context: "signin",
    });
    google.accounts.id.prompt();
  }, [userLogin]);
  const handleNavtive = (res) => {
    console.log(res);
  };
  const responseGoogle = (response) => {
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    console.log(modalActiveRef.current);
    switch (modalActiveRef.current) {
      case null:
      case "login":
        console.log("login");
        axios
          .post("/api/user/login", {
            email: userObject.email,
            password: userObject.sub,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "register":
        console.log("register");
        axios
          .post("/api/user/create-user", {
            email: userObject.email,
            fullName: userObject.name,
            password: userObject.sub,
          })
          .then((response) => {
            console.log(response);
            switchHandle();
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        throw new Error("Some thing went wrong!!");
    }
  };

  //

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
