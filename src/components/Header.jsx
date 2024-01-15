import { FaFacebook,FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap';
const Header = () => {
  return (
    <div className="bg-dark text-light py-2 border-bottom border-secondary">
      <Container className=''>
        <Row>
        <Col xs={12} md={6} className="d-flex align-items-center gap-3">
            <span><span style={{color:'#e4bb7d' }}><FaPhone/></span> +92 323 2147623</span>
            <span>
            <span style={{color:'#e4bb7d' , fontSize:'18px' }}><MdMail/></span> IDecor@gmail.com</span>
          </Col>
          <Col xs={12} md={3} className="d-flex  align-items-center gap-2 pt-2 pb-2">
            <a href="#" className='d-flex justify-content-center align-items-center'><FaFacebook className="text-light" /></a>
            <a href="#" className='d-flex justify-content-center align-items-center'><FaTwitter className="text-light" /></a>
            <a href="#" className='d-flex justify-content-center align-items-center'><FaLinkedin className="text-light" /></a>
          </Col>
          <Col xs={12} md={3} className="d-flex  justify-content-center md:justify-content-end ">
            <button className="btn btn-outline-light" style={{ fontSize: '10px' }}>Need Help Finding A Venue?</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
