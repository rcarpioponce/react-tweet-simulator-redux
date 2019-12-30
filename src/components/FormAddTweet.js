import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  const onChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, tweet } = formValue;
    if (!name || !tweet) {
      console.log("todos los campos son obligatorios");
      return false;
    }
    console.log("tweet enviado");
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Escribe el tweet"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="float-right m-t-5">
        Enviar Tweet
      </Button>
    </Form>
  );
}
