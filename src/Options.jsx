import styles from "./Options.module.css";

const Options = ({ options, handleOptionSelect, selectedOption }) => {
  const getOptionClass = (option) => {
    if (!selectedOption) return styles.option;
    if (option.isCorrect) return `${styles.option} ${styles.correct}`;
    if (option === selectedOption && !option.isCorrect) {
      return `${styles.option} ${styles.incorrect}`;
    }
    return styles.option;
  };

  return (
    <div className={styles.optionsContainer}>
      {options.map((option, index) => (
        <div
          key={index}
          className={getOptionClass(option)}
          onClick={() => handleOptionSelect(option)}
        >
          <h4>{option.text}</h4>
        </div>
      ))}
    </div>
  );
};

export default Options;
