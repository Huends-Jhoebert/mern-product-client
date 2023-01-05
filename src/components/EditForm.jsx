import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function EditForm(props) {
  const url = "https://mern-product-server.onrender.com/products/";
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [id, setID] = useState(props.id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = { name, description, price };
    axios
      .put(`${url}${id}`, product)
      .then((res) => {
        console.log(res.data.message);
        Swal.fire({
          title: "Message",
          text: res.data.message,
          icon: "success",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter product name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Enter product price"
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter product description"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditForm;
