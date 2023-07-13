import Form from 'react-bootstrap/Form';

function TextForm(props) {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{props.heading}</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
    </Form>
    </>
  );
}

export default TextForm;