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
      { text: "Chhota Chetan", isCorrect: false },
      { text: "Tiwari", isCorrect: false },
      { text: "Anuradha", isCorrect: true },
      { text: "Babu Bhaiya", isCorrect: false },
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
      { text: "Moolchand", isCorrect: true },
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
      { text: "Rabbit", isCorrect: true },
      { text: "Dog", isCorrect: false },
      { text: "Owl", isCorrect: false },
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
    question: "In *Hera Pheri*, what is Baburao’s famous phone number?",
    options: [
      { text: "22222222", isCorrect: false },
      { text: "42042042", isCorrect: false },
      { text: "9869707007", isCorrect: true },
      { text: "1001001001", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood movie has the hilarious scene *'Utha le re baba, utha le!'*?",
    options: [
      { text: "Welcome", isCorrect: false },
      { text: "Hera Pheri", isCorrect: false },
      { text: "Dhamaal", isCorrect: false },
      { text: "Masti", isCorrect: true },
    ],
  },
  {
    question:
      "What was the name of Govinda’s hilarious twin characters in *Aankhen* (1993)?",
    options: [
      { text: "Raja & Prem", isCorrect: false },
      { text: "Bunnu & Babloo", isCorrect: false },
      { text: "Munnu & Gaurav", isCorrect: false },
      { text: "Munnu & Bunnu", isCorrect: true },
    ],
  },
  {
    question:
      "In *Garam Masala*, which of these was NOT one of Akshay Kumar’s girlfriends?",
    options: [
      { text: "Sweety", isCorrect: false },
      { text: "Pinky", isCorrect: true },
      { text: "Pooja", isCorrect: false },
      { text: "Maggie", isCorrect: false },
    ],
  },
  {
    question:
      "Which actor played the fake Mithun Chakraborty in *Chamatkar* (1992)?",
    options: [
      { text: "Paresh Rawal", isCorrect: false },
      { text: "Anupam Kher", isCorrect: false },
      { text: "Johnny Lever", isCorrect: true },
      { text: "Shakti Kapoor", isCorrect: false },
    ],
  },
  {
    question:
      "Which movie had the epic dialogue *'Ek Machhar Aadmi Ko Hijda Bana Deta Hai'*?",
    options: [
      { text: "Gunda", isCorrect: true },
      { text: "Loha", isCorrect: false },
      { text: "Deshdrohi", isCorrect: false },
      { text: "Dulhe Raja", isCorrect: false },
    ],
  },
  {
    question:
      "Which character said *'Sattar Minute Hai Tumhare Pass'* in *Chak De! India*?",
    options: [
      { text: "Kabir Khan", isCorrect: true },
      { text: "Sukhwinder Singh", isCorrect: false },
      { text: "Vikram Shergill", isCorrect: false },
      { text: "Balbir Singh", isCorrect: false },
    ],
  },
  {
    question: "Which of these movies does NOT feature a cameo by SRK?",
    options: [
      { text: "Bhoothnath", isCorrect: false },
      { text: "Saathiya", isCorrect: false },
      { text: "Heyy Babyy", isCorrect: false },
      { text: "No Entry", isCorrect: true },
    ],
  },
  {
    question:
      "In *Welcome*, what were the real names of *Uday Bhai* and *Majnu Bhai*?",
    options: [
      { text: "Uday Shetty & Majnu Bhai", isCorrect: true },
      { text: "Uday Rana & Majnu Singh", isCorrect: false },
      { text: "Uday Verma & Majnu Khan", isCorrect: false },
      { text: "Uday Chauhan & Majnu Patel", isCorrect: false },
    ],
  },
  {
    question:
      "What was the *original name* of the song *'Mera Joota Hai Japani'* from *Shree 420*?",
    options: [
      { text: "Bharat Ka Baccha", isCorrect: false },
      { text: "Hindustani Joota", isCorrect: false },
      { text: "Mera Joota Hai Hindustani", isCorrect: true },
      { text: "Awaara Hoon", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood film had a *'Koi Mil Gaya'* song before the sci-fi movie *Koi Mil Gaya*?",
    options: [
      { text: "Dilwale Dulhania Le Jayenge", isCorrect: true },
      { text: "Dil Se", isCorrect: false },
      { text: "Rangeela", isCorrect: false },
      { text: "Kaho Naa... Pyaar Hai", isCorrect: false },
    ],
  },
  {
    question: "What is the *most repeated word* in *Gunda* (1998)?",
    options: [
      { text: "Bichhoo", isCorrect: false },
      { text: "Gunda", isCorrect: false },
      { text: "Naam", isCorrect: true },
      { text: "Boss", isCorrect: false },
    ],
  },
  {
    question: "In *Dhoom 2*, what was Hrithik Roshan’s code name as a thief?",
    options: [
      { text: "X", isCorrect: false },
      { text: "Aryan", isCorrect: true },
      { text: "Shadow", isCorrect: false },
      { text: "Phantom", isCorrect: false },
    ],
  },
  {
    question:
      "In *Singh is Kinng*, what is Akshay Kumar’s full name in the movie?",
    options: [
      { text: "Happy Singh", isCorrect: true },
      { text: "Lucky Singh", isCorrect: false },
      { text: "Raju Singh", isCorrect: false },
      { text: "Bittu Singh", isCorrect: false },
    ],
  },
  {
    question: "Which actor played *double roles* in *Judwaa* (1997)?",
    options: [
      { text: "Govinda", isCorrect: false },
      { text: "Salman Khan", isCorrect: true },
      { text: "Sanjay Dutt", isCorrect: false },
      { text: "Akshay Kumar", isCorrect: false },
    ],
  },
  {
    question:
      "What was the *only dialogue* of Suniel Shetty in *Phir Hera Pheri*?",
    options: [
      { text: "Kya?", isCorrect: false },
      { text: "Khaane ke paise alag dene padenge", isCorrect: false },
      { text: "Bol raha hoon na!", isCorrect: false },
      { text: "Aree baba, maal kidhar hai?", isCorrect: true },
    ],
  },
  {
    question:
      "Which of these Bollywood films was a *remake* of *Alaipayuthey* (Tamil)?",
    options: [
      { text: "Tere Naam", isCorrect: false },
      { text: "Saathiya", isCorrect: true },
      { text: "Rehna Hai Tere Dil Mein", isCorrect: false },
      { text: "Dil Se", isCorrect: false },
    ],
  },
  {
    question: "In *Mohabbatein*, what was Big B’s famous dialogue about rules?",
    options: [
      { text: "Parampara, Pratishta, Anushasan", isCorrect: true },
      { text: "Sanskaar, Samaan, Samarpan", isCorrect: false },
      { text: "Izzat, Anushasan, Sabr", isCorrect: false },
      { text: "Shakti, Samman, Siddhant", isCorrect: false },
    ],
  },

  {
    question: "Which of these Bollywood movies is *based on a true story*?",
    options: [
      { text: "Guru", isCorrect: true },
      { text: "Kabir Singh", isCorrect: false },
      { text: "Baazigar", isCorrect: false },
      { text: "Om Shanti Om", isCorrect: false },
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
  {
    question:
      "In *Om Shanti Om*, what was the name of the film being shot when Shantipriya died?",
    options: [
      { text: "Om Shanti Om", isCorrect: false },
      { text: "Dreamy Girl", isCorrect: false },
      { text: "Om Shanti", isCorrect: false },
      { text: "Om Shanti Om (but with a subtitle)", isCorrect: true },
    ],
  },
  {
    question:
      "Which railway station did Geet miss her train at in *Jab We Met*?",
    options: [
      { text: "Ambala", isCorrect: false },
      { text: "Ratlam", isCorrect: true },
      { text: "Bhatinda", isCorrect: false },
      { text: "Ludhiana", isCorrect: false },
    ],
  },
  {
    question:
      "Which song from *Dilwale Dulhania Le Jayenge* was shot in the mustard fields?",
    options: [
      { text: "Tujhe Dekha Toh", isCorrect: true },
      { text: "Mehndi Laga Ke Rakhna", isCorrect: false },
      { text: "Ruk Ja O Dil Deewane", isCorrect: false },
      { text: "Zara Sa Jhoom Loon Main", isCorrect: false },
    ],
  },
  {
    question:
      "What was the name of the character played by Arshad Warsi in *Golmaal: Fun Unlimited*?",
    options: [
      { text: "Laxman", isCorrect: false },
      { text: "Madhav", isCorrect: true },
      { text: "Gopal", isCorrect: false },
      { text: "Lucky", isCorrect: false },
    ],
  },
  {
    question: "Which of these Bollywood movies is *based on a true story*?",
    options: [
      { text: "Guru", isCorrect: true },
      { text: "Kabir Singh", isCorrect: false },
      { text: "Baazigar", isCorrect: false },
      { text: "Om Shanti Om", isCorrect: false },
    ],
  },
  {
    question:
      "What was the full name of Amitabh Bachchan's character in *Mohabbatein*?",
    options: [
      { text: "Narayan Shankar", isCorrect: true },
      { text: "Yashvardhan Raichand", isCorrect: false },
      { text: "Raj Aryan Malhotra", isCorrect: false },
      { text: "Ravi Malhotra", isCorrect: false },
    ],
  },
  {
    question: "Which meme-worthy scene is from *Mujhse Shaadi Karogi*?",
    options: [
      { text: "Bhai ne bola karne ka matlab karne ka", isCorrect: false },
      {
        text: "Kon hai ye jisne dobarah mud ke mujhe nahi dekha",
        isCorrect: false,
      },
      { text: "Mujhe sab aata hai", isCorrect: true },
      { text: "Itni shakti hume dena data", isCorrect: false },
    ],
  },
  {
    question:
      "In *Swades*, what was the name of the village where Mohan Bhargava went?",
    options: [
      { text: "Charanpur", isCorrect: true },
      { text: "Rampur", isCorrect: false },
      { text: "Shivgad", isCorrect: false },
      { text: "Bhatinda", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood movie had the famous dialogue: *'Mere Karan Arjun aayenge'*?",
    options: [
      { text: "Karan Arjun", isCorrect: true },
      { text: "Baazigar", isCorrect: false },
      { text: "Veer-Zaara", isCorrect: false },
      { text: "Kabhi Khushi Kabhie Gham", isCorrect: false },
    ],
  },
  {
    question: "Which of these movies did NOT feature Salman Khan?",
    options: [
      { text: "Hum Saath Saath Hain", isCorrect: false },
      { text: "Hum Dil De Chuke Sanam", isCorrect: false },
      { text: "Hum Aapke Hain Koun", isCorrect: false },
      { text: "Mohabbatein", isCorrect: true },
    ],
  },
];

export default questions;
