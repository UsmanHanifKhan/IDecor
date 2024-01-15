import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from '../assets/image.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image2.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Blog = () => {



    const controlsContent = useAnimation();
    const controlsImages = useAnimation();
    const controlsContenth1 = useAnimation();
    const controlsContents = useAnimation();
    const controlsCards = useAnimation();
  
    const [ref, inView] = useInView({
      threshold: 0.1,
    });
  
    const variants = {
      hidden: { x: 50, opacity: 1 },
      visible: { x: 0, opacity: 0, transition: { duration: 1 , transition:0.5 } },
    };

  const variantsText = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
          opacity: 1,
          scale: 1,
          transition: { 
              duration: 1 
          }
      },
      zoomUp: {
          scale: [0, 1],
          transition: {
              // delay: 1,
              duration: 1,
          }
      }
  };
  
    useEffect(() => {
      if (inView) {
        controlsContent.start("visible");
        controlsContenth1.start("visible");
        controlsImages.start("visible");
        controlsContents.start("visible");
        controlsCards.start("visible");
      } else {
        controlsContent.start("hidden");
        controlsContenth1.start("hidden");
        controlsImages.start("hidden");
        controlsContents.start("hidden");
        controlsCards.start("hidden");
      }
    }, [inView, controlsContent, controlsCards, controlsContents, controlsContenth1, controlsImages]);
  

    const projects = [
        { image: image1, title: "Project 1", description: "Title: Unleash Your Mind with BrainStormer: Exploring the UI Design of a Cutting-Edge Quiz App Introduction: In today's fast-paced world, challenging our minds and engaging in thought-provoking activities." },
        { image: image2, title: "Project 2", description: "Description for Project 2" },
        { image: image3, title: "Project 3", description: "Description for Project 3" },
        { image: image2, title: "Project 2", description: "Description for Project 2" },
    ];
    
    return (

        <>
            <Container fluid ref={ref}  className='aboutus'>
                <motion.div 
                        initial="hidden"
                        animate={controlsContent}
                        variants={variantsText} className="about-div">
                <p className="text-white text-center"><Link to={'/'} className="text-decoration-none" style={{ color: '#A78F30' }}>Home</Link> / About Us</p>
                    <h1 className="text-center text-white" style={{fontSize:'60px'}}>I Decor Blog</h1>
                    {/* <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae deleniti nostrum molestias, accusantium culpa optio cupiditate?</p> */}
                </motion.div>
            </Container>
            <Container className="p-5">
        <h1 style={{color:'#A78F30'}}>Projects We Have Delivered</h1>
        <p className="pb-5">Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance, and sharing economy. See our Portfolio below.</p>

        <div className="d-flex flex-column gap-5">
          {projects.map((item, index) => (
            <motion.div
              className={`d-md-flex flex-md-row gap-5 ${index % 2 === 0 ? '' : 'flex-md-row-reverse'}`}
              key={item.title}
              initial="hidden"
              animate={controlsCards}
              variants={variants}
            >
              {/* On small and medium devices, switch to column layout */}
              <div className={`d-md-none flex-md-column text-center ${index % 2 === 0 ? '' : 'flex-md-col-reverse'}`} style={{ width: '100%' }}>
                <img src={item.image} className="mx-auto mb-3" style={{ width: '100%' }} alt="" />
                <div className="mx-auto" style={{ width: '100%' }}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
              {/* On larger devices, use the existing row layout */}
              <div className={`d-none d-md-flex flex-md-row gap-5 ${index % 2 === 0 ? '' : 'flex-md-row-reverse'}`}>
                <img src={item.image} style={{ width: '50%' }} alt="" />
                <div className="d-flex flex-column" style={{ width: '50%' }}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
        </>
    );
}

export default Blog;
