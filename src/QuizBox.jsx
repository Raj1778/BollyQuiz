import { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import styles from "./QuizBox.module.css";
import questions from "./questions";

const QuizBox = () => {
  const getRandomQuestion = () =>
    questions[Math.floor(Math.random() * questions.length)];

  // Define different background positions
  const positions = [
    "center center",
    "top left",
    "top right",
    "bottom left",
    "bottom right",
    "center top",
    "center bottom",
    "left center",
    "right center",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const [questionCount, setQuestionCount] = useState(1);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [bgPosition, setBgPosition] = useState(
    positions[Math.floor(Math.random() * positions.length)]
  );

  const handleOptionSelect = (option) => {
    if (quizCompleted || selectedOption) return;

    setSelectedOption(option);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionCount < 10) {
      setTimeout(() => {
        setCurrentQuestion(getRandomQuestion());
        setQuestionCount((prevCount) => prevCount + 1);
        setSelectedOption(null);

        // Change background position randomly
        setBgPosition(positions[Math.floor(Math.random() * positions.length)]);
      }, 1000);
    } else {
      setTimeout(() => setQuizCompleted(true), 1000);
    }
  };

  return (
    <div className={styles.body} style={{ backgroundPosition: bgPosition }}>
      <div className={styles.quizBox}>
        {!quizCompleted ? (
          <>
            <div className={styles.questionCounter}>
              Question {questionCount} of 10
            </div>
            <Question question={currentQuestion.question} />
            <Options
              options={currentQuestion.options}
              handleOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
            />
          </>
        ) : (
          <div className={styles.quizResults}>
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score}/10</p>
            <button
              className={styles.restart}
              onClick={() => window.location.reload()}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizBox;
