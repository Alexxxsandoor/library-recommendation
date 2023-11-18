import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FUNC_CREATE_BOOK, FUNC_CREATE_MANY_BOOK, FUNC_DELETE_ALL_BOOKS } from '../../API/API_books';

const AdminModalAddBook = () => {
    const [show, setShow] = useState(false);
    const [book, setBook] = useState({
      name:"name",
      author:"author",
      genre:"genre",
      description: "description",
      image:"image",
      pdf_url:"pdf_url"
    }) 

    

    const handleClose = () => {
      setShow(false)
      FUNC_CREATE_BOOK(alert('Книга додана'),book)
    };
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="success" onClick={handleShow}>
          Додати книгу
        </Button>
        <Button className='mx-2' variant="primary" onClick={()=>FUNC_CREATE_MANY_BOOK(alert)}>
          Завантажити 103 книги
        </Button>
        <Button variant="danger" onClick={()=>FUNC_DELETE_ALL_BOOKS(alert)}>
          Видалити всі книги
        </Button>
  
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Додавання книги</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="book-name">
              <Form.Label>Назва книги*</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, name:e.target.value})}
                type="text"
                placeholder="Назва"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-autor">
              <Form.Label>Автор книги</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, author:e.target.value})}
                type="text"
                placeholder="Автор"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-genre">
              <Form.Label>Жанр книги</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, genre:e.target.value})}
                type="text"
                placeholder="Жанр"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-description">
              <Form.Label>Опис книги</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, description:e.target.value})}
                as="textarea"
                type="text"
                placeholder="Опис"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-image">
              <Form.Label>Зображення книги</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, image:e.target.value})}
                type="text"
                placeholder="Зображення"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="book-image">
              <Form.Label>Посилання на PDF</Form.Label>
              <Form.Control
                onChange={(e)=>setBook({...book, pdf_url:e.target.value})}
                type="text"
                placeholder="PDF посилання"
              />
            </Form.Group>
          </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрити вікно
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Додати книгу
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default AdminModalAddBook;