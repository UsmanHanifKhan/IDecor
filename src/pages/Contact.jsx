import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Contact.css';
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <>
      <Container fluid className='contact'>
        <div className="about-div">
          <h1 className=" text-white">Contact Us</h1>
          <p className="text-white"><Link to={'/'} className="text-decoration-none" style={{ color: 'orange' }}>Home</Link> / Contact Us</p>
        </div>
      </Container>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
        <div className=" p-3 mt-3">
          <h3 style={{color:'#e4bb7d'}}>CONTACT US</h3>
          <h1>Have A Question?</h1>
          <div className="d-flex">
            <p style={{color:'silver'}} ><span style={{color:'#e4bb7d' , fontSize:'20px'}} ><FaPhone /></span>  +92 304 3763110</p>
            <p style={{paddingTop:'3px', color:'silver'}}><span><MdMail  style={{color:'#e4bb7d' , fontSize:'25px'}} /></span> IDecor@gmail.com</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className=" bg-black p-3 ">
          <form onSubmit={handleSubmit} className='pt-4'>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mb-3"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mb-3"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input mb-3"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="form-input mb-3"
            ></textarea>
             <button type="submit" className="form-submit-btn">Submit</button> {/* Styled button */}

          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
