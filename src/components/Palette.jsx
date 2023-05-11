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

const Button = styled.button`
  background: ${(props) => props.color};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.color};
  border-radius: 3px;
  cursor: pointer;
`;

const ColorsContainer = styled.div`
  padding: 2em;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const colors = ["indigo", "blue", "pink", "yellow", "purple"];

const Palette = () => {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const colorButtons = colors.map((color, index) => (
    <Button key={index} color={color} onClick={() => changeColor(color)}>
      {color}
    </Button>
  ));
  return (
    <>
      <Title>Palette</Title>
      <ColorsContainer color={color}>{colorButtons}</ColorsContainer>
    </>
  );
};

export default Palette;
