import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";

export default function FirstNav(props) {
  return (
    <>
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand><h4>{props.title}</h4></Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Brand to="/">{props.title}</Navbar.Brand> */}
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link> <h5>Home</h5></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link> <h5>About</h5></Nav.Link>
            </LinkContainer>
            {/* <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link> */}
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
