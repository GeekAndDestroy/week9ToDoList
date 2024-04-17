import { useState } from "react";
import Navigation from "./components/Navigation";
import TaskCard from "./components/TaskCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import TaskForm from "./components/TaskForm";
import { TaskFormDataType, TaskType } from "./Types/index";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    console.log("The button has been clicked");
    setIsLoggedIn(!isLoggedIn);
  };

  const [tasks, setTasks] = useState<TaskType[]>([])

  const createTask = (newTaskData: TaskFormDataType) => {
    const newTask: TaskType = {...newTaskData, taskId:tasks.length+1, createdAt:new Date().toString(), completed:false, userId:1}
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Container>
        <Button variant="primary" onClick={handleClick}>
          Click Me
        </Button>
        <Button className='w-100' variant='success' onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add Task+'}</Button>
        {showForm && <TaskForm createTask={ createTask } /> }
        {tasks.map((p) => (
          <TaskCard key={p.taskId} task={p} />
        ))}
      </Container>
    </>
  );
}
