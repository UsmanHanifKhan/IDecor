
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNavbar.css'
function HomeNavbar() {

  const [activeLink, setActiveLink] = useState('Home'); // Default active link

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" style={{ background: '#000001', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container >
        <Navbar.Brand href="#"><img src="https://idecor.ie/wp-content/uploads/elementor/thumbs/ID_LOGO_TRANS_WHITE-p933ew0ztoc4cshqkdgvjr4zom4zoyn3ppv6twgxxs.png" width={70} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-navbar-toggler bg-white " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-auto my-2 my-lg-0 "
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1 active"
              className={activeLink === 'Home' ? 'active' : ''}
              onClick={() => handleNavClick('Home')}><NavLink className='text-decoration-none fw-medium ' style={{ color: '#dddd' }} to={'/'}>Home</NavLink></Nav.Link>

            <NavDropdown data-bs-theme="dark" title={<span className='fw-medium' style={{ color: '#dddd' }} >Service</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='border-bottom' style={{ backgroundColor: 'transparent' }} ><NavLink className='text-decoration-none text-secondary' to={'/autocad'}>Auto Cad</NavLink> </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='border-bottom' style={{ backgroundColor: 'transparent' }}><NavLink className='text-decoration-none text-secondary' to={'/interiordesign'}>Interior Design</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='border-bottom' style={{ backgroundColor: 'transparent' }}><NavLink className='text-decoration-none text-secondary' to={'/event-decor'}>Event Decoration</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action3" style={{ backgroundColor: 'transparent' }} >Installation</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link
              className={activeLink === 'About' ? 'active-link' : ''}
              onClick={() => handleNavClick('About')}
            ><NavLink className='text-decoration-none fw-medium ' style={{ color: '#dddd' }} to={'/about'}>About Us</NavLink></Nav.Link>
            <Nav.Link
              className={activeLink === 'About' ? 'active-link' : ''}
              onClick={() => handleNavClick('About')}
            ><NavLink className='text-decoration-none fw-medium' style={{ color: '#dddd' }} to={'/blog'}> Blog</NavLink></Nav.Link>

            <Nav.Link
              className={activeLink === 'About' ? 'active-link' : ''}
              onClick={() => handleNavClick('About')}
            ><NavLink className='text-decoration-none fw-medium' style={{ color: '#dddd' }} to={'/contact'}>Contact Us</NavLink></Nav.Link>

          </Nav>
          <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}>Need Help Finding A Venue?</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;