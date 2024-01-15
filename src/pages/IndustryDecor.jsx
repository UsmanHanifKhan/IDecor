import  { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/CommercialStyle.css';
import image1 from '../assets/images/Service/interior/img1.jpg'
import image2 from '../assets/images/Service/interior/img2.jpg'
import image3 from '../assets/images/Service/interior/img3.jpg'
import image4 from '../assets/images/Service/interior/img4.jpg'
import image5 from '../assets/images/Service/interior/img5.jpg'
import image6 from '../assets/images/Service/interior/img6.jpg'
import image7 from '../assets/images/Service/interior/img7.jpg'
import image8 from '../assets/images/Service/interior/img9.jpg'
import image9 from '../assets/images/Service/interior/img8.jpg'
import image10 from '../assets/images/Service/interior/img10.jpg'
import image11 from '../assets/images/Service/interior/img11.jpg'
import image12 from '../assets/images/Service/interior/img12.jpg'
import image13 from '../assets/images/Service/interior/img13.jpg'
import image14 from '../assets/images/Service/interior/img14.jpg'


import image15 from '../assets/images/Service/interior/img15.jpg'
import image16 from '../assets/images/Service/interior/img16.jpg'
import image17 from '../assets/images/Service/interior/img17.jpg'
import image18 from '../assets/images/Service/interior/img18.jpg'



import image19 from '../assets/images/Service/interior/img19.jpeg'
import image20 from '../assets/images/Service/interior/img20.jpeg'
import image21 from '../assets/images/Service/interior/img21.jpeg'
import image22 from '../assets/images/Service/interior/img22.jpeg'
import image23 from '../assets/images/Service/interior/img23.webp'
import image24 from '../assets/images/Service/interior/img24.jpeg'
import image25 from '../assets/images/Service/interior/img25.jpg'
import image26 from '../assets/images/Service/interior/img26.jpeg'

import '../components/Products.css'
const IndustryDecor = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  // Dummy data with 10 entries
  const projects = [
    { image: image1, title: "home", description: "Description for home", id: "1" },
    { image: image2, title: "office", description: "Description for office", id: "2" },
    { image: image3, title: "home", description: "Another description for home", id: '3' },
    { image: image4, title: "store", description: "Description for store", id: '4' },
    { image: image5, title: "office", description: "Another description for office", id: '5' },
    { image: image6, title: "home", description: "Yet another description for home", id: '6' },
    { image: image7, title: "store", description: "Another description for store", id: '7' },
    { image: image8, title: "office", description: "Yet another description for office", id: '8' },
    { image: image9, title: "home", description: "Additional description for home", id: '9' },
    { image: image10, title: "store", description: "Additional description for store", id: '10' },
    { image: image11, title: "store", description: "Another description for store", id: '11' },
    { image: image12, title: "bath", description: "Yet another description for bath", id: '12' },
    { image: image13, title: "home", description: "Additional description for home", id: '13' },
    { image: image14, title: "store", description: "Additional description for store", id: '14' },

    { image: image15, title: "office", description: "Additional description for office", id: '10' },
    { image: image16, title: "office", description: "Another description for store", id: '11' },
    { image: image17, title: "office", description: "Yet another description for bath", id: '12' },
    { image: image18, title: "office", description: "Additional description for home", id: '13' },

    
    { image: image19, title: "bath", description: "Another description for store", id: '11' },
    { image: image20, title: "bath", description: "Yet another description for bath", id: '12' },
    { image: image21, title: "bath", description: "Additional description for bath", id: '13' },
    { image: image22, title: "bath", description: "Additional description for bath", id: '14' },
    { image: image23, title: "bath", description: "Another description for bath", id: '11' },
    { image: image24, title: "bath", description: "Yet another description for bath", id: '12' },
    { image: image25, title: "bath", description: "Additional description for home", id: '13' },
    { image: image26, title: "bath", description: "Additional description for bath", id: '14' },
  ];

  const handleClick = (id) => {
    navigate(`/commercial-decor/${id}`);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.title === selectedCategory);

    const activeLinkStyle = {
      color: '#A78F30',  // Change this to your desired color
    };
  return (
    <>
       <nav className="navbar  navbar-expand-md navbar-light ">
       <div className="container-fluid d-flex border-bottom justify-content-center align-items-center">
         <div className="commericial d-flex flex-row flex-nowrap gap-3" style={{ height: '100%' , cursor:'pointer' }}>
         <p className="nav-link" style={selectedCategory === 'home' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('home')}>Homes</p>
            <p className="nav-link" style={selectedCategory === 'bath' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('bath')}>Kitchen</p>
            <p className="nav-link" style={selectedCategory === 'office' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('office')}>Office</p>
            <p className="nav-link" style={selectedCategory === 'store' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('store')}> Store </p>
     {/* Add more nav links as needed */}
         </div>
       </div>
     </nav>

      <Container  className='pt-5'>
        <Row className="justify-content-center">
          {filteredProjects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="product-card" onClick={() => handleClick(project.id)}>
                <Card.Img variant="top" src={project.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default IndustryDecor;
