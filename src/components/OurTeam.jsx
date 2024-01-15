
import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../assets/images/team1.jpg';
import image2 from '../assets/images/team2.jpg';
import image3 from '../assets/images/team3.jpg';
import '../assets/css/Ourteam.css'
const OurTeam = () => {
    const projects = [
        { image: image1, title: "MD Arham", description: "Business Developer" },
        { image: image2, title: "Mr. Javed ", description: "AutoCad Designer" },
        { image: image3, title: "Mr. Mateen", description: "Interior & Exterior Designer" }
      ];
    
  return (
    <Container className='py-5'>
        <h3 style={{color:'#A78F30'}}>MEET OUR DESIGNER</h3>
        <h1>OUR PROFESSIONAL</h1>
        <p>Cras sagittis justo enim, eu sagittis purus molestie vitae. Vestibulum porttitor in massa feugiat blandit. Nunc ac viverra magna. Etiam dictum pellentesque libero a porttitor. Vestibulum dapibus, metus a molestie tincidunt, tortor nisl mollis mi, vitae commodo lorem mi auctor tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

        <Row className="justify-content-center pt-5">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <div className="product-card" >
              <Card.Img variant="top" src={project.image} style={{height:'25rem'}} className="card-img-top" />
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