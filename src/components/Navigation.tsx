import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';




type NavigationProps = {
    isLoggedIn: boolean
}

export default function Navigation({ isLoggedIn }: NavigationProps){
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
        <Container fluid>
        <Navbar.Brand href='/'>Git'r'Done!</Navbar.Brand>
            <Navbar.Toggle aria-controls='nav-collapse' />
            <Navbar.Collapse id='nav-collapse'>
                <Nav className='me-auto'>
                    {isLoggedIn ? (
                        <>
                            <Nav.Link href='/'>Add Task</Nav.Link>
                            <Nav.Link href='/'>View Tasks</Nav.Link>
                            <Nav.Link href='/'>Log Out</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Form className='d-flex'>
                                <InputGroup>
                                    <InputGroup.Text id="signInUsername">Username</InputGroup.Text>
                                    <Form.Control type='text' placeholder='Username' />
                                </InputGroup>
                                <InputGroup>
                                <InputGroup.Text id="signInPassword">Password</InputGroup.Text>
                                    <Form.Control type='password' placeholder='Password'/>
                                </InputGroup>
                                <Button variant="primary" type="submit">Sign In</Button>
                            </Form>
                            <Nav.Link href='/'>Sign Up</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>
)
}