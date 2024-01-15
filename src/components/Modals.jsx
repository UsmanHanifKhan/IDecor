import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modals({ showModal, handleClose }) {
  return (
    <>
      <Modal show={showModal} bg="dark" data-bs-theme="dark" onHide={handleClose}>
        {/* <Modal.Header className="bg-dark-subtle  text-white" closeButton>
          <Modal.Title >Appointment Book</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="bg-dark-subtle text-white"> {/* Add bg-dark and text-white classes */}
        <h2 className='text-center pb-3'>Appointment</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                className='border-0'
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                className='border-0'
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputPhone">
              <Form.Control
                type="tel"
                placeholder="Phone"
                className='border-0'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputDate">
              <Form.Control
                type="date"
                placeholder="Select Date"
                className='border-0'
              />
            </Form.Group>

            
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
          <button style={{background:'#A78F30' , padding:'8px' }} onClick={handleClose}>
            Save Changes
          </button> 
      </Modal>
    </>
  );
}

export default Modals;
