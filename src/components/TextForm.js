import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function TextForm(props) {
  const [text, setText] = useState("");
  const checkEmptyText = () => {
    if (text === "") {
      props.showAlert("warning", "please type in some text");
      return false;
    }
    return true;
  };
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleUpClick() {
    if (checkEmptyText()) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("success", "uppercased");
    }
  }
  function handleLoClick() {
    if (checkEmptyText()) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("success", "lowercased");
    }
  }
  function handleClearClick() {
    if (checkEmptyText()) {
      let newText = "";
      setText(newText);
      window.speechSynthesis.cancel();
      props.showAlert("success", "cleared");
    }
  }

  const handleSpeakClick = () => {
    if (checkEmptyText()) {
      let utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      props.showAlert("success", "speaking");
    }
  };
  const handleStopSpeakClick = () => {
    if (checkEmptyText()) {
      window.speechSynthesis.pause();
      props.showAlert("success", "stopped speaking");
    }
  };
  const handleResumeSpeakClick = () => {
    if (checkEmptyText()) {
      window.speechSynthesis.resume();
      props.showAlert("success", "resumed speaking");
    }
  };

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  function handleUnderlineClick() {
    if (checkEmptyText()) {
      setUnderline(!underline);
      props.showAlert("success", "underline applied to text");
    }
  }
  function handleItalicClick() {
    if (checkEmptyText()) {
      setItalic(!italic);
      props.showAlert("success", "italic applied to text");
    }
  }

  function handleBoldClick() {
    if (checkEmptyText()) {
      if (bold) {
        setBold(false);
      } else {
        setBold(true);
      }
      props.showAlert("success", "bold applied to text");
    }
  }
  const textStyle = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "",
  };

  return (
    <>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          data-bs-theme={props.mode}
        >
          <Form.Label>{props.heading}</Form.Label>
          <Form.Control
            as="textarea"
            value={text}
            onChange={handleChange}
            rows={4}
            style={textStyle}
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
        {text === ''? '0': text.split(". ").length} sentences, 
         {text === ''? '0': text.split(" ").length} words and {text.length} characters
      </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </>
  );
}

export default TextForm;
