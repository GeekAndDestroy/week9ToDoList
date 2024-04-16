import { Container, Nav, Navbar } from "react-bootstrap"











export default function App(){
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
        <Container fluid>
        <Navbar.Brand href='/'>Kekambas Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls='nav-collapse' />
            <Navbar.Collapse id='nav-collapse'>
                <Nav className='me-auto'>
                    {isLoggedIn ? (
                        <>
                            <Nav.Link href='/'>Create Post</Nav.Link>
                            <Nav.Link href='/'>Log Out</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href='/'>Sign Up</Nav.Link>
                            <Nav.Link href='/'>Log In</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>

)
}