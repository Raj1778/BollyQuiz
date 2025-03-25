import { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import styles from "./QuizBox.module.css";
import questions from "./questions";

const QuizBox = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [questionCount, setQuestionCount] = useState(1);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const getRandomQuestion = () => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const handleOptionSelect = (option) => {
    if (quizCompleted || selectedOption) return;

    setSelectedOption(option);

    if (option.isCorrect) {
      setScore(score + 1);
    }

    if (questionCount < 10) {
      setTimeout(() => {
        setCurrentQuestion(getRandomQuestion());
        setQuestionCount(questionCount + 1);
        setSelectedOption(null);
      }, 1000);
    } else {
      setTimeout(() => setQuizCompleted(true), 1000);
    }
  };

  if (quizCompleted) {
    return (
      <div className={styles.body}>
        <div className={styles.quizBox}>
          <div className={styles.quizResults}>
            <h1>Quiz Completed!</h1>
            <h2>Your score: {score}/10</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.body}>
      <div className={styles.quizBox}>
        <div className={styles.questionCounter}>
          Question {questionCount} of 10
        </div>
        <Question question={currentQuestion.question} />
        <Options
          options={currentQuestion.options}
          handleOptionSelect={handleOptionSelect}
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
};

export default QuizBox;
