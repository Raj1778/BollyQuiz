import styles from "./Question.module.css";
const Question = ({ question }) => {
  return (
    <>
      <div className={styles.question}>
        <h3>{question}</h3>
      </div>
    </> 
  );
};
export default Question;
