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
    window.speechSynthesis.cancel();
  }

  const handleSpeakClick = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  const handleStopSpeakClick = () => {
    window.speechSynthesis.pause();
  };
  const handleResumeSpeakClick = () => {
    window.speechSynthesis.resume();
  };

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false)
  function handleUnderlineClick(){
    setUnderline(!underline)
  }
  function handleItalicClick(){
    setItalic(!italic)
  }

  function handleBoldClick() {
    if (bold) {
      setBold(false);
    } else {
      setBold(true);
    }
  }
  const textStyle = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle : italic? 'italic': 'normal',
    textDecoration : underline? 'underline' :''

  };

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
            style={textStyle}
            className="ta"
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
        <Button variant="primary m-2" onClick={handleSpeakClick}>
          Speak
        </Button>
        <Button variant="primary " onClick={handleStopSpeakClick}>
          Stop
        </Button>
        <Button variant="primary mx-2" onClick={handleResumeSpeakClick}>
          Resume
        </Button>
        <Button variant="primary " onClick={handleBoldClick}>
          Bold
        </Button>
        <Button variant="primary mx-2" onClick={handleItalicClick}>
          Italic
        </Button>
        <Button variant="primary " onClick={handleUnderlineClick}>
          Underline
        </Button>
      </Form>
      <h2 className="my-3">Your text summary</h2>
      <p>
        {text.split(". ").length} sentences {text.split(" ").length} words and{" "}
        {text.length} characters
      </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </>
  );
}

export default TextForm;
