import Alert from "react-bootstrap/Alert";

function SuccessAlert(props) {
  return (
    props.alert && (
      <Alert variant={props.alert.variant}>
        <strong>{props.alert.variant}</strong> {props.alert.message}
      </Alert>
    )
  );
}

export default SuccessAlert;
