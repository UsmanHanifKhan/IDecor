// import { Container, Row , Col} from "react-bootstrap";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import './Section2.css'
// // Dummy images for the example
// import image1 from '../assets/images/section2/section2-image1.jpg'
// import image2 from '../assets/images/section2/section2-image2.jpg'
// // import image3 from '../assets/images/section2/section2-image3.jpg'
// // import image4 from '../assets/images/section2/section2-image4.jpg'
// import image5 from '../assets/images/section2/section2-image5.jpg'
// import { useEffect } from "react";
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Section2 = () => {
//     // Combine images for the carousel
//     const carouselImages = [image1, image2,image5];

//     const controlsContent = useAnimation();
//     const controlsImages = useAnimation();

//     // Using useInView to detect if the content section is in view
//     const [ref, inView] = useInView({
//         threshold: 0.1,   // Trigger when 10% of the element is visible
//     });

//     const variants = {
//         hidden: { opacity: 0, scale: 0.9 },
//         visible: { 
//           opacity: 1,
//           scale: 1,
//           transition: { 
//             duration: 1 
//           }
//         },
//         zoomUp: {
//           scale: [0.9, 1.1, 1], // Zoom-up effect
//           transition: {
//             delay: 1,
//             duration: 0.5,
//           }
//         }
//       };
//     const imageVariants = {
//         hidden: { x: 100, opacity: 0 },
//         visible: { x: 0, opacity: 1, transition: { duration: 1 } },
//     };
//     useEffect(() => {
//         if (inView) {
//             controlsContent.start("visible");
//             controlsContent.start("zoomIn"); 
//             controlsImages.start("visible");
//         } else {
//             controlsContent.start("hidden");
//             controlsImages.start("hidden");
//         }
//     }, [inView, controlsContent, controlsImages]);



//     return (
//         <Container>
//             <Row className="mt-5" ref={ref}>
//                 {/* Content Container */}
//                 <Col  className="p-4">
                
//                 <motion.div 
//                     initial="hidden"
//                     animate={controlsContent}
//                     variants={variants} md={6}>
//                     <h3 style={{ color: '#A78F30' }}>THE ESSENCE OF INTERIOR DESIGN</h3>
//                     <h1 style={{ color: '#000' }}>FUNCTIONALITY FIRST</h1>
//                     <p style={{ color: '#868682' , marginBottom:'25px' }}>
//                         In interior design, functionality is paramount. Its not just about looks; its about making spaces work efficiently. A room should be both beautiful and practical. Essentially, good design blends aesthetics with purpose, ensuring spaces are not only pleasing to the eye but also enhance daily living.
//                     </p>
//                     {/* <button className="about-btn ps-5 pe-5 py-1 text-white bg-black rounded" style={{ border: 'none', outline: 'none' }}>Contact</button> */}
//                     <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}>More About Us</button>
//                     </motion.div>
//                 </Col>

//                 {/* Images Container */}
//                 <Col md={6} className="d-flex flex-wrap justify-content-center align-items-center" 
//                     >
                    
//                 <motion.div initial="hidden"
//                     animate={controlsImages}
//                     variants={imageVariants}>
//                     {/* Carousel */}
//                     <Carousel
//                         autoPlay
//                         infiniteLoop
//                         showThumbs={false}
//                         showArrows={false}
//                         showStatus={false}
//                         showIndicators={false}
//                         interval={2000}
//                     >
//                         {carouselImages.map((image, index) => (
//                             <div key={index}>
//                                 <div className="d-flex justify-content-around">
//                                     <img src={image} alt={`Slide ${index + 1}`} style={{ width: '45%' , height:'45%' }} />
//                                     {carouselImages[index + 1] && (
//                                         <img src={carouselImages[index + 1]} alt={`Slide ${index + 2}`} style={{ width: '45%' }} />
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </Carousel>

//                     {/* Small images below the carousel */}
//                     {/* <div className="d-flex flex-column flex-md-row justify-content-center mt-4 mx-md-0 flex-sm-column w-100">
//                         <img src={image1} alt="Small 1" className="section2-images " />
//                         <img src={image2} alt="Small 2" className="section2-images " />
//                         <img src={image3} alt="Small 3" className="section2-images " />
//                     </div> */}
                
//                     </motion.div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Section2;


import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/section2/section2-image4.jpg';
import image2 from '../assets/images/section2/section2-image2.jpg';
// import image5 from '../assets/images/section2/section2-image5.jpg';
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
                        <p style={{ color: '#868682' , marginBottom:'25px' }}>
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
