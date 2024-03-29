import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../assets/images/Arham.jpg';
import image2 from '../assets/images/team2.jpg';
import image3 from '../assets/images/team3.jpg';
import image4 from '../assets/images/team.jpg'
import image5 from '../assets/images/team4.jpg'
import '../assets/css/Ourteam.css'
const OurTeam = () => {
  const projects = [
    { image: image1, title: "MD Arham ", description: " CEO & Business Developer" },
    { image: image4, title: "M Imran", description: "Marketing Manager" },
    { image: image3, title: "Mr. Mateen", description: "Interior & Exterior Designer" },
    { image: image2, title: "Mr. Javed ", description: "AutoCad Designer" },
    { image: image5, title: "Waleed", description: "Event Decor" },
  ];

  return (
    <Container className='py-5'>
      <h3 style={{ color: '#A78F30' }}>MEET OUR DESIGNER</h3>
      <h1>OUR PROFESSIONAL</h1>
      <p>Step into a world of design excellence with IDecor. Our expertise in AutoCAD, interior and exterior design, and stall decoration is your gateway to transforming spaces with flair. At IDecor, we blend creativity with precision, crafting environments that resonate with style and functionality. Let us redefine your surroundings – contact IDecor for a seamless fusion of innovation and elegance.</p>

      <Row className="justify-content-center pt-5">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <div className="product-card" >
              <Card.Img variant="top" src={project.image} style={{ height: '30rem' }} className="card-img-top" />
              <div className="card-overlay">
                <h4 >{project.title}</h4>
                <p className='text-white' >{project.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OurTeam