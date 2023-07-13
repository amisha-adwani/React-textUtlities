import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function TextForm(props) {
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const [text, setText] = useState("Enter your text");
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{props.heading}</Form.Label>
          <Form.Control
            as="textarea"
            value={text}
            onChange={handleChange}
            rows={4}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          UpperCase
        </Button>
      </Form>
    </>
  );
}

export default TextForm;
