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
  function handleClearClick() {
    let newText = "";
    setText(newText);
  }

  const [text, setText] = useState("");
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
        <Button variant="primary " onClick={handleClearClick}>
          Clear
        </Button>
      </Form>
      <h2 className="my-3">Your text summary</h2>
      <p>
        {text.split(". ").length} sentences {text.split(" ").length} words and{" "}
        {text.length} characters
      </p>
    </>
  );
}

export default TextForm;
