// style.js
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px;
  margin: 5px 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Result = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
`;
