import { Col, Container, Row } from "react-bootstrap";
import image from '../assets/images/section1-image.jpg';
import image2 from '../assets/images/section1-image2.jpg';
import '../assets/css/Section.css'
import { Link } from "react-router-dom";
const Section1 = () => {

    return (
        <Container className="" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
            <div className="d-flex flex-column flex-md-column flex-lg-row mt-5 gap-3">
                <div className="d-flex flex-column gap-2 mb-4  " style={{ flex: 1 }}>
                    <h3 style={{ color: '#A78F30' }} >WELCOME TO I Decor </h3>
                    <h1 style={{ fontSize: '60px', color: '#000' }}>INTERIOR DESIGN</h1>
                    <p style={{ color: '#848484' }}>
                        Step into a world of style and sophistication with IDecor interior design services. Our experts blend aesthetics and functionality to create spaces that reflect your unique taste.
                    </p>
                    <h2 style={{ color: '#A78F30' }}>INNOVATIVE</h2>
                    <p style={{ color: '#848484' }}>
                        Craft a cutting-edge living experience with an innovative interior design that seamlessly integrates smart home technologies, adaptive furniture, and immersive augmented reality, promising a dynamic and personalized environment tailored to modern lifestyles.
                    </p>
                    <h2 style={{ color: '#A78F30' }}>CREATIVE</h2>
                    <p style={{ color: '#848484' }}>
                        Ignite creativity within your living space through a truly avant-garde interior design. Unleash interactive walls, adaptable furniture, and augmented reality, weaving together an imaginative tapestry that blurs the lines between art and functionality.
                    </p>
                </div>

                {/* Images Container */}
                <div
                    className="d-flex flex-wrap justify-content-center align-items-center"
                >
                    <Row>
                        <Col md={6} className="image-hover p-2">
                            <img
                                src={image}
                                className="img-fluid d-md-none"  // This will make the image full width on medium devices and down
                                style={{ height: 'auto' }}
                                alt=""
                            />
                            <img
                                src={image}
                                className="img-fluid d-none d-md-block"  // This ensures the image retains its original size on larger screens
                                width={250}
                                style={{ height: '380px', marginTop: '50px' }}
                                alt=""
                            />
                        </Col>
                        <Col md={6} className="image-hover p-2">
                            <img
                                src={image2}
                                className="img-fluid d-md-none"
                                style={{ height: 'auto' }}
                                alt=""
                            />
                            <img
                                src={image2}
                                className="img-fluid d-none d-md-block"
                                width={250}
                                style={{ height: '380px' }}
                                alt=""
                            />
                        </Col>
                    </Row>
                </div>
            </div>

            <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}><Link to={'/about'} className="text-white text-decoration-none">More About Us</Link></button>
        </Container>
    );
};

export default Section1;
