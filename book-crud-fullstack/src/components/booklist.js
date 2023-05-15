import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Card, Modal, Form } from 'react-bootstrap';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    fetch('http://localhost:8080/book')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => {
        console.error('The books MySQL database is likely down', error);
      });
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow(book) {
    setBookUpdate((currentBook) => ({
      ...currentBook, 
      idUpdate: book.id, 
      nameUpdate: book.name, 
      priceUpdate: book.price
    }));
    setShow(true);
  }

  const [bookUpdate, setBookUpdate] = useState({ 
    idUpdate: '', nameUpdate: '', priceUpdate: ''
  });
  

  function handleFormChange(event){
    setBookUpdate((currentBook) => ({...currentBook, [event.target.name]:event.target.value}))
  }

  function handleSaveChanges() {
    handleUpdate(bookUpdate.idUpdate, bookUpdate.nameUpdate, bookUpdate.priceUpdate);
  }

  function handleUpdate(idUpdate, nameUpdate, priceUpdate) {
    let bookToUpdate = {
      id: idUpdate, name: nameUpdate, price: priceUpdate
    }
    fetch('http://localhost:8080/book' , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookToUpdate)
    })
    .then(response => {
      setBooks(books.map(book => {
        if (book.id === bookToUpdate.id) {
          return bookToUpdate;
        }
        return book;
      }));
      console.log('Book updated succesfully', response);
    })
    .catch(error => {
      console.error('Error updating data:', error);
    });

  }

  function handleDelete(id) {
    fetch(`http://localhost:8080/book/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Data deleted succesfully', response);
        setBooks(books.filter(book => book.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  }

  return (
    <Container>
      <Card className='bg-light'>
        <Table striped bordered hover>
          <thead className='text-white bg-dark bg-gradient'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td className='text-black'>{book.id}</td>
                <td className='text-black'>{book.name}</td>
                <td className='text-black'>{book.price}</td>
                <td className='text-black'>
                  <Button variant="light" onClick={() => handleShow(book)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label className='me-3'>Name</Form.Label>
                <Form.Control
                  type='text'
                  autoFocus
                  placeholder={bookUpdate.nameUpdate}
                  name='nameUpdate'
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label className='me-3'>Price</Form.Label>
                <Form.Control
                  type='number'
                  placeholder={bookUpdate.priceUpdate}
                  name='priceUpdate'
                  onChange={handleFormChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Container>
  );
}