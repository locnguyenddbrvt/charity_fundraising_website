import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./Auth.module.css";

export default function Register({ show, fullscreen, onHide, switchHandle }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [showOverplayEmail, setShowOverplayEmail] = useState(false);
  const [showOverplayFullName, setShowOverplayFullName] = useState(false);
  const [showOverplayPassword, setShowOverplayPassword] = useState(false);

  const changeEmailHandle = (e) => {
    setEnteredEmail(e.target.value);
  };
  const changePasswordHandle = (e) => {
    setEnteredPassword(e.target.value);
  };
  const changeFullNameHandle = (e) => {
    setEnteredFullName(e.target.value);
  };
  const outFocusEmail = (e) => {
    if (!isEmail(enteredEmail)) {
      setShowOverplayEmail(true);
    } else {
      setShowOverplayEmail(false);
    }
  };
  const outFocusFullName = () => {
    if (enteredFullName.trim().length === 0) {
      setShowOverplayFullName(true);
    } else {
      setShowOverplayFullName(false);
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
    if (
      !(
        !isEmail(enteredEmail) ||
        enteredPassword.trim().length <= 8 ||
        enteredFullName.trim().length === 0
      )
    ) {
      const formData = {
        email: enteredEmail,
        fullName: enteredFullName,
        password: enteredPassword,
      };
      console.log(formData);
      axios
        .post("/api/user/create-user", formData)
        .then((response) => {
          setEnteredEmail("");
          setEnteredFullName("");
          setEnteredPassword("");
          switchHandle();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Modal
        className="shadow"
        show={show}
        fullscreen={fullscreen}
        onHide={() => {
          setEnteredEmail("");
          setEnteredFullName("");
          setEnteredPassword("");
          onHide();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`${styles["modal-auth"]} d-flex flex-column align-items-center`}
        >
          <img src="/logo.png" alt="logo" width={80} />
          <h4>Chào mừng đến với quỹ</h4>
          <h4 className="mb-3">Cây Xanh</h4>
          <p>Trở thành thành viên của chúng tôi</p>
          <form className={`${styles.form}`} onSubmit={submitHandle}>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="text"
                placeholder="Example@gmail.com"
                onChange={changeEmailHandle}
                value={enteredEmail}
                onBlur={() => outFocusEmail()}
              />
              {showOverplayEmail && (
                <p className={`${styles.overplay}`}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  Có vẻ là email không hợp lệ
                </p>
              )}
            </div>
            <div>
              <label>Họ và tên</label>
              <input
                name="fullName"
                type="text"
                placeholder="Ho va ten"
                onChange={changeFullNameHandle}
                value={enteredFullName}
                onBlur={outFocusFullName}
              />
              {showOverplayFullName && (
                <p className={`${styles.overplay}`}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  Họ và tên không hợp lệ
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
            <Button
              className={`${styles["submit-btn"]}`}
              type="submit"
              variant="success"
            >
              Đăng ký
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
            <p>Bằng cách tiếp tục, bạn đồng ý với</p>
            <p>
              <strong>Điều khoản dịch vụ</strong> Mở một tab mới của Cây Xanh và
              xác nhận rằng bạn đã đọc{" "}
              <strong>Chính sách quyền riêng tư</strong> của chúng tôi.
            </p>
            <p>
              <strong>Thông báo khi thu thập.</strong>
            </p>
            <p className="mt-3 mb-4">
              Bạn đã là thành viên?{" "}
              <strong onClick={() => switchHandle()}>Đăng nhập</strong>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
