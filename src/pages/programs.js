import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlRice,
  faGears,
  faPersonDigging,
  faSuitcaseMedical,
  faTruckMedical,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Programs.module.css";
import Suat_an_gia_re from "@/components/programs/suat_an_gia_re";
import Tro_giup_y_te from "@/components/programs/tro_giup_y_te";
import Cuu_tro_khan_cap from "@/components/programs/cuu_tro_khan_cap";
import Giao_duc_va_day_nghe from "@/components/programs/giao_duc_va_day_nghe";
import Xay_dung from "@/components/programs/xay_dung";
import Phuong_tien_muu_sinh from "@/components/programs/phuong_tien_muu_sinh";
import PageLayout from "@/components/PageLayout/PageLayout";

export default function Programs() {
  const [contentDisplay, setContentDisplay] = useState(<Suat_an_gia_re />);
  return (
    <>
      <Head>
        <title>Chương trình</title>
        <meta name="description" content="Quỹ từ thiện cây xanh" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageLayout title={"Chương trình"}>
        <Nav
          defaultActiveKey="suat_an_gia_re"
          as="ul"
          onSelect={(selectedKey) => {
            // console.log(`selected ${selectedKey}`);
            switch (selectedKey) {
              case "suat_an_gia_re":
                setContentDisplay(<Suat_an_gia_re />);
                break;
              case "tro_giup_y_te":
                setContentDisplay(<Tro_giup_y_te />);
                break;
              case "cuu_tro_khan_cap":
                setContentDisplay(<Cuu_tro_khan_cap />);
                break;
              case "giao_duc_va_day_nghe":
                setContentDisplay(<Giao_duc_va_day_nghe />);
                break;
              case "xay_dung":
                setContentDisplay(<Xay_dung />);
                break;
              case "phuong_tien_muu_sinh":
                setContentDisplay(<Phuong_tien_muu_sinh />);
                break;
            }
          }}
          className={`row justify-content-center mb-3 ${styles.nav}`}
        >
          <Nav.Item className="col-md-auto" as="li">
            <Nav.Link eventKey="suat_an_gia_re">
              <h4 className="text-green-800">
                <FontAwesomeIcon icon={faBowlRice} />
                Suất ăn giá rẻ
              </h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col-md-2" as="li">
            <Nav.Link eventKey="tro_giup_y_te">
              <h4 className="text-green-800">
                <FontAwesomeIcon icon={faSuitcaseMedical} />
                Trợ giúp y tế
              </h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col-md-2" as="li">
            <Nav.Link eventKey="cuu_tro_khan_cap">
              <h4 className="text-green-800">
                {" "}
                <FontAwesomeIcon icon={faTruckMedical} />
                Cứu trợ khẩn cấp
              </h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col" as="li">
            <Nav.Link eventKey="giao_duc_va_day_nghe">
              <h4 className="text-green-800">
                {" "}
                <FontAwesomeIcon icon={faUserGraduate} />
                Giáo dục và dạy nghề
              </h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col-md-auto" as="li">
            <Nav.Link eventKey="xay_dung">
              <h4 className="text-green-800">
                <FontAwesomeIcon icon={faPersonDigging} />
                Xây dựng
              </h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col-md-auto" as="li">
            <Nav.Link eventKey="phuong_tien_muu_sinh">
              <h4 className="text-green-800">
                {" "}
                <FontAwesomeIcon icon={faGears} />
                Phương tiện mưu sinh
              </h4>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {contentDisplay}
      </PageLayout>
    </>
  );
}
