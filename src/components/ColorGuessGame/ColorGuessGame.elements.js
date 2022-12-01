import styled from "styled-components";

export const GameH1 = styled.h1`
  text-shadow: 5px 5px 0 #1a1a1a;
`;
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ColorBox = styled.div`
  width: 500px;
  height: 200px;
  border-radius: 20px;
  transition: all 200ms ease-in-out;
  z-index: -1;
  border: 4px solid #fff;
`;
export const AnswersContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const AnswerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const AnswerButton = styled.button`
  font-size: 20px;
  text-align: center;
  padding: 6px 10px;
`;
export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export const CorrectSpan = styled.span`
  padding: 7px 10px;
  background-color: #1a1a1a;
  color: lightgreen;
  font-size: 30px;
  border-radius: 10px;
  border: 2px solid lightgreen;
  outline: 5px solid #1a1a1a;
  box-shadow: 0 0 100px lightgreen;
`;
export const WrongSpan = styled.span`
  padding: 7px 10px;
  background-color: #1a1a1a;
  color: red;
  font-size: 30px;
  border-radius: 10px;
  border: 2px solid red;
  outline: 5px solid #1a1a1a;
  box-shadow: 0 0 100px red;
`;
