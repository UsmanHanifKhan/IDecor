import { Col, Container, Row } from "react-bootstrap";
import image from '../assets/images/section1-image.jpg';
import image2 from '../assets/images/section1-image2.jpg';
import '../assets/css/Section.css'
const Section1 = () => {

    return (
        <Container className="" style={{marginTop:'5rem' , marginBottom:'2rem'}}>
            <div className="d-flex flex-column flex-md-column flex-lg-row mt-5 gap-3">
                {/* Content Container */}
                <div className="d-flex flex-column gap-2 mb-4  " style={{ flex: 1 }}>
                    <h3 style={{ color: '#A78F30' }} >WELCOME TO HOUSEDECO</h3>
                    <h1 style={{ fontSize: '60px', color: '#000' }}>INTERIOR DESIGN</h1>
                    <p style={{ color: '#848484' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <h2 style={{ color: '#A78F30' }}>INNOVATIVE</h2>
                    <p style={{ color: '#848484' }}>
                        Nulla a interdum ipsum. Proin orci nunc, efficitur quis vehicula
                        ac, iaculis et massa. Etiam interdum, justo finibus hendrerit
                        vulputate, augue massa porta tellus, eget imperdiet nisl libero at
                        risus.
                    </p>
                    <h2 style={{ color: '#A78F30' }}>CREATIVE</h2>
                    <p style={{ color: '#848484' }}>
                        Nulla in eros sit amet sapien viverra pretium. Ut luctus libero
                        ipsum, eget varius nibh dapibus vitae. Sed non enim felis. Quisque
                        eget tincidunt ligula. Quisque odio odio.
                    </p>
                    {/* <h2 style={{ color: '#A78F30' }}>Crafting Personalized Interiors</h2> */}
                    {/* <p style={{ color: '#848484' }}>
    Your home tells a story; let us help you narrate it. With a keen eye for detail and a passion for design, we craft interiors that reflect your individuality. Dive into a world where comfort meets sophistication, and every corner speaks volumes
</p> */}

                </div>

                {/* Images Container */}
                <div
                    className="d-flex flex-wrap justify-content-center align-items-center"
                // style={{flex:1}}
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
                    {/* <Row>
                        <Col md={6} className="p-2">
                            <img
                                src={image}
                                className="img-fluid d-md-none"
                                style={{ height: 'auto' }}
                                alt=""
                            />
                            <img
                                src={image}
                                className="img-fluid d-none d-md-block"
                                width={150}
                                style={{ height: '180px', marginTop: '30px' }}
                                alt=""
                            />
                        </Col>
                        <Col md={6} className="p-2">
                            <img
                                src={image}
                                className="img-fluid d-md-none"
                                style={{ height: 'auto' }}
                                alt=""
                            />
                            <img
                                src={image}
                                className="img-fluid d-none d-md-block"
                                width={150}
                                style={{ height: '180px', marginBottom: '10px' }}
                                alt=""
                            />
                        </Col>
                    </Row> */}
                </div>
            </div>

            <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}>More About Us</button>
        </Container>
    );
};

export default Section1;
// import { Col, Container, Row } from "react-bootstrap";
// import image from '../assets/image.jpg';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

// const Section1 = () => {
//     const controlsContent = useAnimation();
//     const controlsImages = useAnimation();

//     // Using useInView to detect if the content section is in view
//     const [ref, inView] = useInView({
//         threshold: 0.1,   // Trigger when 10% of the element is visible
//     });

//     const variants = {
//         hidden: { x: -20, opacity: 0 },
//         visible: { x: 0, opacity: 1, transition: { duration: 1 } },
//     };
//     const imageVariants = {
//         hidden: { x: 100, opacity: 0 },
//         visible: { x: 0, opacity: 1, transition: { duration: 1 } },
//     };
//     useEffect(() => {
//         if (inView) {
//             controlsContent.start("visible");
//             controlsImages.start("visible");
//         } else {
//             controlsContent.start("hidden");
//             controlsImages.start("hidden");
//         }
//     }, [inView, controlsContent, controlsImages]);

//     return (
//         <Container>
//             <div ref={ref} className="d-flex flex-column flex-md-row mt-5">
//                 {/* Content Container */}
//                 <motion.div
//                     initial="hidden"
//                     animate={controlsContent}
//                     variants={variants}
//                     className="flex-grow-1 p-4 gap-5"
//                 >
//                     <h3 style={{ color: '#A78F30' }} >WELCOME TO HOUSEDECO</h3>
//                     <h1 style={{ fontSize: '60px', color: '#000' }}>INTERIOR DESIGN</h1>
//                     <p style={{ color: '#848484' }}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//                         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                     </p>
//                     <h2 style={{ color: '#A78F30' }}>INNOVATIVE</h2>
//                     <p style={{ color: '#848484' }}>
//                         Nulla a interdum ipsum. Proin orci nunc, efficitur quis vehicula
//                         ac, iaculis et massa. Etiam interdum, justo finibus hendrerit
//                         vulputate, augue massa porta tellus, eget imperdiet nisl libero at
//                         risus.
//                     </p>
//                     <h2 style={{ color: '#A78F30' }}>CREATIVE</h2>
//                     <p style={{ color: '#848484' }}>
//                         Nulla in eros sit amet sapien viverra pretium. Ut luctus libero
//                         ipsum, eget varius nibh dapibus vitae. Sed non enim felis. Quisque
//                         eget tincidunt ligula. Quisque odio odio.
//                     </p>
//                 </motion.div>

//                 {/* Images Container */}
//                 <motion.div
//                     initial="hidden"
//                     animate={controlsImages}
//                     variants={imageVariants}
//                     className="d-flex flex-wrap"
//                 >
//                     <Row>
//                         <Col md={12} className="p-2">
//                             <img
//                                 src={image}
//                                 className="img-fluid d-md-none"
//                                 style={{ height: 'auto' }}
//                                 alt=""
//                             />
//                             <img
//                                 src={image}
//                                 className="img-fluid d-none d-md-block"
//                                 width={150}
//                                 style={{ height: '180px', marginTop: '50px' }}
//                                 alt=""
//                             />
//                         </Col>
//                         <Col md={12} className="p-2">
//                             <img
//                                 src={image}
//                                 className="img-fluid d-md-none"
//                                 style={{ height: 'auto' }}
//                                 alt=""
//                             />
//                             <img
//                                 src={image}
//                                 className="img-fluid d-none d-md-block"
//                                 width={150}
//                                 style={{ height: '180px' }}
//                                 alt=""
//                             />
//                         </Col>
//                     </Row>
//                     {/* ... other rows ... */}
//                 </motion.div>
//             </div>
//         </Container>
//     );
// };

// export default Section1;
