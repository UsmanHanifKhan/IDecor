import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import image from '../assets/image3.jpg';
import image2 from '../assets/image2.jpg';
// import { Button } from 'react-bootstrap';

import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Products from '../components/Products';
import Video from '../components/Video';
import Testimonial from '../components/Testimonial';
import { useState } from 'react';
import Modals from '../components/Modals';
const buttonStyle = {
  padding: '0.6em 2em',
  border: 'none',
  outline: 'none',
  color: 'rgb(255, 255, 255)',
  background: '#111',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 0,
  borderRadius: '10px',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  top: '60%',
};

const buttonBeforeStyle = {
  content: '""',
  background: `linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  )`,
  position: 'absolute',
  top: '-2px',
  left: '-2px',
  backgroundSize: '400%',
  zIndex: '-1',
  filter: 'blur(5px)',
  WebkitFilter: 'blur(5px)',
  width: 'calc(100% + 4px)',
  height: 'calc(100% + 4px)',
  animation: 'glowing-button-85 20s linear infinite',
  transition: 'opacity 0.3s ease-in-out',
  borderRadius: '10px',
};

const buttonAfterStyle = {
  zIndex: '-1',
  content: '""',
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: '#222',
  left: '0',
  top: '0',
  borderRadius: '10px',
};
const slides = [
  {
    image: image,
    name: 'I Decore',
    text: "Discover Elegance", // Text for the first image
  },
  {
    image: image2,
    name: 'I Decore',
    text: "Experience Luxury", // Text for the second image
  },
  {
    image: image,
    name: 'I Decore',
    text: "Embrace Sophistication", // Text for the third image
  },
];



const HeroSlider = () => {


  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true} // Enable auto-play
        interval={3000}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              height: '620px',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent black overlay
              }}
            >
              <p
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#A78F30', // Text color
                  fontSize: '24px' // Text size
                }}
              >
                {slide.name}
              </p>
              <h1
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white', // Text color
                  fontSize: '4rem' 
                }}
              >
                {slide.text}
              </h1>

              <button style={buttonStyle} onClick={openModal}>
                Appointment
                <span style={buttonBeforeStyle}></span>
                <span style={buttonAfterStyle}></span>
              </button>

              <Modals showModal={showModal} handleClose={handleClose} />
            </div>
          </div>
        ))}

      </Carousel>

      <Section1 />
      <Section2 />
      <Products />
      <Video />
      <Testimonial />
    </>
  );
};

export default HeroSlider;
