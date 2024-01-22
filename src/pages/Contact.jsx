import { useState } from 'react';
import { Container } from 'react-bootstrap';
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
      <Container fluid className='contact d-flex justify-content-center align-content-center text-center'>
        <div className="about-div">
          <h1 style={{ color: '#A78F30' }}>Contact Us</h1>
          <p className="text-white">For booking inquiries, please feel free to reach out to us</p>
        </div>
      </Container>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
        <div className=" p-3 mt-3">
          <h3 style={{ color: '#A78F30' }}>CONTACT US</h3>
          <h1>Have A Question?</h1>
          <div className="d-flex">
            <p style={{ color: '#000' }} ><span style={{ color: '#A78F30', fontSize: '20px' }} ><FaPhone /></span>  +92 323 2147623</p>
            <p style={{ paddingTop: '3px', color: '#000' }}><span><MdMail style={{ color: '#A78F30', fontSize: '25px' }} /></span> IDecor@gmail.com</p>
          </div>
          <p className='pt-3'>Questions about our services? Feel free to reach out! Call us today for prompt assistance and expert guidance.</p>
        </div>
        <div className=" bg-black p-3 d-flex flex-column border-bottom justify-content-center align-items-center">
          <form onSubmit={handleSubmit}  style={{padding:'60px'}} >
          <h3 className='text-white'>Contact Us</h3>
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
