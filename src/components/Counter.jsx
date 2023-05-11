import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  padding: 12px;
  background: #d5d3dc;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
const Count = styled.p`
  font-size: 16px;
  text-align: center;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <Title>Counter</Title>
      <Container>
        <Button onClick={incrementCount}>Increment</Button>
        <Button onClick={decrementCount}>Decrement</Button>
        <Button onClick={resetCount}>Reset</Button>
      </Container>
      <Count>{count}</Count>
    </>
  );
};

export default Counter;
