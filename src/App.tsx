import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";

function App() {
 const [loading,setLoading] =  useState(false);
 const [questions, setQuestions] = useState([]);
 const [number, setNumber] = useState(0);
 const [userAnswers, setUserAnswers] = useState([]);
 const {score, setScore} = useState(0);
 const [gameOver, setGameOver] useState(true);


const startTrivia = async () => {

  }

const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

}

  return (
    <div className="App">
      <h1>Test your trivia QUIZ</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score : </p>
      <p className=''></p>
      <QuestionCard questionNmbr={number + 1}/>
      <button className="next" onClick={nextQuestion}></button>
    </div>
  );
}

export default App
