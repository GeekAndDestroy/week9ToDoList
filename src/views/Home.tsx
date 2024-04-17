import { useState } from "react";
import TaskCard from "../components/TaskCard";

import Button from "react-bootstrap/Button";
import TaskForm from "../components/TaskForm";
import { TaskFormDataType, TaskType, UserType } from "../Types/index";

type HomeProps = {
  isLoggedIn: boolean;
  handleClick: () => void;
};

export default function Home({ isLoggedIn, handleClick }: HomeProps) {
  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      author: {
        email: "toofyboy@dogmail.com",
        userId: 3,
        username: "maverick",
        dateCreated: "Fri, 29 Mar 2024 23:53:39 GMT",
      },
      completed: false,
      createdAt: "Sat, 30 Mar 2024 20:15:55 GMT",
      description: "What's that?! Oh great, here we go again...",
      dueDate: "",
      taskId: 26,
      title: "Watch mailbox",
      userId: 3,
    },
  ]);

  const createTask = (newTaskData: TaskFormDataType) => {
    const author: UserType = {
      userId: 3,
      username: "maverick",
      email: "toofyboy@dogmail.com",
      dateCreated: "Fri, 29 Mar 2024 23:53:39 GMT",
    };
    const newTask: TaskType = {
      ...newTaskData,
      taskId: tasks.length + 1,
      createdAt: new Date().toString(),
      completed: false,
      userId: 3,
      author,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Click Me
      </Button>
      <Button
        className="w-100"
        variant="success"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add Task+"}
      </Button>
      {showForm && <TaskForm createTask={createTask} />}
      {tasks.map((p) => (
        <TaskCard key={p.taskId} task={p} />
      ))}
    </>
  );
}
