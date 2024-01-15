import  { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/CommercialStyle.css';
import image1 from '../assets/image.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import '../components/Products.css'
const AutoCad = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  // Dummy data with 10 entries
  const projects = [
    { image: image1, title: "Furniture", description: "Description for Furniture", id: "1" },
    { image: image2, title: "Table", description: "Description for Table", id: "2" },
    { image: image3, title: "Furniture", description: "Another description for Furniture", id: '3' },
    { image: image2, title: "Store", description: "Description for Store", id: '4' },
    { image: image3, title: "Table", description: "Another description for Table", id: '5' },
    { image: image1, title: "Furniture", description: "Yet another description for Furniture", id: '6' },
    { image: image2, title: "Store", description: "Another description for Store", id: '7' },
    { image: image3, title: "Table", description: "Yet another description for Table", id: '8' },
    { image: image1, title: "Furniture", description: "Additional description for Furniture", id: '9' },
    { image: image2, title: "Store", description: "Additional description for Store", id: '10' },
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

  return (
    <>
      <nav className="navbar  navbar-expand-md navbar-light bg-light">
       <div className="container-fluid d-flex border-bottom border-top justify-content-center align-items-center">
         <div className="commericial d-flex flex-row flex-nowrap  gap-3" style={{ height: '100%' }}>
         <p className="nav-link" onClick={() => handleCategoryClick('All')}>Upto 70% Off</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Furniture')}>Furniture</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Table')}>Table</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Store')}>Store</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Example')}>Example</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Example1')}>Example1</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Example2')}>Example2</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Example3')}>Example3</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Example4')}>Example4</p>
            <p className="nav-link" onClick={() => handleCategoryClick('Example5')}>Example5</p>
     {/* Add more nav links as needed */}
         </div>
       </div>
     </nav>

      <Container  className='pt-5'>
        <Row className="justify-content-center">
          {filteredProjects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="product-card" onClick={() => handleClick(project.id)}>
                <Card.Img variant="top" src={project.image}  />
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

export default AutoCad;
