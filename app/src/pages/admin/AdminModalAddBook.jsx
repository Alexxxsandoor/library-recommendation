import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminModalAddBook = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Added book
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Added book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="book-name">
              <Form.Label>Book title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-autor">
              <Form.Label>Book's autor:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Autor"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-genre">
              <Form.Label>Book's genre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="genre"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-description">
              <Form.Label>Book's description:</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="description"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-image">
              <Form.Label>Book's image:</Form.Label>
              <Form.Control
                type="file"
                placeholder="image"
              />
            </Form.Group>
          </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Added
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default AdminModalAddBook;