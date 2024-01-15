import { Carousel } from 'react-responsive-carousel';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/testi1.jpg'
import image2 from '../assets/test1.jpg'
import image3 from '../assets/profile3.jpeg'
import image4 from '../assets/test3.jpg'
import image5 from '../assets/test4.jpg'
import image6 from '../assets/profile4.jpeg'
// import image7 from '../assets/testi3.jpg'
// import image8 from '../assets/testi4.jpg'

const Testimonial = () => {
  const testimonials = [
    // { title: 'Fahad', image: image7, description: 'I had a great experience with I Decore interior design service. He found their team very helpful and skilled. The designs were exactly what he wanted, and the whole process was smooth and enjoyable. Highly recommended! Highly recommend', stars: 5 },
    // { title: 'Shahzad Ahmed', image: image8, description: 'I loved I Decore exterior design service! They turned his ideas into a stunning reality. The team was professional, creative, and made the entire process hassle-free. Fahad is extremely satisfied with the outcome and recommends their excellent exterior design services. Highly recommended! Highly recommend', stars: 5 },
    { title: 'Jane Smith', image: image2, description: 'Working with I Decor was a game-changer for my home. The attention to detail and innovative designs exceeded my expectations. The team dedication to creating a personalized space made the entire experience enjoyable. Truly impressed!', stars: 4 },
    { title: 'Raven', image: image1, description: 'Choosing I Decor for my home interior design was a fantastic decision. Their team brilliantly combined creativity and professionalism, transforming my vision into a stunning reality. From start to finish, the process was seamless. Highly recommend', stars: 5 },
    { title: 'Jane Smith', image: image2, description: 'Working with I Decor was a game-changer for my home. The attention to detail and innovative designs exceeded my expectations. The team dedication to creating a personalized space made the entire experience enjoyable. Truly impressed!', stars: 4 },
    { title: 'Alia Khabib', image: image3, description: 'Exceptional service! I Decor brought a fresh perspective to my interior design project. Their commitment to quality and unique ideas set them apart. I now have a home that reflects my personality. Thank you for making my space extraordinary', stars: 5 },
    { title: 'John Doe', image: image4, description: 'I can not express how pleased I am with the results from I Decor. The level of professionalism and commitment to delivering on my vision was outstanding. The team creative approach and attention to my preferences made the collaboration a success. Highly recommended!', stars: 5 },
    { title: 'Jane Smith', image: image5, description: 'Transformative design! I Decor turned my house into a home that I love. The team expertise and ability to capture my style were impressive. They brought fresh, modern ideas that revitalized every room. Thrilled with the outcome!', stars: 4 },
    { title: 'fatima', image: image6, description: 'Choosing I Decor for my interior design needs was a decision I wont regret. Their skilled team went above and beyond to create a space that feels uniquely mine. The combination of functionality and aesthetics is perfect. Thanks for making my dream home a reality', stars: 5 }
    // Add more testimonials as needed
  ]; 
  return (
    <Container>
      <h4 className="text-center mb-4">Testimonials</h4>
      <h1 className="text-center mb-4">What Our Client Says?</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}  // Set showThumbs to false to display one image at a time
        showIndicators={false}
        className="mb-5"
      >
        {testimonials.map((testimonial, index) => (
          <Row key={index} className='d-flex justify-content-center align-content-center '>
            <Col md={6}>
              <Card className="testimonial-card">
                <div className="d-flex justify-content-center gap-2 align-item-center">
                  <img src={testimonial.image} style={{ width: '100px', borderRadius: '100%', marginTop: '5px' }} alt="" />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: '#A78F30' }}>{testimonial.title}</Card.Title>

                  <div>
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <span key={i} style={{ color: 'orange', fontSize: '25px' }}>★</span>
                    ))}
                  </div>
                  <Card.Text>{testimonial.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Carousel>
    </Container>
  );
}

export default Testimonial;
