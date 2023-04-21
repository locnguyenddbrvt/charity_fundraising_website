import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import styles from "./Auth.module.css";

export default function Login({ show, fullscreen, onHide, switchHandle }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showOverplayEmail, setShowOverplayEmail] = useState(false);
  const [showOverplayPassword, setShowOverplayPassword] = useState(false);
  const [validMessage, setValidMessage] = useState(null);
  const dispatch = useDispatch();

  const changeEmailHandle = (e) => {
    setEnteredEmail(e.target.value);
  };
  const changePasswordHandle = (e) => {
    setEnteredPassword(e.target.value);
  };
  const outFocusEmail = (e) => {
    if (!isEmail(enteredEmail)) {
      setShowOverplayEmail(true);
    } else {
      setShowOverplayEmail(false);
    }
  };
  const outFocusPassword = () => {
    if (enteredPassword.trim().length <= 8) {
      setShowOverplayPassword(true);
    } else {
      setShowOverplayPassword(false);
    }
  };
  function isEmail(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  }

  const submitHandle = (e) => {
    e.preventDefault();
    if (!(!isEmail(enteredEmail) || enteredPassword.trim().length <= 8)) {
      const formData = {
        email: enteredEmail,
        password: enteredPassword,
      };
      console.log(formData);
      axios
        .post("/api/user/login", formData)
        .then((response) => {
          setEnteredEmail("");
          setEnteredPassword("");
          onHide();
          dispatch(authActions.login(response.data.user));
        })
        .catch((err) => {
          setValidMessage(err.response.data.message);
        });
    }
  };

  return (
    <>
      <Modal
        className="shadow"
        show={show}
        fullscreen={fullscreen}
        onHide={() => onHide()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`${styles["modal-auth"]} d-flex flex-column align-items-center`}
        >
          <img src="/logo.png" alt="logo" width={80} />
          <h4>Chào mừng đến với quỹ</h4>
          <h4 className="mb-3">Cây Xanh</h4>
          <form className={`${styles.form}`} onSubmit={submitHandle}>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="text"
                placeholder="Example@gmail.com"
                onChange={changeEmailHandle}
                value={enteredEmail}
                onBlur={outFocusEmail}
              />
              {showOverplayEmail && (
                <p className={`${styles.overplay}`}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  Có vẻ là email không hợp lệ
                </p>
              )}
            </div>
            <div>
              <label>Mật khẩu</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={changePasswordHandle}
                value={enteredPassword}
                onBlur={() => outFocusPassword()}
              />
              {showOverplayPassword && (
                <p className={`${styles.overplay}`}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  Mật khẩu cần hơn 8 ký tự
                </p>
              )}
            </div>
            <p>
              <strong>Quên mặt khẩu?</strong>
            </p>
            {validMessage && (
              <p className={`${styles.overplay}`}>
                <FontAwesomeIcon icon={faCircleExclamation} />
                {validMessage}
              </p>
            )}
            <Button
              className={`${styles["submit-btn"]}`}
              type="submit"
              variant="success"
            >
              Đăng nhập
            </Button>
          </form>
          <p>Hoặc tiếp tục với</p>
          <div className={`${styles["login-3rd-btns"]}`}>
            <Button className={`d-flex`}>
              <FontAwesomeIcon icon={faFacebook} />
              <span>Tiếp tục với Facebook</span>
            </Button>
            <Button
              className={`d-flex`}
              variant="light"
              style={{ border: "1px solid #ddd" }}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <span>Tiếp tục với Google</span>
            </Button>
            <div id="signInDiv">gd</div>
            {/* <FacebookLogin
              appId="246513227903376"
              cssClass={styles["fbLoginBtn"]}
              autoLoad={false}
              fields="name,email,picture"
              onClick={() => {}}
              callback={responseFacebook}
              icon={<FontAwesomeIcon icon={faFacebook} />}
            /> */}
            {/* <GoogleLogin
              clientId="661446037204-18vco7nln82nk8ftnj04d9vqkbgv3veg.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
            <p>Bằng cách tiếp tục, bạn đồng ý với</p>
            <p>
              <strong>Điều khoản dịch vụ</strong> Mở một tab mới của Cây Xanh và
              xác nhận rằng bạn đã đọc{" "}
              <strong>Chính sách quyền riêng tư</strong> của chúng tôi.
            </p>
            <p>
              <strong
                style={{ borderBottom: "1px solid #ddd" }}
                className="pb-2"
              >
                Thông báo khi thu thập.
              </strong>
            </p>
            <p className="mt-3 mb-4">
              Bạn chưa có tài khoản?
              <strong onClick={() => switchHandle()}> Đăng ký</strong>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
