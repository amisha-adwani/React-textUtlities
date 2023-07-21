import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function FirstNav(props) {
  return (
    <>
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container>
          <Navbar.Brand to="/">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
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
