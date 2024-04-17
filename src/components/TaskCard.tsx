import { TaskType } from "../Types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type TaskCardProps = {
  task: TaskType;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="my-3" bg="dark" text="light">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Button variant="success">Mark Finished</Button>
      </Card.Body>
    </Card>
  );
}
