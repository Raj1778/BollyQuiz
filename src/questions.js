const questions = [
  {
    question: "What was the name of SRK’s character in *Kal Ho Naa Ho*?",
    options: [
      { text: "Raj", isCorrect: false },
      { text: "Rahul", isCorrect: false },
      { text: "Aman", isCorrect: true },
      { text: "Arjun", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood movie is famous for the dialogue *'Mogambo Khush Hua'*?",
    options: [
      { text: "Sholay", isCorrect: false },
      { text: "Mr. India", isCorrect: true },
      { text: "Deewaar", isCorrect: false },
      { text: "Don", isCorrect: false },
    ],
  },
  {
    question: "In *3 Idiots*, what was Rancho’s real name in the movie?",
    options: [
      { text: "Raju Rastogi", isCorrect: false },
      { text: "Chatur Ramalingam", isCorrect: false },
      { text: "Phunsukh Wangdu", isCorrect: true },
      { text: "Farhan Qureshi", isCorrect: false },
    ],
  },
  {
    question: "Which movie had the iconic song *'Babuji Zara Dheere Chalo'*?",
    options: [
      { text: "Dum", isCorrect: true },
      { text: "Dhoom", isCorrect: false },
      { text: "Race", isCorrect: false },
      { text: "Desi Boyz", isCorrect: false },
    ],
  },
  {
    question: "Who played the role of *Poo* in *Kabhi Khushi Kabhie Gham*?",
    options: [
      { text: "Kareena Kapoor", isCorrect: true },
      { text: "Rani Mukerji", isCorrect: false },
      { text: "Preity Zinta", isCorrect: false },
      { text: "Kajol", isCorrect: false },
    ],
  },
  {
    question:
      "In *Andaz Apna Apna*, what were Aamir and Salman's character names?",
    options: [
      { text: "Prem & Amar", isCorrect: false },
      { text: "Bunty & Babli", isCorrect: false },
      { text: "Raj & Rahul", isCorrect: false },
      { text: "Amar & Prem", isCorrect: true },
    ],
  },
  {
    question: "What does the *Bhaag Milkha Bhaag* movie revolve around?",
    options: [
      { text: "A marathon runner", isCorrect: false },
      { text: "Milkha Singh’s life", isCorrect: true },
      { text: "An army officer", isCorrect: false },
      { text: "A cycling champion", isCorrect: false },
    ],
  },
  {
    question: "Which of these movies has Salman Khan NOT starred in?",
    options: [
      { text: "Wanted", isCorrect: false },
      { text: "Partner", isCorrect: false },
      { text: "Tere Naam", isCorrect: false },
      { text: "Chennai Express", isCorrect: true },
    ],
  },
  {
    question:
      "Which Bollywood character is famous for saying *'Aata Majhi Satakli'*?",
    options: [
      { text: "Singham", isCorrect: true },
      { text: "Chulbul Pandey", isCorrect: false },
      { text: "Kabir", isCorrect: false },
      { text: "Krrish", isCorrect: false },
    ],
  },
  {
    question: "Which of these is NOT a real Bollywood movie?",
    options: [
      { text: "Gunda", isCorrect: false },
      { text: "Deshdrohi", isCorrect: false },
      { text: "Bhootnath", isCorrect: false },
      { text: "Dhoom 5", isCorrect: true },
    ],
  },
  {
    question:
      "In *Kuch Kuch Hota Hai*, what was the name of Rani Mukerji’s character?",
    options: [
      { text: "Pooja", isCorrect: false },
      { text: "Anjali", isCorrect: false },
      { text: "Tina", isCorrect: true },
      { text: "Simran", isCorrect: false },
    ],
  },
  {
    question:
      "Which game do Rahul and Anjali often play in *Kuch Kuch Hota Hai*?",
    options: [
      { text: "Basketball", isCorrect: true },
      { text: "Cricket", isCorrect: false },
      { text: "Badminton", isCorrect: false },
      { text: "Football", isCorrect: false },
    ],
  },
  {
    question:
      "In *Sanam Teri Kasam*, what is the profession of Harshvardhan Rane’s character?",
    options: [
      { text: "Doctor", isCorrect: false },
      { text: "Lawyer", isCorrect: false },
      { text: "Musician", isCorrect: false },
      { text: "Writer", isCorrect: true },
    ],
  },
  {
    question:
      "What is the name of the scammer who tricks Raju, Shyam, and Baburao in *Phir Hera Pheri*?",
    options: [
      { text: "Chhota Chetan", isCorrect: true },
      { text: "Tiwari", isCorrect: false },
      { text: "Anuradha", isCorrect: false },
      { text: "Babu Bhaiya", isCorrect: false },
    ],
  },
  {
    question:
      "In *Phir Hera Pheri*, which animal is used in Raju’s fake investment scheme?",
    options: [
      { text: "Monkey", isCorrect: false },
      { text: "Snake", isCorrect: false },
      { text: "Rabbit", isCorrect: true },
      { text: "Goat", isCorrect: false },
    ],
  },
  {
    question:
      "Which Amitabh Bachchan movie features the iconic dialogue *'Rishtey Mein Toh Hum Tumhare Baap Lagte Hain'*?",
    options: [
      { text: "Deewaar", isCorrect: false },
      { text: "Sholay", isCorrect: false },
      { text: "Agneepath", isCorrect: true },
      { text: "Shahenshah", isCorrect: false },
    ],
  },
  {
    question: "In *Sholay*, what is Amitabh Bachchan’s character name?",
    options: [
      { text: "Jai", isCorrect: true },
      { text: "Veeru", isCorrect: false },
      { text: "Gabbar", isCorrect: false },
      { text: "Thakur", isCorrect: false },
    ],
  },
  {
    question:
      "Which Govinda movie features the song *'Akhiyon Se Goli Maare'*?",
    options: [
      { text: "Dulhe Raja", isCorrect: false },
      { text: "Coolie No. 1", isCorrect: false },
      { text: "Hero No. 1", isCorrect: false },
      { text: "Bade Miyan Chote Miyan", isCorrect: true },
    ],
  },
  {
    question: "In *Dulhe Raja*, who plays the strict hotel owner?",
    options: [
      { text: "Kader Khan", isCorrect: true },
      { text: "Johnny Lever", isCorrect: false },
      { text: "Paresh Rawal", isCorrect: false },
      { text: "Shakti Kapoor", isCorrect: false },
    ],
  },
  {
    question:
      "In *De Dana Dan*, what is the name of the dog that causes chaos?",
    options: [
      { text: "Moti", isCorrect: false },
      { text: "Tiger", isCorrect: false },
      { text: "Bholu", isCorrect: true },
      { text: "Bunty", isCorrect: false },
    ],
  },
  {
    question:
      "In *Andhadhun*, what is the profession of Ayushmann Khurrana’s character?",
    options: [
      { text: "Singer", isCorrect: false },
      { text: "Pianist", isCorrect: true },
      { text: "Magician", isCorrect: false },
      { text: "Photographer", isCorrect: false },
    ],
  },
  {
    question: "Which animal plays a key role in *Andhadhun*'s climax?",
    options: [
      { text: "Cat", isCorrect: false },
      { text: "Rabbit", isCorrect: false },
      { text: "Dog", isCorrect: false },
      { text: "Owl", isCorrect: true },
    ],
  },
  {
    question: "Which actor played the role of *Kabir* in *Kabir Singh*?",
    options: [
      { text: "Ranveer Singh", isCorrect: false },
      { text: "Shahid Kapoor", isCorrect: true },
      { text: "Sidharth Malhotra", isCorrect: false },
      { text: "Vicky Kaushal", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood movie is known for the dialogue *'Don ko pakadna mushkil hi nahi, namumkin hai'*?",
    options: [
      { text: "Don", isCorrect: true },
      { text: "Sholay", isCorrect: false },
      { text: "Dhoom", isCorrect: false },
      { text: "Badshah", isCorrect: false },
    ],
  },
];

export default questions;
