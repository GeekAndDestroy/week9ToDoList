import { useState } from 'react';
import Navigation from './components/Navigation';
import { Task } from './components/Classes';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';




export default function App(){
    // const firstName: string = 'Jeff';
    // const lastName: string = 'Chebul';
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const tasks: Task[] = []
    const handleClick = () => {
      console.log('The button has been clicked');
      setIsLoggedIn(!isLoggedIn)
    }



    const createTask = (task:string, desc:string) => {
      tasks.push(new Task(task, desc))
    }

    createTask("Buy eggs", "Only farm fresh for me!")
    createTask("Mow lawn", "Make sure the gas is full, and cut to 2.75 inches")

    return (
        <>
            <Navigation isLoggedIn={isLoggedIn}/>
            <Container>
              <Button variant='primary' onClick={handleClick}>Click Me</Button>
              <Form>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>Task:</Form.Label>
                  <Form.Control type="text" placeholder='Enter Task'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formTaskDescription'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' placeholder='Enter More Details' />
                </Form.Group>
                {/* <Button variant="primary" onClick={createTask(formTaskTitle, formTaskDescription)}>
                  Submit
                </Button> */}
              </Form>
                <Card>
                {tasks.map( p => <Card.Body key={p.task_id}>{p.title} - {p.description}</Card.Body> )}
                </Card>
            </Container>
        </>
    )
}
