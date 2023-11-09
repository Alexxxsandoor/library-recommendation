import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminModalChangedBook = (props) => {
    const {_id, name, author,genre, description,image} = props.book
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="warning" onClick={handleShow}>
            Changed
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
                placeholder='Title'
                value={name}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-autor">
              <Form.Label>Book's Author:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                value={author}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-genre">
              <Form.Label>Book's genre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="genre"
                value={genre}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-description">
              <Form.Label>Book's description:</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="description"
                value={description}
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

export default AdminModalChangedBook;