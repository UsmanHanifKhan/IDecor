
import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../assets/profile3.jpeg';
import image2 from '../assets/profile1.jpeg';
import image3 from '../assets/profile.jpeg';
import image4 from '../assets/profile4.jpeg';
import image5 from '../assets/profile2.jpeg';
import '../assets/css/Ourteam.css'
const OurTeam = () => {
    const projects = [
        { image: image1, title: "MD Arham", description: "Description for Project 1" },
        { image: image2, title: "Ahmed ", description: "Description for Project 2" },
        { image: image3, title: "Ali Akbar", description: "Description for Project 3" },
        { image: image4, title: "Jhone", description: "Description for Project 2" },
        { image: image5, title: "Kamran", description: "Description for Project 3" },
        { image: image1, title: "Noor", description: "Description for Project 1" },
      ];
    
  return (
    <Container className='py-5'>
        <h3 style={{color:'#A78F30'}}>MEET OUR DESIGNER</h3>
        <h1>OUR PROFESSIONAL</h1>
        <p>Cras sagittis justo enim, eu sagittis purus molestie vitae. Vestibulum porttitor in massa feugiat blandit. Nunc ac viverra magna. Etiam dictum pellentesque libero a porttitor. Vestibulum dapibus, metus a molestie tincidunt, tortor nisl mollis mi, vitae commodo lorem mi auctor tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

        <Row className="justify-content-center pt-5">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <div className="product-card">
              <Card.Img variant="top" src={project.image} className="card-img-top" />
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