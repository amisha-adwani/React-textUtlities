import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function TextForm(props) {
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleLoClick() {
    let newText = text.toLowerCase();
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
        <Button variant="primary" onClick={handleUpClick}>
          UpperCase
        </Button>
        <Button variant="primary mx-2" onClick={handleLoClick}>
          LowerCase
        </Button>
      </Form>
    </>
  );
}

export default TextForm;
