import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from '../assets/images/portfolio/product2.jpg';
import img2 from '../assets/images/portfolio/product3.jpg';
import img3 from '../assets/images/portfolio/product4.jpg';
import img4 from '../assets/images/portfolio/product5.jpg';
import img5 from '../assets/images/portfolio/product6.jpg';
import img6 from '../assets/images/portfolio/section1-image.jpg';
import img7 from '../assets/images/portfolio/section1-image2.jpg';

const Portfolio = () => {
  const portfolio = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
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
