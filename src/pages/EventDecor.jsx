import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/CommercialStyle.css';
import image1 from '../assets/images/Service/event/img.jpeg'
import image2 from '../assets/images/Service/event/img10.jpeg'
import image3 from '../assets/images/Service/event/img1.jpeg'
import image4 from '../assets/images/Service/event/img2.jpg'
import image5 from '../assets/images/Service/event/img4.jpeg'
import image6 from '../assets/images/Service/event/img3.jpeg'
import image7 from '../assets/images/Service/event/img6.jpeg'
import image8 from '../assets/images/Service/event/img5.jpeg'
import image9 from '../assets/images/Service/event/img8.jpeg'
import image10 from '../assets/images/Service/event/img7.jpg'
import image11 from '../assets/images/Service/event/img9.jpeg'


import '../components/Products.css'
const EventDecor = () => {
  const navigate = useNavigate();

  // Dummy data with 11 entries
  const projects = [
    { image: image1, title: "Wedding Ceremony", description: "Celebrate the union of two souls with a memorable wedding ceremony, filled with love, joy, and special moments.", id: "1" },
    { image: image2, title: "Charity Gala", description: "Make a positive impact by organizing a charity gala, raising funds for a worthy cause through auctions, donations, and awareness.", id: "2" },
    { image: image3, title: "Friend's Party", description: "Gather your closest pals for a lively friend's party, where laughter, good vibes, and shared memories take the spotlight. Enjoy a night of camaraderie, music, and fun as you celebrate the joy of friendship in a vibrant and welcoming atmosphere.", id: '3' },
    { image: image4, title: "Corporate Conference", description: "Host a professional gathering, bringing together industry leaders and experts for insightful discussions and networking opportunities.", id: '4' },
    { image: image5, title: "Office Party Experience", description: "Transform your workplace into a festive haven with office party decor that blends professional sophistication with celebratory flair. Incorporate themed decorations, stylish centerpieces, and vibrant accents to create an atmosphere that encourages camaraderie and relaxation among colleagues. Elevate the office ambiance for a memorable and enjoyable celebration", id: '5' },
    { image: image6, title: "home", description: "Yet another description for home", id: '6' },
    { image: image7, title: "Marriage Celebration", description: "Embark on a journey of love and commitment with a marriage celebration that radiates joy. From the sacred vows to the joyous festivities, create cherished moments surrounded by family and friends in a setting that reflects the unique bond shared by the couple.", id: '7' },
    { image: image8, title: "Music Concert", description: "Immerse yourself in the power of music with a live concert, featuring your favorite artists and creating an unforgettable experience.", id: '8' },
    { image: image9, title: "Birthday Party", description: "Gather friends and family to celebrate another year of life with a festive birthday party, complete with cake, decorations, and laughter.", id: '9' },
    { image: image10, title: "Seminar", description: "Organize an informative seminar, bringing together experts and participants for educational discussions and insights.", id: '10' },
    { image: image11, title: "Surprise Birthday Party", description: "Organize a surprise birthday party with close friends and family to create a memorable and unexpected celebration.", id: '11' },
  ];

  const handleClick = (id) => {
    navigate(`/commercial-decor/${id}`);
  };
  return (
    <>

      <Container  className='pt-5'>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="product-card" onClick={() => handleClick(project.id)}>
                <Card.Img variant="top" src={project.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description.split(' ').splice(0, 5).join(' ')}...</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default EventDecor;
