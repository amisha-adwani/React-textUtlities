
// import './App.css';
// import  Button  from 'react-bootstrap/Button';
// import  Navbar  from 'react-bootstrap/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar >Item1</Navbar>
//         <Navbar >Item1</Navbar>
//         <Navbar >Item1</Navbar>
//         <Navbar >Item1</Navbar>

//         <Button >Click Me</Button>
  
//       </header>
//     </div>
//   );
// }

// export default App;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TextUtils</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;