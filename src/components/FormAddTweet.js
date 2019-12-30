import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { validationFormAddTweetAction } from "../actions/validationActions";
import { addTweetAction } from "../actions/tweetsActions";
import { openCloseAddTweetModalAction } from "../actions/modalActions";
import uuid from "uuid/v4";
import moment from "moment";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  const dispatch = useDispatch();
  const validationFormAddTweet = state =>
    dispatch(validationFormAddTweetAction(state));

  const errorForm = state => {
    validationFormAddTweet(state);
  };

  const addTweet = state => dispatch(addTweetAction(state));
  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  const errorFormValue = useSelector(
    state => state.validations.errorFormAddTweet
  );

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
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment()
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
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
      <Button variant="primary" type="submit" className="float-right">
        Enviar Tweet
      </Button>
    </Form>
  );
}
