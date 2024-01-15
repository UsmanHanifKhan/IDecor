import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook ,  FaLinkedin ,FaSquareTwitter , FaSquareInstagram} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <Container fluid className="bg-black py-5 pb-4 ">
        <Container>
          <Row className="justify-content-between">
            <Col md={6}>
              <img
                src="https://idecor.ie/wp-content/uploads/elementor/thumbs/ID_LOGO_TRANS_WHITE-p933ew0ztoc4cshqkdgvjr4zom4zoyn3ppv6twgxxs.png"
                width={70}
                alt=""
                className="mb-3"
              />
              <p style={{color:'#dede'}}>
              At iDecor, we’ll help you through every step of the interior design process.<br/> Our team of industry professionals provides our clients with the expertise to know they are in good hands.
              </p>
              <div className="d-flex mt-2">
                <span className="me-3 bg-black text-white fs-4"><FaFacebook /></span>
                <span className="me-3 text-white fs-4"><FaLinkedin /></span>
                <span className="me-3 text-white fs-4"><FaSquareTwitter/></span>
                <span className="me-3 text-white fs-4"><FaSquareInstagram/></span>
              </div>
            </Col>
            <Col md={4} className="mt-md-0 mt-4 d-flex flex-column ">
              <p className="text-decoration-none fs-4" >Quick Links</p>
              <Link className="text-decoration-none" to="/">Home</Link>
              <Link className="text-decoration-none" to="/about">About</Link>
              <Link className="text-decoration-none" to="/autocad">Service</Link>
              <Link className="text-decoration-none" to="/blog">Blog</Link>
              <Link className="text-decoration-none" to="/contact">Contact</Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="w-100 py-2 text-center" style={{ background: "#A78F30", color: "#fff" }}>
        <p className="my-1 fs-6">©2024 iDecor All rights reserved | Designed by Tech Zicon</p>
      </div>
    </>
  );
};

export default Footer;
