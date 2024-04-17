import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


type NavigationProps = {
  isLoggedIn: boolean;
};

export default function Navigation({ isLoggedIn }: NavigationProps) {
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Git'r'Done!</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav className="me-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link as={ Link } to="/">Add Task</Nav.Link>
                <Nav.Link as={ Link } to="/">View Tasks</Nav.Link>
                <Nav.Link as={ Link } to="/">Log Out</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={ Link } to='/signup'>Sign Up</Nav.Link>
                <Nav.Link as={ Link } to='/'>Log In</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
