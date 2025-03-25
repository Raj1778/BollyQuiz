import Question from "./Question";
import Options from "./Options";
import styles from "./QuizBox.module.css";
const QuizBox = () => {
  const questions = [
    {
      question: "What was the name of SRK’s character in *Kal Ho Naa Ho*?",
      options: ["Raj", "Rahul", "Aman", "Arjun"],
    },
    {
      question:
        "Which Bollywood movie is famous for the dialogue *'Mogambo Khush Hua'*?",
      options: ["Sholay", "Mr. India", "Deewaar", "Don"],
    },
    {
      question: "In *3 Idiots*, what was Rancho’s real name in the movie?",
      options: [
        "Raju Rastogi",
        "Chatur Ramalingam",
        "Phunsukh Wangdu",
        "Farhan Qureshi",
      ],
    },
    {
      question: "Which movie had the iconic song *'Babuji Zara Dheere Chalo'*?",
      options: ["Dum", "Dhoom", "Race", "Desi Boyz"],
    },
    {
      question: "Who played the role of *Poo* in *Kabhi Khushi Kabhie Gham*?",
      options: ["Kareena Kapoor", "Rani Mukerji", "Preity Zinta", "Kajol"],
    },
    {
      question:
        "In *Andaz Apna Apna*, what were Aamir and Salman's character names?",
      options: ["Prem & Amar", "Bunty & Babli", "Raj & Rahul", "Ram & Lakhan"],
    },
    {
      question: "What does the *Bhaag Milkha Bhaag* movie revolve around?",
      options: [
        "A marathon runner",
        "Milkha Singh’s life",
        "An army officer",
        "A cycling champion",
      ],
    },
    {
      question: "Which of these movies has Salman Khan NOT starred in?",
      options: ["Wanted", "Partner", "Tere Naam", "Chennai Express"],
    },
    {
      question:
        "Which Bollywood character is famous for saying *'Aata Majhi Satakli'*?",
      options: ["Singham", "Chulbul Pandey", "Kabir", "Krrish"],
    },
    {
      question: "Which of these is NOT a real Bollywood movie?",
      options: ["Gunda", "Deshdrohi", "Bhootnath", "Dhoom 5"],
    },
  ];
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  return (
    <div className={styles.body}>
      <div className={styles.quizBox}>
        <Question question={randomQuestion.question}></Question>
        <Options options={randomQuestion.options}></Options>
      </div>
    </div>
  );
};
export default QuizBox;
