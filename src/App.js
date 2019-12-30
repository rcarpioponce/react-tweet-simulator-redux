import React from "react";
import { Container } from "react-bootstrap";

import Menu from "./components/Menu";
import Modal from "./components/Modal";
import FormAddTweet from "./components/FormAddTweet";
//import store
import store from "./store";
import { Provider } from "react-redux";
import TweetList from "./components/TweetsList";

export default function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">TWEETS</h1>
        <TweetList />
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
  );
}
