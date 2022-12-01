import React, { useEffect, useState } from "react";
import { getRandomColor } from "../GetRandomColor";
import {
  AnswerButtons,
  AnswerButton,
  AnswersContainer,
  ColorBox,
  CorrectSpan,
  GameContainer,
  GameH1,
  Result,
  WrongSpan,
} from "./ColorGuessGame.elements";

const ColorGuessGame = () => {
  const [color, setColor] = useState("#fff");
  const [answers, setAnswers] = useState([]);
  const [isWrongSelection, setIsWrongSelection] = useState(false);
  const [isCorrectSelection, setIsCorrectSelection] = useState(false);

  const colorBoxStyles = {
    backgroundColor: `${color}`,
    boxShadow: `0 0 280px ${color}`,
    outline: `5px solid ${color}`,
  };

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClick = (answer) => {
    if (answer === color) {
      setIsWrongSelection(false);
      setIsCorrectSelection(true);
      setTimeout(() => {
        generateColors();
        setIsCorrectSelection(false);
      }, 500);
    } else {
      setIsWrongSelection(true);
      setIsCorrectSelection(false);
      setTimeout(() => {
        generateColors();
        setIsWrongSelection(false);
      }, 500);
    }
  };

  return (
    <div>
      <GameH1 style={{ marginBottom: 100 }}>Guess the Color</GameH1>
      <GameContainer>
        <ColorBox style={colorBoxStyles} />
        <AnswersContainer>
          <Result>
            {isWrongSelection && <WrongSpan>Wrong answer!</WrongSpan>}
            {isCorrectSelection ? <CorrectSpan>Correct!</CorrectSpan> : ""}
          </Result>
          <AnswerButtons>
            {answers.map((answer) => (
              <AnswerButton
                onClick={() => handleAnswerClick(answer)}
                key={answer}
              >
                {answer}
              </AnswerButton>
            ))}
          </AnswerButtons>
        </AnswersContainer>
      </GameContainer>
    </div>
  );
};

export default ColorGuessGame;
