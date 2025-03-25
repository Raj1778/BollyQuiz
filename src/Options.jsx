import styles from "./Options.module.css";

const Options = ({ options }) => {
  return (
    <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={index} className={styles.option}>
            <h4>{option}</h4>
          </div>
        ))}
    </div>
  );
};

export default Options;
