import { Container } from "react-bootstrap";
import '../assets/css/AboutUs.css';
// import { Link } from "react-router-dom";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import OurTeam from "../components/OurTeam";
// import { useEffect } from "react";
// import {  useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import video from '../assets/Video/video2.mp4'
const AboutUs = () => {
    // const controlsContent = useAnimation();
    // const controlsImages = useAnimation();
    // const [ref, inView] = useInView({
    //     threshold: 0.1,
    // });

    // const variants = {
    //     hidden: { opacity: 0, scale: 0.9 },
    //     visible: { 
    //         opacity: 1,
    //         scale: 1,
    //         transition: { 
    //             duration: 1 
    //         }
    //     },
    //     zoomUp: {
    //         scale: [0, 1],
    //         transition: {
    //             // delay: 1,
    //             duration: 1,
    //         }
    //     }
    // };
    // const imageVariants = {
    //     hidden: { x: 100, opacity: 0 },
    //     visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    // };

    // useEffect(() => {
    //     if (inView) {
    //         controlsContent.start("visible");
    //         controlsContent.start("zoomUp");
    //         controlsImages.start("visible");
    //     } else {
    //         controlsContent.start("hidden");
    //         controlsImages.start("hidden");
    //     }
    // }, [inView, controlsContent, controlsImages]);

    return (
        <>
            {/* <Container fluid ref={ref} className='aboutus'>
                <motion.div 
                        initial="hidden"
                        animate={controlsContent}
                        variants={variants}
                         className="about-div d-flex justify-content-center align-items-center flex-column">
                    <p className="text-white"><Link to={'/'} className="text-decoration-none" style={{ color: '#A78F30' }}>Home</Link> / About Us</p>
                    <h1 className=" text-white " style={{fontSize:'5rem'}} >About Us</h1>  
                </motion.div>
            </Container> */}
            
      <div className="landing">
        <div className="video">
           <video
            autoPlay
            muted
            loop
            src={video}
            className="video__content"
          ></video> 
          <div className="video__overlay">
            <h1 style={{ color: '#A78F30' }}>The I Decor Services</h1>
            <p>
              We are provide the services of autocad , interior Design , exterior Design and Installments
            </p>
          </div>
        </div>
      </div>
            <OurTeam/>
            <Section1 />
            <Container fluid className="about-bg">
                <div className="about-title text-white text-center">
                    <h4 style={{ color: '#A78F30', fontWeight: 'bold' }}>MAKING A FUNCTIONAL HOME</h4>
                    <h1 >FROM CONCEPT TO FUNCTION</h1>
                    <p className="about-text" style={{ margin: 'auto' , paddingBottom:'15px'}}>
                        Praesent fringilla egestas justo. Proin auctor dapibus urna, condimentum ullamcorper enim cursus vel. Ut eget leo finibus, condimentum sapien cursus, dictum nunc. Morbi sit amet nunc mauris. Vestibulum malesuada nisl quis tellus bibendum pulvinar.
                    </p>
                    <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}>More About Us</button>
                </div>
            </Container>

            <Section2 />
        </>
    );
}

export default AboutUs;
