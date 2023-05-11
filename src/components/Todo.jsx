import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  padding: 12px;
  background: #d5d3dc;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 16px 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const Description = styled.span`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  padding: 4px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, description: taskInput }]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskList = tasks.map(({ id, description }) => (
    <ListItem key={id}>
      <Description>{description}</Description>
      <DeleteButton onClick={() => deleteTask(id)}>Delete</DeleteButton>
    </ListItem>
  ));

  return (
    <>
      <Title>Todo App</Title>
      <Container>
        <div>
          <Input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter task description"
          />
          <Button onClick={addTask}>Add Task</Button>
        </div>
        <List>{taskList}</List>
      </Container>
    </>
  );
};

export default Todo;
