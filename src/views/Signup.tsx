import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

type SignupProps = {}

export default function Signup({}: SignupProps) {
  return (
    <>
    <Form>
    <InputGroup>
      <InputGroup.Text id="signInUsername">
        Username
      </InputGroup.Text>
      <Form.Control type="text" placeholder="Username" />
    </InputGroup>
    <InputGroup>
      <InputGroup.Text id="signInPassword">
        Password
      </InputGroup.Text>
      <Form.Control type="password" placeholder="Password" />
    </InputGroup>
    <Button variant="primary" type="submit">
      Sign In
    </Button>
  </Form>
  <Nav.Link as={ Link } to="/">Sign Up</Nav.Link>
  </>
  )
}