import { Container, Card, Col, Row } from "react-bootstrap";
import image1 from '../assets/images/projects/product1.jpg';
import image2 from '../assets/images/projects/product3.jpg';
import image3 from '../assets/images/projects/product4.jpg';
import image4 from '../assets/images/Service/interior/img31.jpeg';
import image6 from '../assets/images/Service/interior/img30.jpeg';
import image5 from '../assets/images/projects/product6.jpg';
// import './Products.css';  // Assume you have custom CSS for styling

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const Products = () => {

  const controlsContent = useAnimation();
  const controlsImages = useAnimation();
  const controlsContenth1 = useAnimation();
  const controlsContents = useAnimation();
  const controlsCards = useAnimation();

  // Using useInView to detect if the content section is in view
  const [ref, inView] = useInView({
    threshold: 0.1,   // Trigger when 10% of the element is visible
  });

  const variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  const variantsh1 = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };

  const variantsContents = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  const variantsCard = {
    hidden: { y: 50, opacity: 0 },  // Start from below and fade in
    visible: { y: 0, opacity: 1, transition: { duration: 1 , delay: 0.8 } },  // Move up to the original position
  };

  // const imageVariants = {
  //   hidden: { x: 100, opacity: 0 },
  //   visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  // };
  useEffect(() => {
    if (inView) {
      controlsContent.start("visible");
      controlsContenth1.start("visible");
      controlsImages.start("visible");
      controlsContents.start("visible");
      controlsCards.start("visible")
    } else {
      controlsContent.start("hidden");
      controlsContenth1.start("hidden");
      controlsImages.start("hidden");
      controlsContents.start("hidden");
      controlsCards.start("hidden")
    }
  }, [inView, controlsContent, controlsCards, controlsContents, controlsContenth1, controlsImages]);


  const projects = [
    { image: image1, title: "AutoCad Design", description: "Generate a 3D house design using AutoCAD for precise and detailed architectural visualization." },
    { image: image2, title: "Exterior Design", description: "Crafting distinctive exterior designs with a touch of Khas Home Fashion, merging timeless elegance and contemporary elements for a unique and luxurious architectural statement" },
    { image: image3, title: "Interior Design", description: "Curating an innovative interior design for the Vivo shop in Rahimyar Khan, blending cutting-edge technology with chic aesthetics to create a modern and immersive retail experience." },
    { image: image4, title: "Interior Design", description: "Conceptualizing a dynamic interior design for I Decor's service-centric shop, harmonizing functionality with aesthetic appeal to create an inviting and innovative environment for clientele." },
    { image: image5, title: "ViVo Shop", description: "Transforming the Vivo Mobile shop in Rahimyar Khan into a sleek and modern space, fusing contemporary design elements with brand aesthetics for an immersive and stylish retail experience." },
    { image: image6, title: "Coffee Shop", description: "Crafting a cozy and inviting interior design for an AMD-themed coffee shop, combining sleek technology-inspired elements with warm, comfortable aesthetics to enhance the coffee-drinking experience." },
  ];

  return (
    <Container className="pt-5" ref={ref}> <motion.h4
      initial="hidden"
      animate={controlsContent}
      variants={variants}
      className="d-flex justify-content-center align-content-center"
      style={{ color: '#A78F30' }}
    >OUR PROJECT</motion.h4>
      <motion.h1 initial="hidden"
        animate={controlsContenth1}
        variants={variantsh1}
      className="d-flex justify-content-center align-content-center"
        style={{ color: '#000' }}>Our Latest Projects</motion.h1>
      <motion.p initial="hidden"
        animate={controlsContents}
      className="text-center"
        variants={variantsContents} style={{ color: '#848484' }}>
Embark on a journey of sophistication with our latest interior design project, where modern aesthetics intertwine with timeless elegance. Experience a sanctuary where sleek lines, muted hues, and smart home integration harmonize seamlessly, creating a sophisticated living space that blends technology and nature.
      </motion.p>
      <Row className="justify-content-center pt-5 pb-5">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">

            <motion.div
              initial="hidden"
              animate={controlsCards}  // You can use controlsContents or another animation control based on your preference
              variants={variantsCard}>
              <Card className="product-card">
              <Card.Img variant="top" src={project.image} className="card-img-top" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description.split(' ').slice(0,5).join(' ')}...</Card.Text>
                {/* <button className="ps-5 pe-5 py-1 text-white bg-black pointer rounded" style={{ border: 'none', outline: 'none' }}>View More</button> */}
              </Card.Body>
            </Card>
          </motion.div>
          </Col>
        ))}
    </Row>
    </Container >
  );
};

export default Products;
