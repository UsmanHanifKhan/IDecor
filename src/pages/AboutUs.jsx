import { Container } from "react-bootstrap";
import '../assets/css/AboutUs.css';
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import OurTeam from "../components/OurTeam";
import video from '../assets/Video/video2.mp4'
const AboutUs = () => {
  return (
    <>
      <div className="landing" id="about">
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
            <p className="text-white">
              We are provide the services of autocad , interior Design , exterior Design and Installments
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
      <Section1 />
      <Container fluid className="about-bg">
        <div className="about-title text-white text-center">
          <h4 style={{ color: '#A78F30', fontWeight: 'bold' }}>MAKING A FUNCTIONAL HOME</h4>
          <h1 >FROM CONCEPT TO FUNCTION</h1>
          <Container>
            <p className="about-text" style={{ margin: 'auto', paddingBottom: '15px' }}>
              I Decor seamlessly brings concepts to life with their interior design services, ensuring a harmonious blend of creativity and functionality in every project.
            </p>
          </Container>
          <button className="btn text-white fs-6" style={{ fontSize: '10px', background: '#A78F30' }}>More About Us</button>
        </div>
      </Container>

      <Section2 />
    </>
  );
}

export default AboutUs;
