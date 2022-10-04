import React, { useState } from "react";
// import img from '../Commponents/image/img.jpg'

const Quiz = () => {
  const questions = [
    {
      question: "1.How many stanzas are there in Pakistan’s national anthem?",
      answerOption: [
        {
          answer: " THREE stanzas in Pakistan’s national anthem",
          isCorrect: true,
        },
        {
          answer: " FIVE stanzas in Pakistan’s national anthem",
          isCorrect: false,
        },
        {
          answer: " TWO stanzas in Pakistan’s national anthem",
          isCorrect: false,
        },
        {
          answer: " SIX stanzas in Pakistan’s national anthem",
          isCorrect: false,
        },
      ],
    },
    {
      question: "2.What was the old name of PIA?",
      answerOption: [
        {
          answer: "The old name of PIA was Jinnah International Airport",
          isCorrect: false,
        },
        { answer: "The old name of PIA was Orient Airways", isCorrect: true },
        {
          answer: "The old name of PIA was Abul Hashwani International Airport",
          isCorrect: false,
        },
        {
          answer: "The old name of PIA was Allama Iqbal International Airport",
          isCorrect: false,
        },
      ],
    },
    {
      question: "3.In which year Pakistan became a Republic?",
      answerOption: [
        { answer: "Pakistan became a Republic in 1952.", isCorrect: false },
        { answer: "Pakistan became a Republic in 1955.", isCorrect: false },
        { answer: "Pakistan became a Republic in 1959.", isCorrect: false },
        { answer: "Pakistan became a Republic in 1956.", isCorrect: true },
      ],
    },
    {
      question:
        "4.According to population, which is the largest city in Pakistan?",
      answerOption: [
        { answer: "The city of Lahor", isCorrect: false },
        { answer: "The city of Islamabad", isCorrect: false },
        { answer: "The city of Lights, Karachi", isCorrect: true },
        { answer: "The city of Hyderabad", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Score, setScore] = useState(false);
  const [showScore, setShowScore] = useState(0);

  const Clickhandle = (isCorrect) => {
    if (isCorrect === true) {
      setShowScore(showScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore(true);
    }
  };

  return (
    <>
      {Score ? (
        <div className="score">
          <div className="result">Your Socre {showScore} out of {questions.length}</div>
        </div>
      ) : (
        <div className="background">
           
          <div className="main">
            <div>
              <div className="queCount">
                <span>Question 1</span>/{questions.length}
              </div>
              <div className="question">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answers">
              {questions[currentQuestion].answerOption.map((answerOption) => (
                <button onClick={() => Clickhandle(answerOption.isCorrect)}>
                  {answerOption.answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
