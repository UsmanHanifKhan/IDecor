import { Container, Card, Col, Row } from "react-bootstrap";
import image1 from '../assets/images/projects/product1.jpg';
import image2 from '../assets/images/projects/product3.jpg';
import image3 from '../assets/images/projects/product4.jpg';
import image4 from '../assets/images/projects/product5.jpg';
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
    { image: image1, title: "Project 1", description: "Description for Project 1" },
    { image: image2, title: "Project 2", description: "Description for Project 2" },
    { image: image3, title: "Project 3", description: "Description for Project 3" },
    { image: image4, title: "Project 2", description: "Description for Project 2" },
    { image: image5, title: "Project 3", description: "Description for Project 3" },
    { image: image1, title: "Project 1", description: "Description for Project 1" },
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
        Cras sagittis justo enim, eu sagittis purus molestie vitae. Vestibulum
        porttitor in massa feugiat blandit. Nunc ac viverra magna. Etiam dictum
        pellentesque libero a porttitor. Vestibulum dapibus, metus a molestie
        tincidunt, tortor nisl mollis mi, vitae commodo lorem mi auctor tellus.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
                <Card.Text>{project.description}</Card.Text>
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
