import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TaskFormDataType } from "../Types";

type TaskFormProps = {
  createTask: (data: TaskFormDataType) => void;
};

export default function TaskForm({ createTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState<TaskFormDataType>({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createTask(newTask);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task:</Form.Label>
        <Form.Control
          name="title"
          value={newTask.title}
          placeholder="Enter Task"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          placeholder="Enter More Details"
          value={newTask.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          name="dueDate"
          placeholder="Enter Due Date (optional)"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type='submit'>Add Task</Button>
    </Form>
  );
}
