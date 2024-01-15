import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modals({ showModal, handleClose }) {
  return (
    <>
      <Modal show={showModal} bg="dark" data-bs-theme="dark" onHide={handleClose}>
        <Modal.Header className="bg-dark text-white" closeButton>
          <Modal.Title >Appointment Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white"> {/* Add bg-dark and text-white classes */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> 
      </Modal>
    </>
  );
}

export default Modals;
