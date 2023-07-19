import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

export default function FirstNav(props) {
  return (
    <>
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={`Enable ${props.mode === "dark" ? "light" : "dark"} mode`}
            onClick={props.onClick}
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          />
        </Container>
      </Navbar>
      {/* <SuccessAlert
        variant="success"
        message={` ${props.mode === "dark" ? "dark" : "light"} mode enabled`}
      /> */}
    </>
  );
}

FirstNav.propTypes = {
  title: PropTypes.string.isRequired,
};

FirstNav.defaultProps = {
  title: "TU",
};
