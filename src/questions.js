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
      { text: "Ranchoddas Shamaldas Chanchad", isCorrect: false },
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
      { text: "Vicky & Arjun", isCorrect: false },
      { text: "Bunty & Babli", isCorrect: false },
      { text: "Raj & Rahul", isCorrect: false },
      { text: "Amar & Prem", isCorrect: true },
    ],
  },
  {
    question: "What does the *Bhaag Milkha Bhaag* movie revolve around?",
    options: [
      { text: "A footballer", isCorrect: false },
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
      { text: "Race 4", isCorrect: true },
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
      { text: "Lawyer", isCorrect: true },
      { text: "Musician", isCorrect: false },
      { text: "Writer", isCorrect: false },
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
      { text: "Agneepath", isCorrect: false },
      { text: "Shahenshah", isCorrect: true },
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
      "Which Rajesh Khanna movie features the dialogue 'Pushpa, I hate tears'?",
    options: [
      { text: "Anand", isCorrect: false },
      { text: "Kati Patang", isCorrect: false },
      { text: "Amar Prem", isCorrect: true },
      { text: "Bawarchi", isCorrect: false },
    ],
  },
  {
    question:
      "In which Amitabh Bachchan movie does he say, 'Aaj mere paas gaadi hai, bungla hai, paisa hai, tumhare paas kya hai?'",
    options: [
      { text: "Deewar", isCorrect: true },
      { text: "Sholay", isCorrect: false },
      { text: "Zanjeer", isCorrect: false },
      { text: "Trishul", isCorrect: false },
    ],
  },
  {
    question:
      "Which Shah Rukh Khan movie features the iconic dialogue 'Bade bade deshon mein aisi choti choti baatein hoti rehti hain'?",
    options: [
      { text: "Dilwale Dulhania Le Jayenge", isCorrect: true },
      { text: "Kabhi Khushi Kabhie Gham", isCorrect: false },
      { text: "Kuch Kuch Hota Hai", isCorrect: false },
      { text: "Mohabbatein", isCorrect: false },
    ],
  },
  {
    question:
      "Which Salman Khan movie features the dialogue 'Ek baar jo maine commitment kar di, toh phir main apne aap ki bhi nahi sunta'?",
    options: [
      { text: "Wanted", isCorrect: true },
      { text: "Kick", isCorrect: false },
      { text: "Dabangg", isCorrect: false },
      { text: "Bodyguard", isCorrect: false },
    ],
  },

  {
    question:
      "Which Rajesh Khanna movie features the dialogue 'Zindagi badi honi chahiye, lambi nahi'?",
    options: [
      { text: "Anand", isCorrect: true },
      { text: "Safar", isCorrect: false },
      { text: "Bawarchi", isCorrect: false },
      { text: "Kati Patang", isCorrect: false },
    ],
  },
  {
    question:
      "In which Amitabh Bachchan movie does he say, 'Hum jahan khade hote hain, line wahin se shuru hoti hai'?",
    options: [
      { text: "Kaalia", isCorrect: true },
      { text: "Shahenshah", isCorrect: false },
      { text: "Don", isCorrect: false },
      { text: "Coolie", isCorrect: false },
    ],
  },
  {
    question:
      "Which Shah Rukh Khan movie features the dialogue 'Naam toh suna hoga'?",
    options: [
      { text: "Dil To Pagal Hai", isCorrect: false },
      { text: "Baazigar", isCorrect: false },
      { text: "Dilwale Dulhania Le Jayenge", isCorrect: false },
      { text: "Dil To Pagal Hai", isCorrect: true },
    ],
  },
  {
    question:
      "Which Salman Khan movie features the dialogue 'Mujh par ek ehsaan karna ki mujh par koi ehsaan mat karna'?",
    options: [
      { text: "Bodyguard", isCorrect: true },
      { text: "Sultan", isCorrect: false },
      { text: "Bajrangi Bhaijaan", isCorrect: false },
      { text: "Dabangg", isCorrect: false },
    ],
  },
  {
    question:
      "Which Manoj Bajpayee movie features the dialogue 'Mumbai ka king kaun? Bhiku Mhatre!'?",
    options: [
      { text: "Satya", isCorrect: true },
      { text: "Rajneeti", isCorrect: false },
      { text: "Shool", isCorrect: false },
      { text: "Shootout at Lokhandwala", isCorrect: false },
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
    question:
      "Which Bollywood movie has the hilarious scene *'Utha le re baba, utha le!'*?",
    options: [
      { text: "Welcome", isCorrect: false },
      { text: "Hera Pheri", isCorrect: false },
      { text: "Dhamaal", isCorrect: false },
      { text: "Phir Hera Pheri", isCorrect: true },
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
  {
    question:
      "Which movie revolves around a terminally ill patient named Anand, who spreads joy despite his illness?",
    options: [
      { text: "Anand", isCorrect: true },
      { text: "Bawarchi", isCorrect: false },
      { text: "Mili", isCorrect: false },
      { text: "Safar", isCorrect: false },
    ],
  },
  {
    question:
      "In which movie does Amitabh Bachchan play a vigilante who wears a steel arm and fights against corruption?",
    options: [
      { text: "Shahenshah", isCorrect: true },
      { text: "Coolie", isCorrect: false },
      { text: "Zanjeer", isCorrect: false },
      { text: "Kaalia", isCorrect: false },
    ],
  },
  {
    question:
      "Which Govinda movie features him as a lawyer who falls in love with a ghost?",
    options: [
      { text: "Jis Desh Mein Ganga Rehta Hai", isCorrect: false },
      { text: "Hatya", isCorrect: false },
      { text: "Aunty No. 1", isCorrect: false },
      { text: "Chhote Sarkar", isCorrect: true },
    ],
  },
  {
    question:
      "Which Bollywood thriller follows the story of a blind pianist who accidentally witnesses a murder?",
    options: [
      { text: "Andhadhun", isCorrect: true },
      { text: "Badla", isCorrect: false },
      { text: "Talaash", isCorrect: false },
      { text: "Kahaani", isCorrect: false },
    ],
  },
  {
    question:
      "In which movie does Shah Rukh Khan play a NASA scientist who returns to India to find his childhood nanny?",
    options: [
      { text: "Swades", isCorrect: true },
      { text: "Chak De! India", isCorrect: false },
      { text: "My Name is Khan", isCorrect: false },
      { text: "Kabhi Alvida Naa Kehna", isCorrect: false },
    ],
  },
  {
    question:
      "Which Salman Khan movie is about a wrestler who battles personal and professional struggles?",
    options: [
      { text: "Sultan", isCorrect: true },
      { text: "Tiger Zinda Hai", isCorrect: false },
      { text: "Bajrangi Bhaijaan", isCorrect: false },
      { text: "Kick", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood thriller follows Vidya Balan as she searches for her missing husband in Kolkata?",
    options: [
      { text: "Kahaani", isCorrect: true },
      { text: "Raaz", isCorrect: false },
      { text: "Murder 2", isCorrect: false },
      { text: "A Wednesday!", isCorrect: false },
    ],
  },
  {
    question:
      "Which movie is about a group of friends who reunite and reflect on their lives after one of them dies?",
    options: [
      { text: "Rock On!!", isCorrect: false },
      { text: "Dil Chahta Hai", isCorrect: true },
      { text: "Zindagi Na Milegi Dobara", isCorrect: false },
      { text: "Lakshya", isCorrect: false },
    ],
  },
  {
    question:
      "Which movie follows an autistic man’s journey across America to meet the President?",
    options: [
      { text: "Taare Zameen Par", isCorrect: false },
      { text: "My Name is Khan", isCorrect: true },
      { text: "Barfi!", isCorrect: false },
      { text: "Black", isCorrect: false },
    ],
  },
  {
    question:
      "Which Govinda movie is about a man who has a lookalike and they both create chaos in a fun-filled comedy?",
    options: [
      { text: "Coolie No. 1", isCorrect: false },
      { text: "Hero No. 1", isCorrect: false },
      { text: "Aankhen", isCorrect: true },
      { text: "Partner", isCorrect: false },
    ],
  },
  {
    question:
      "Which thriller movie revolves around a murder investigation where everything is not as it seems, starring Amitabh Bachchan and Taapsee Pannu?",
    options: [
      { text: "Pink", isCorrect: false },
      { text: "Badla", isCorrect: true },
      { text: "Wazir", isCorrect: false },
      { text: "Drishyam", isCorrect: false },
    ],
  },
  {
    question:
      "Which suspense thriller movie starring Aamir Khan features a police officer investigating the mysterious deaths of musicians?",
    options: [
      { text: "Talaash", isCorrect: true },
      { text: "Ghajini", isCorrect: false },
      { text: "Dhoom 3", isCorrect: false },
      { text: "PK", isCorrect: false },
    ],
  },
  {
    question:
      "In which movie does Akshay Kumar play an ex-army officer who avenges the deaths of his loved ones?",
    options: [
      { text: "Baby", isCorrect: false },
      { text: "Holiday", isCorrect: false },
      { text: "Gabbar is Back", isCorrect: true },
      { text: "Special 26", isCorrect: false },
    ],
  },
  {
    question:
      "Which 90s movie is about a simple village boy who moves to the city and gets caught in a love triangle?",
    options: [
      { text: "Raja Hindustani", isCorrect: true },
      { text: "Dil Hai Ke Manta Nahin", isCorrect: false },
      { text: "Saajan", isCorrect: false },
      { text: "Dhadkan", isCorrect: false },
    ],
  },
  {
    question:
      "Which movie revolves around a mother taking revenge against a corrupt system after her daughter is wronged?",
    options: [
      { text: "Mom", isCorrect: true },
      { text: "Kahaani 2", isCorrect: false },
      { text: "Mardaani", isCorrect: false },
      { text: "No One Killed Jessica", isCorrect: false },
    ],
  },
  {
    question:
      "Which 2000s romantic drama is about a love triangle between a struggling musician, a kind-hearted woman, and a famous singer?",
    options: [
      { text: "Saajan", isCorrect: false },
      { text: "Aashiqui 2", isCorrect: true },
      { text: "Tum Bin", isCorrect: false },
      { text: "Dil Se", isCorrect: false },
    ],
  },
  {
    question:
      "Which 90s Bollywood comedy is about a man who switches places with a rich businessman who looks exactly like him?",
    options: [
      { text: "Judwaa", isCorrect: true },
      { text: "Hera Pheri", isCorrect: false },
      { text: "Bade Miyan Chote Miyan", isCorrect: false },
      { text: "Jodi No. 1", isCorrect: false },
    ],
  },
  {
    question: "Which film features a ghost who wants to marry the protagonist?",
    options: [
      { text: "Phillauri", isCorrect: true },
      { text: "Raaz", isCorrect: false },
      { text: "Tumbbad", isCorrect: false },
      { text: "Pari", isCorrect: false },
    ],
  },
  {
    question:
      "In *Hera Pheri*, what is the amount of ransom demanded by the kidnappers?",
    options: [
      { text: "10 lakh", isCorrect: false },
      { text: "1 crore", isCorrect: false },
      { text: "50 lakh", isCorrect: false },
      { text: "2 crore", isCorrect: true },
    ],
  },
  {
    question:
      "Which Bollywood horror film is based on the true story of a haunted ship?",
    options: [
      { text: "Bhoot Part One: The Haunted Ship", isCorrect: true },
      { text: "Raaz", isCorrect: false },
      { text: "1920", isCorrect: false },
      { text: "Haunted 3D", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood movie revolves around a treasure hidden in a haunted village?",
    options: [
      { text: "Tumbbad", isCorrect: true },
      { text: "Bhool Bhulaiyaa", isCorrect: false },
      { text: "Stree", isCorrect: false },
      { text: "Ragini MMS", isCorrect: false },
    ],
  },
  {
    question: "In *Chup*, what is the serial killer's main target?",
    options: [
      { text: "Actors", isCorrect: false },
      { text: "Food critics", isCorrect: false },
      { text: "Film critics", isCorrect: true },
      { text: "Journalists", isCorrect: false },
    ],
  },
  {
    question: "Which movie features a delivery man who turns into a gangster?",
    options: [
      { text: "Mumbai Meri Jaan", isCorrect: false },
      { text: "Once Upon a Time in Mumbaai", isCorrect: false },
      { text: "Rakta Charitra", isCorrect: false },
      { text: "Jigarthanda DoubleX", isCorrect: true },
    ],
  },
  {
    question: "In *Bajrangi Bhaijaan*, where does Munni belong?",
    options: [
      { text: "Pakistan", isCorrect: true },
      { text: "Bangladesh", isCorrect: false },
      { text: "Afghanistan", isCorrect: false },
      { text: "Nepal", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood film revolves around a game of luck played at night in Mumbai?",
    options: [
      { text: "Teen Patti", isCorrect: true },
      { text: "Jannat", isCorrect: false },
      { text: "Bluffmaster", isCorrect: false },
      { text: "Table No. 21", isCorrect: false },
    ],
  },
  {
    question:
      "Which film has a character who scams people by pretending to be multiple fake brides?",
    options: [
      { text: "Dolly Ki Doli", isCorrect: true },
      { text: "Ladies vs Ricky Bahl", isCorrect: false },
      { text: "Fraud Saiyaan", isCorrect: false },
      { text: "Band Baaja Baaraat", isCorrect: false },
    ],
  },
  {
    question:
      "In *Bunty Aur Babli*, what is the biggest scam pulled off by the duo?",
    options: [
      { text: "Selling the Taj Mahal", isCorrect: true },
      { text: "Scamming Bollywood producers", isCorrect: false },
      { text: "Robbing a Swiss bank", isCorrect: false },
      { text: "Cheating a billionaire", isCorrect: false },
    ],
  },
  {
    question:
      "In *Tumbbad*, what is the horrifying secret hidden beneath the village temple?",
    options: [
      { text: "A treasure guarded by a cursed deity", isCorrect: true },
      { text: "A portal to the underworld", isCorrect: false },
      { text: "A family of immortal witches", isCorrect: false },
      { text: "A sleeping demon that awakens every century", isCorrect: false },
    ],
  },

  {
    question: "In *Karthik Calling Karthik*, what is the shocking twist?",
    options: [
      { text: "Karthik has a twin", isCorrect: false },
      { text: "Karthik is hearing his own voice", isCorrect: true },
      { text: "Karthik is being blackmailed", isCorrect: false },
      { text: "Karthik is a ghost", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood movie is about a blind pianist who witnesses a murder?",
    options: [
      { text: "Andhadhun", isCorrect: true },
      { text: "Black", isCorrect: false },
      { text: "Kaabil", isCorrect: false },
      { text: "Gupt", isCorrect: false },
    ],
  },
  {
    question:
      "Which Bollywood film is about a mathematician’s struggle against the system?",
    options: [
      { text: "Super 30", isCorrect: true },
      { text: "Airlift", isCorrect: false },
      { text: "Article 15", isCorrect: false },
      { text: "Shiksha Mandal", isCorrect: false },
    ],
  },
  {
    question:
      "Which movie features a criminal who repeatedly escapes from the police using disguises?",
    options: [
      { text: "Baazigar", isCorrect: false },
      { text: "Ladies vs Ricky Bahl", isCorrect: false },
      { text: "Bunty Aur Babli", isCorrect: false },
      { text: "Guddu Rangeela", isCorrect: true },
    ],
  },
  {
    question: "In *Monica, O My Darling*, what is the major twist?",
    options: [
      { text: "The killer is the protagonist’s friend", isCorrect: false },
      { text: "Monica was never dead", isCorrect: true },
      { text: "The whole movie is a dream", isCorrect: false },
      { text: "The protagonist planned everything", isCorrect: false },
    ],
  },
  {
    question: "Which recent Bollywood film is based on a deadly survival game?",
    options: [
      { text: "Chor Nikal Ke Bhaga", isCorrect: false },
      { text: "Kuttey", isCorrect: false },
      { text: "Game Over", isCorrect: false },
      { text: "Escape Live", isCorrect: true },
    ],
  },
  {
    question:
      "Which movie features a man who gets rich by faking his own death multiple times?",
    options: [
      { text: "Lootcase", isCorrect: false },
      { text: "102 Not Out", isCorrect: false },
      { text: "Bholaa", isCorrect: false },
      { text: "Kaun Pravin Tambe?", isCorrect: true },
    ],
  },
  {
    question:
      "In *Drishyam 2*, what unexpected evidence leads to the case reopening?",
    options: [
      { text: "A confession video", isCorrect: true },
      { text: "A hidden witness", isCorrect: false },
      { text: "A forensic report", isCorrect: false },
      { text: "A missing phone", isCorrect: false },
    ],
  },
  {
    question:
      "Which horror-comedy film is based on a true folklore about a town where men disappear?",
    options: [
      { text: "Stree", isCorrect: true },
      { text: "Roohi", isCorrect: false },
      { text: "Bhool Bhulaiyaa 2", isCorrect: false },
      { text: "Bhoot Police", isCorrect: false },
    ],
  },
];
console.log(questions.length);

export default questions;
