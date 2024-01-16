import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/section2/section2-image4.jpg';
import image2 from '../assets/images/section2/section2-image2.jpg';
import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const Section2 = () => {
    const carouselImages = [image1, image2];
    const controlsContent = useAnimation();
    const controlsImages = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1
            }
        },
        zoomUp: {
            scale: [0.9, 1.1, 1],
            transition: {
                // delay: 1,
                duration: 1,
            }
        }
    };
    const imageVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    };

    useEffect(() => {
        if (inView) {
            controlsContent.start("visible");
            controlsContent.start("zoomUp");
            controlsImages.start("visible");
        } else {
            controlsContent.start("hidden");
            controlsImages.start("hidden");
        }
    }, [inView, controlsContent, controlsImages]);

    return (
        <Container className="pb-3">
            <Row className="mt-5" ref={ref}>
                <Col className="p-4">
                    <motion.div
                        initial="hidden"
                        animate={controlsContent}
                        variants={variants}
                        className="mt-3"
                    >
                        <h5 style={{ color: '#A78F30' }}>THE ESSENCE OF INTERIOR DESIGN</h5>
                        <h1 style={{ color: '#000' }}>FUNCTIONALITY FIRST</h1>
                        <p style={{ color: '#868682', marginBottom: '25px' }}>
                            In interior design, functionality is paramount. It s not just about looks; it s about making spaces work efficiently. A room should be both beautiful and practical. Essentially, good design blends aesthetics with purpose, ensuring spaces are not only pleasing to the eye but also enhance daily living.
                        </p>

                        <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}><Link to={'/about'} className="text-white text-decoration-none">More About Us</Link></button>
                    </motion.div>
                </Col>

                <Col md={6} className="d-flex flex-wrap justify-content-center align-items-center">
                    <motion.div initial="hidden"
                        animate={controlsImages}
                        variants={imageVariants}>
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showThumbs={false}
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            interval={2000}
                            width="100%"
                        >
                            {carouselImages.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} style={{ width: '80%' }} />
                                </div>
                            ))}
                        </Carousel>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Section2;
