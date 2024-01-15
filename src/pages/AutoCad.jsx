import  { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/CommercialStyle.css';
import image1 from '../assets/images/Service/autocad/image1.jpg';
import image2 from '../assets/images/Service/autocad/image2.jpg';
import image3 from '../assets/images/Service/autocad/image3.jpg';
import image4 from '../assets/images/Service/autocad/image4.jpg';
import image5 from '../assets/images/Service/autocad/image5.jpg';
import image6 from '../assets/images/Service/autocad/image6.jpg';
import image7 from '../assets/images/Service/autocad/image7.jpg';
import image8 from '../assets/images/Service/autocad/image8.jpg';
import image9 from '../assets/images/Service/autocad/image9.jpg';
import image10 from '../assets/images/Service/autocad/image10.jpg';
import image11 from '../assets/images/Service/autocad/image11.jpg';
import image12 from '../assets/images/Service/autocad/image12.jpg';

import image13 from '../assets/images/Service/autocadlt/image1.jpeg';
import image14 from '../assets/images/Service/autocadlt/image2.jpeg';
import image15 from '../assets/images/Service/autocadlt/image3.jpeg';
import image16 from '../assets/images/Service/autocadlt/image4.jpg';
import image17 from '../assets/images/Service/autocadlt/image5.png';
import image18 from '../assets/images/Service/autocadlt/image6.png';
import image19 from '../assets/images/Service/autocadlt/image7.jpeg';
import image20 from '../assets/images/Service/autocadlt/image8.jpeg';
import image21 from '../assets/images/Service/autocadlt/image9.png';
import image22 from '../assets/images/Service/autocadlt/image5.png';


import image23 from '../assets/images/Service/autocad2d/img1.jpeg';
import image24 from '../assets/images/Service/autocad2d/img2.jpeg';
import image25 from '../assets/images/Service/autocad2d/img3.jpeg';
import image26 from '../assets/images/Service/autocad2d/img4.jpg';
import image27 from '../assets/images/Service/autocad2d/img5.jpeg';
import image28 from '../assets/images/Service/autocad2d/img6.jpeg';
import image29 from '../assets/images/Service/autocadlt/image9.png';


import '../components/Products.css'
import { FaRegShareFromSquare } from "react-icons/fa6";
const AutoCad = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('autocad'); 

  // Dummy data with 10 entries
  const projects = [
    { image: image1, title: "autocad", description: "Description for Furniture", id: "1" },
    { image: image2, title: "autocad", description: "Description for autocad", id: "2" },
    { image: image3, title: "autocad", description: "Another description for autocad", id: '3' },
    { image: image4, title: "autocad", description: "Description for autocad", id: '4' },
    { image: image5, title: "autocad", description: "Another description for autocad", id: '5' },
    { image: image6, title: "autocad", description: "Yet another description for autocad", id: '6' },
    { image: image7, title: "autocad", description: "Another description for autocad", id: '7' },
    { image: image8, title: "autocad", description: "Yet another description for autocad", id: '8' },
    { image: image9, title: "autocad", description: "Additional description for autocad", id: '9' },
    { image: image10, title: "autocad", description: "Additional description for autocad", id: '10' },
    { image: image11, title: "autocad", description: "Additional description for autocad", id: '11' },
    { image: image12, title: "autocad", description: "Additional description for autocad", id: '12' },

    { image: image13, title: "3d", description: "Description for Furniture", id: "13" },
    { image: image14, title: "3d", description: "Description for 3d", id: "14" },
    { image: image15, title: "3d", description: "Another description for 3d", id: '15' },
    { image: image16, title: "3d", description: "Description for 3d", id: '16' },
    { image: image17, title: "3d", description: "Description for 3d", id: "17" },
    { image: image18, title: "3d", description: "Another description for 3d", id: '18' },
    { image: image19, title: "3d", description: "Description for 3d", id: '19' },
    { image: image20, title: "3d", description: "Description for 3d", id: '20' },
    { image: image21, title: "3d", description: "Description for 3d", id: '21' },
    { image: image22, title: "3d", description: "Description for 3d", id: '22' },

    { image: image23, title: "2d", description: "Description for Furniture", id: "13" },
    { image: image24, title: "2d", description: "Description for 2d", id: "14" },
    { image: image25, title: "2d", description: "Another description for 2d", id: '15' },
    { image: image26, title: "2d", description: "Description for 2d", id: '16' },
    { image: image27, title: "2d", description: "Description for 2d", id: "17" },
    { image: image28, title: "2d", description: "Description for 3d", id: '22' },
    { image: image29, title: "2d", description: "Another description for 2d", id: '18' },



  ];

  const handleClick = (id) => {
    navigate(`/commercial-decor/${id}`);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredProjects = selectedCategory === 'autocad'
  ?  projects.filter(project => project.title.toLowerCase().includes(selectedCategory.toLowerCase())) : projects.filter(project => project.title.toLowerCase().includes(selectedCategory.toLowerCase())) ;

  const activeLinkStyle = {
    color: '#A78F30',  // Change this to your desired color
  };
  return (
    <>
      <nav className="navbar  navbar-expand-md navbar-light ">
       <div className="container-fluid d-flex border-bottom justify-content-center align-items-center">
         <div className="commericial d-flex flex-row flex-nowrap gap-3" style={{ height: '100%' , cursor:'pointer' }}>
         <p className="nav-link" style={selectedCategory === 'autocad' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('autocad')}>AutoCAD</p>
            <p className="nav-link" style={selectedCategory === '3d' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('3d')}>AutoCAD Map 3D</p>
            <p className="nav-link" style={selectedCategory === '2d' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('2d')}>TAutoCAD Map 2D</p>
     {/* Add more nav links as needed */}
         </div>
       </div>
     </nav>

      <Container  className='pt-5'>
        {/* <Row className="justify-content-center">
          {filteredProjects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="product-card  bg-black border-0" onClick={() => handleClick(project.id)}>
                <Card.Img variant="top" src={project.image}  />
                <Card.Body>
                  <Card.Title className='d-flex justify-content-center align-items-center fs-4' style={{ color: '#A78F30' }} >{project.title}<span className='ps-4'><FaRegShareFromSquare /></span></Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
        
        <Row className="justify-content-center  ">
        {filteredProjects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <div className="product-card border shadow">
              <Card.Img variant="top" src={project.image} className="card-img-top" onClick={() => handleClick(project.id)} />
              <div className="card-overlay">
                <h4 className='d-flex flex-column justify-content-center align-items-center' >{project.title} <span className='fs-1' style={{cursor:'pointer'}} ><FaRegShareFromSquare/></span> </h4>
                {/* <p className='text-white' >{project.description}</p> */}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
      
    </>
  );
};

export default AutoCad;
