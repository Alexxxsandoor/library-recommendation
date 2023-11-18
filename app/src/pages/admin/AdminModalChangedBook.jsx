import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FUNC_CHANGE_BOOK } from '../../API/API_books';

const AdminModalChangedBook = (props) => {
    const {_id, name, author,genre, description,image, pdf_url} = props.book
    const [show, setShow] = useState(false);

    const [book, setBook] = useState({
      _id,
      name,
      author,
      genre,
      description,
      image,
      pdf_url: pdf_url ? pdf_url : ""
    }) 

    const handleClose = () => {
      setShow(false)
      FUNC_CHANGE_BOOK(alert('Книга змінена'),book)
    };
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className='m-1' variant="warning" onClick={handleShow}>
            Редагувати
        </Button>
  
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Added book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="book-name">
              <Form.Label>Назва:</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, name:e.target.value})}
                type="text"
                placeholder={name}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-autor">
              <Form.Label>Автор:</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, author:e.target.value})}
                type="text"
                placeholder={author}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-genre">
              <Form.Label>Жанр:</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, genre:e.target.value})}
                type="text"
                placeholder={genre}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-description">
              <Form.Label>Опис:</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, description:e.target.value})}
                type="text"
                as="textarea"
                placeholder={description}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-image">
              <Form.Label>Зображення:</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, image:e.target.value})}
                type="text"
                placeholder={image}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-pdf_url">
              <Form.Label>Посилання на книгу:</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, pdf_url:e.target.value})}
                type="text"
                placeholder={pdf_url}
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