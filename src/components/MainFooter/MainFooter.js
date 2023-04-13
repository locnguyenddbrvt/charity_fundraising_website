import { Col, Container, Row } from "react-bootstrap";

export default function MainFooter() {
  return (
    <footer className={`container-fluid footer p-0`}>
      <Container className="pt-5 text-white">
        <Row className="mb-5 gap-0">
          <Col md={3} className="">
            <h4 className="mb-4">Về chúng tôi</h4>
            <p className="text-justify">
              Quỹ Từ thiện Cây Xanh được thành lập theo Quyết định số: 24/QĐ-BNV
              ngày 5 tháng 1 năm 2018. Quỹ Bông Sen là phiên bản mở rộng của Quỹ
              Từ thiện Tình Thương thành phố Hồ Chí Minh. Quỹ có phạm vi hoạt
              động toàn quốc.
            </p>
          </Col>
          <Col md={3} className="text-center text-justify text-md-start">
            <h4 className="mb-4">Hướng dẫn về giới thiệu</h4>
            <ul>
              <li>Hướng dẫn đóng góp</li>
              <li>Giới thiệu</li>
              <li>Tổ chức</li>
              <li>Lịch sử</li>
              <li>Quy tắc cộng tác viên</li>
            </ul>
          </Col>
          <Col md={3} className="text-center text-md-start">
            <h4 className="mb-4">Chương trình</h4>
            <ul>
              <li>Trợ giúp y tế</li>
              <li>Trợ giúp suất ăn giá rẻ</li>
              <li>Dự án xây dựng</li>
              <li>Cứu trợ khẩn cấp</li>
              <li>Giáo dục và dạy nghề</li>
            </ul>
          </Col>
          <Col md={3} className="text-center text-md-start">
            <h4 className="mb-4">Liên hệ</h4>
            <ul>
              <li>
                Tầng 5, số 7 – 9 – 11 Mai Thị Lựu, P. Đa Kao, Quận 1, TP.Hồ Chí
                Minh.{" "}
              </li>
              <li>Hotline : (84-028) 39107612 – Ext.227</li>
              <li>Fax : (84-028) 3910 7614</li>
              <li>Email: contact@quybongsen.org</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div
        className="container-fluid p-0"
        style={{ backgroundColor: "#02735e" }}
      >
        <Container className="text-white d-flex justify-content-between">
          <p>
            &copy; 2023 Quỹ từ thiện Cây Xanh. . All rights reserved. Serviced
            by LocNguyen.
          </p>
          <p>sdgdxg</p>
        </Container>
      </div>
      {/* <Container style={{ backgroundColor: "#02735e", margin: "0px" }}>
          {" "}
          <p>
            &copy; 2023 Quỹ từ thiện Cây Xanh. . All rights reserved. Serviced
            by LocNguyen.
          </p>
          <p>sdgdxg</p>
        </Container> */}
    </footer>
  );
}
