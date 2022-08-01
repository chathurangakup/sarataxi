import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
 // margin-top: 20px;
  //margin-bottom: 20px;
  width: 70%;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;