"use client";

import { Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">ACN</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
