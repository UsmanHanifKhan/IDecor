import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from '../assets/images/portfolio/product2.jpg';
import img2 from '../assets/images/portfolio/product3.jpg';
import img3 from '../assets/images/portfolio/product4.jpg';
import img4 from '../assets/images/portfolio/product5.jpg';
import img5 from '../assets/images/portfolio/product6.jpg';
import img6 from '../assets/images/portfolio/section1-image.jpg';
import img7 from '../assets/images/portfolio/section1-image2.jpg';
import img8 from '../assets/images/blog/image3.jpeg';
import img9 from '../assets/images/blog/image4.jpeg';
import img10 from '../assets/images/blog/image5.jpeg';
import img11 from '../assets/images/Service/event/img3.jpeg';
import img12 from '../assets/images/Service/event/img7.jpg';
import img13 from '../assets/images/Service/event/img5.jpeg';
import img14 from '../assets/images/section2/section2-image3.jpg';
import img15 from '../assets/images/Service/event/img9.jpeg';

const Portfolio = () => {
  const portfolio = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
  ];

  return (
    <Container className="p-5">
    <h1 className="text-center pb-4">Our Projects</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {portfolio.map((item, index) => (
          <Col key={index}>
            <Card >
              <Card.Img style={{borderTopLeftRadius:'0px' , borderTopRightRadius:'0'}} variant="top" src={item.img} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
