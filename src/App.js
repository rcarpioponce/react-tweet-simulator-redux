import React from "react";
import { Container } from "react-bootstrap";

import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <Menu />
      <Container className="mt-5">
        <h1 class="text-center">TWEETS</h1>
      </Container>
    </>
  );
}
