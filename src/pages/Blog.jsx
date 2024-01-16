import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from '../assets/images/blog/image2.jpeg';
import image2 from '../assets/images/blog/image3.jpeg';
import image3 from '../assets/images/blog/image5.jpeg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import '../assets/css/Blog.css'
const Blog = () => {



  const controlsContent = useAnimation();
  const controlsImages = useAnimation();
  const controlsContenth1 = useAnimation();
  const controlsContents = useAnimation();
  const controlsCards = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

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
    {
      image: image1, title: " Cutting-Edge AutoCAD Integration for Architectural Marvel", description: "At iDecor, we pride ourselves on bringing ambitious visions to life. Our recent venture involved the seamless integration of cutting-edge AutoCAD technology into a groundbreaking architectural design. This project not only showcased our technical prowess but also demonstrated our commitment to excellence in every detail.  From the project's inception, our team of skilled AutoCAD specialists collaborated seamlessly with architects and engineers. This collaborative synergy was instrumental in translating the client's challenging vision into a feasible plan. The integration process was marked by meticulous planning, leveraging advanced 3D modeling techniques. Our approach ensured that every aspect of the project received the attention it deserved, leading to a comprehensive and detailed plan."
    },
    { image: image2, title: "Redefining Interior Spaces in Rahim Yar Khan: A Fusion of Elegance and Innovation", description: "In the heart of Rahim Yar Khan, iDecor is setting new standards for interior design, seamlessly blending elegance with cutting-edge innovation. Our commitment to transforming spaces recently took center stage in this vibrant city, where we embarked on an inspiring journey to redefine interior aesthetics.Rahim Yar Khan's rich cultural tapestry serves as an abundant source of inspiration. Our interior design projects pay homage to local aesthetics, integrating traditional elements seamlessly with modern design concepts. The result is a harmonious blend that not only captivates but also resonates with the local community.Understanding the diverse needs of our clients in Rahim Yar Khan, iDecor provides tailored interior design solutions for every space. From residential homes to commercial establishments, our team crafts bespoke designs that reflect individual preferences while enhancing functionality." },
    { image: image3, title: "Crafting Timeless Exterior Elegance in Rahim Yar Khan", description: "In the sun-kissed city of Rahim Yar Khan, iDecor extends its expertise beyond interiors, venturing into the realm of exterior design. Our commitment to redefining spaces now unfolds on the facades of homes, businesses, and public spaces, enriching the cityscape with a touch of timeless elegance and innovation.Embracing the unique geography and climate of Rahim Yar Khan, our exterior designs seamlessly integrate with the natural landscape. From residential homes to commercial establishments, our team crafts designs that not only complement the surroundings but also enhance the architectural identity of the city.Our projects celebrate modern design aesthetics while incorporating elements inspired by Rahim Yar Khan's cultural heritage. The result is a harmonious blend of contemporary elegance and local influences, creating exteriors that stand as a testament to the city's rich history and promising future." },
    // { image: image2, title: "Project 2", description: "Description for Project 2" },
  ];

  return (

    <>
      <Container fluid ref={ref} className='blogus'>
        <motion.div
          initial="hidden"
          animate={controlsContent}
          variants={variantsText} className="blog-div">
          <p className="text-white text-center"><Link to={'/'} className="text-decoration-none" style={{ color: '#A78F30' }}>Home</Link> / Blog</p>
          <h1 className="text-center text-white" style={{ fontSize: '60px' }}>I Decor Blogs</h1>
          {/* <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae deleniti nostrum molestias, accusantium culpa optio cupiditate?</p> */}
        </motion.div>
      </Container>
      <Container className="p-5">
        <h1 style={{ color: '#A78F30' }}>Projects We Have Delivered</h1>
        <p className="pb-5">Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance, and sharing economy. See our Portfolio below.</p>

        <div className="d-flex flex-column gap-5">
          {projects.map((item, index) => (
            <div
              className={`d-md-flex flex-md-row gap-5 ${index % 2 === 0 ? '' : 'flex-md-row-reverse'}`}
              key={item.title}
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
                <img src={item.image} style={{ width: '50%', borderRadius: '10px' }} alt="" />
                <div className="d-flex flex-column" style={{ width: '50%' }}>
                  <h3 style={{ color: '#A78F30' }}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Blog;
