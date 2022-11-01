import React, { useState } from "react";
import Card from "./Card";

import "./Question.css";

const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
}) => {
  const [progressValue, setProgressValue] = useState(0);

  const handleClick = (isCorrect) => {
    if (questionIndex <=5) {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setProgressValue(0);
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }else if(questionIndex>=6 && questionIndex<9) {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setProgressValue(0);
      setQuestionIndex((prevIndex) => prevIndex + 1);

    }else {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setProgressValue(0);
      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };
if(questionIndex<5){
  return (
    <Card className="quecard" setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} setShowFinalPage={setShowFinalPage} setShowQuestionsPage={setShowQuestionsPage} progressValue={progressValue} setProgressValue={setProgressValue}>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card>
  );}
else{
  return (
    <Card setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} setShowFinalPage={setShowFinalPage} setShowQuestionsPage={setShowQuestionsPage} progressValue={progressValue} setProgressValue={setProgressValue
    }>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <img src={answer.answerImg} width="200" height="100" alt="Image not loading"/>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card>
  );

}
};

export default Question;