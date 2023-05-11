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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const ErrorMsg = styled.span`
  color: red;
  margin: 8px;
`;

const Button = styled.button`
  margin: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserData = styled.div`
  margin-top: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const UserField = styled.span`
  margin: 8px;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  margin: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #ff1744;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [showUserData, setShowUserData] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.email || !data.password || !data.confirmPassword) {
      setErrorMsg("please fill in all fields");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setErrorMsg("passwords don't match");
      return;
    }
    setErrorMsg("");
    setShowUserData(true);
  };

  const handleDeleteUser = () => {
    setData({ email: "", password: "", confirmPassword: "" });
    setErrorMsg("");
    setShowUserData(false);
  };

  return (
    <>
      <Title>Signup Form</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleInputChange}
        />
        <ErrorMsg>{errorMsg}</ErrorMsg>
        <Button type="submit">Submit</Button>
      </Form>
      <UserDataContainer>
        {showUserData && (
          <UserData>
            <UserField>Email: {data.email} </UserField>
            <UserField>Email: {data.password} </UserField>
            <UserField>Email: {data.confirmPassword} </UserField>
            <DeleteButton onClick={handleDeleteUser}> Delete</DeleteButton>
          </UserData>
        )}
      </UserDataContainer>
    </>
  );
};
export default Signup;
