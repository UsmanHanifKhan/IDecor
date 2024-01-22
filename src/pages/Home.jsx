import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from '../assets/home2.jpg';
import image2 from '../assets/home1-min.jpg';
import image3 from '../assets/image2.jpg'
import '../assets/css/Home.css'
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
    text: "Exterior Design", // Text for the first image
  },
  {
    image: image2,
    name: 'I Decore',
    text: "Experience Luxury", // Text for the second image
  },
  {
    image: image3,
    name: 'I Decore',
    text: "Interior Design", // Text for the third image
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
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={false}
        className=''
        containerClass='container-with-dots'
        customButtonGroup={<></>}
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {slides.map((slide, index) => (
          <div
            className='Home carousel-root'
            key={index}
            style={{
              position: 'relative',
              height: '700px',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <p
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#A78F30',
                  fontSize: '24px',
                }}
              >
                {slide.name}
              </p>
              <h6
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                }}
              >
                {slide.text}
              </h6>

              <button style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                ...buttonStyle, // Spread the buttonStyle object
              }} onClick={openModal}>
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


