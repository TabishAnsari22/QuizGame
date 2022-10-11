import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Quiz = () => {
  const fetchQuestions = async () => {
    let baseUrl = "http://localhost:3001";
    try {
      const response = await axios.get(`${baseUrl}/home`);
      console.log("response", response);
      if (response.status === 200) {
        console.log(response.data);
        setQuestions([...response.data]);
      } else {
        console.log("response: ", response.data);
      }
    } catch (e) {
      console.log("Error in api", e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // const questions = [
  //   {
  //     question: "1. How many stanzas are there in Pakistan’s national anthem?",
  //     answerOption: [
  //       {
  //         answer: " THREE stanzas in Pakistan’s national anthem",
  //         isCorrect: true,
  //       },
  //       {
  //         answer: " FIVE stanzas in Pakistan’s national anthem",
  //         isCorrect: false,
  //       },
  //       {
  //         answer: " TWO stanzas in Pakistan’s national anthem",
  //         isCorrect: false,
  //       },
  //       {
  //         answer: " SIX stanzas in Pakistan’s national anthem",
  //         isCorrect: false,
  //       },
  //     ],
  //   },
  //   {
  //     question: "2. What was the old name of PIA?",
  //     answerOption: [
  //       {
  //         answer: "The old name of PIA was Jinnah International Airport",
  //         isCorrect: false,
  //       },
  //       { answer: "The old name of PIA was Orient Airways", isCorrect: true },
  //       {
  //         answer: "The old name of PIA was Abul Hashwani International Airport",
  //         isCorrect: false,
  //       },
  //       {
  //         answer: "The old name of PIA was Allama Iqbal International Airport",
  //         isCorrect: false,
  //       },
  //     ],
  //   },
  //   {
  //     question: "3. In which year Pakistan became a Republic?",
  //     answerOption: [
  //       { answer: "Pakistan became a Republic in 1952.", isCorrect: false },
  //       { answer: "Pakistan became a Republic in 1955.", isCorrect: false },
  //       { answer: "Pakistan became a Republic in 1959.", isCorrect: false },
  //       { answer: "Pakistan became a Republic in 1956.", isCorrect: true },
  //     ],
  //   },
  //   {
  //     question:
  //       "4. According to population, which is the largest city in Pakistan?",
  //     answerOption: [
  //       { answer: "The city of Lahor", isCorrect: false },
  //       { answer: "The city of Islamabad", isCorrect: false },
  //       { answer: "The city of Lights, Karachi", isCorrect: true },
  //       { answer: "The city of Hyderabad", isCorrect: false },
  //     ],
  //   },
  // ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Score, setScore] = useState(false);
  const [showScore, setShowScore] = useState(0);
  const [question, setQuestions] = useState([]);

  const Clickhandler = (isCorrect) => {
    if (isCorrect === true) {
      setShowScore(showScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore(true);
    }
  };

  return (
    <>
      {Score ? (
        <div className="score">
          <div className="result">
            
              {
                showScore >= 3 ? <h1>You win</h1> : <h1>Game Over</h1>
              }
            
            Your Score {showScore} out of {question.length}
          </div>
          <div className="last">
            <button
              className="btn1"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(false);
                setShowScore(0);
              }}
            >
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div className="background">
          <div className="main">
            <div className="box">
              <div>
                <div className="queCount">
                  <span> {currentQuestion + 1} </span>/ {question.length}
                </div>
                <div className="question">
                  {question[currentQuestion]?.question}
                </div>
              </div>
              <div className="answers">
                {question[currentQuestion]?.answerOption?.map(
                  (answerOption) => {
                    return (
                      <button
                        className="btn"
                        onClick={() => Clickhandler(answerOption?.isCorrect)}
                      >
                        {answerOption?.answer}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
