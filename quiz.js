function buildQuiz(questionObj){
  startButton.style.display = 'none';
  mediumButton.style.display = 'none';
  hardButton.style.display = 'none';
  const output = [];

  questionObj.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];

      for(letter in currentQuestion.answers){
        answers.push(
          `<div class="answer">
          <label class="answer-label">
            <input type="radio" name="question${questionNumber}" value="${letter}">
            <span class="checkmark">${currentQuestion.answers[letter]}</span>
          </label></div>`
        );
      }

      output.push(
        `<div class="slide"><div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div></div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

function showResults(questionObj){
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  questionObj.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `<span class="results-total">${numCorrect} <span>out of<span> ${questionObj.length}</span>`
}

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  if(currentSlide === 0) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'inline-block';
  }

  if(currentSlide === slides.length-1) {
    nextButton.style.display = 'none';
    previousButton.style.display = 'inline-block';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');
const homeButton = document.getElementById('home');

const myQuestions = [
  {
    question: "While Bojack and Sarah Lynn go on their bender, where did they NOT stop by?",
    answers: {
      a: "College library",
      b: "Diane's apartment",
      c: "Ana Spanakopita's house",
      d: "Movie Theatre"
    },
    correctAnswer: "d"
  },
  {
    question: "What sport does Hollyhock play?",
    answers: {
      a: "Soccer",
      b: "Football",
      c: "Rugby",
      d: "Volleyball"
    },
    correctAnswer: "c"
  },
  {
    question: "What did Sarah Lynn want to be when she grows up?",
    answers: {
      a: "Architect",
      b: "Pop star",
      c: "Home owner",
      d: "Astronaut"
    },
    correctAnswer: "a"
  },
  {
    question: "What is Bojacks memoir called?",
    answers: {
      a: "Life of Horseman",
      b: "One Trick Pony",
      c: "The Imperfect Horse",
      d: "A Good Horse"
    },
    correctAnswer: "b"
  },
  {
    question: "What name does Princess Carolyn temporarily give her baby?",
    answers: {
      a: "Untitled Baby Name",
      b: "Untitled PC Project",
      c: "Temp Filler PC",
      d: "Unfinished PC Project"
    },
    correctAnswer: "b"
  },
  {
    question: "What does Mayor WoodChuck challenge Mr.Peanutbutter too?",
    answers: {
      a: "A race to save the city from spaghetti",
      b: "The best drought plan",
      c: "A Ski race",
      d: "Cooking challenge"
    },
    correctAnswer: "c"
  },
  {
    question: "What gives away that Tracy and Stuart are long lost twins?",
    answers: {
      a: "Matching halves of a medallion",
      b: "Matching birthmarks",
      c: "Matching scars",
      d: "Matching birth certificates"
    },
    correctAnswer: "a"
  },
  {
    question: "What does Herb give Bojack when he takes him to griffith park?",
    answers: {
      a: "A book",
      b: "Eye glasses",
      c: "Binoculars",
      d: "Telescope"
    },
    correctAnswer: "d"
  },
  {
    question: "Who does Bojack call in Bojacks dream season 6?",
    answers: {
      a: "Hollyhock",
      b: "Diane",
      c: "Princess Carolyn",
      d: "Sarah Lynn"
    },
    correctAnswer: "b"
  },
  {
    question: "All are Mr.PB's ex wives except",
    answers: {
      a: "Katrina",
      b: "Jessica",
      c: "Erica",
      d: "Diane"
    },
    correctAnswer: "c"
  },
  {
    question: "Why does Bojack and Hollyhock look for more pain medicine?",
    answers: {
      a: "Gina takes them away",
      b: "Bojack lost it while picking up Hollyhock",
      c: "Hollyhock dumped his down the drain",
      d: "He wants to sell them for money"
    },
    correctAnswer: "c"
  },
  {
    question: "What are the 2 twin's names in Mr.Peanutbutter's House",
    answers: {
      a: "Casey and Cara",
      b: "Naomi and Nina",
      c: "Ashley and Alex",
      d: "Zoe and Zelda"
    },
    correctAnswer: "d"
  },
  {
    question: "What secret is Princess Carolyn and Ralph trying to keep from the Stilton family?",
    answers: {
      a: "She is pregnant",
      b: "She is uncomfortable around mice",
      c: "Her and ralph are going to get married",
      d: "She grew up poor"
    },
    correctAnswer: "a"
  },
  {
    question: "What's the name of the main character in Diane's book?",
    answers: {
      a: "Lily",
      b: "Ivy",
      c: "Irene",
      d: "Amie"
    },
    correctAnswer: "b"
  },
  {
    question: "Who does Hollyhock meet at the NY party?",
    answers: {
      a: "Tawnie",
      b: "Bojack",
      c: "Pete Repeat",
      d: "Carol"
    },
    correctAnswer: "c"
  },
  {
    question: "How many seasons of Philbert were filmed?",
    answers: {
      a: "3",
      b: "1",
      c: "0",
      d: "2"
    },
    correctAnswer: "d"
  },
  {
    question: "What's the name of the bunny at cinnabunnies?",
    answers: {
      a: "Maude",
      b: "Raud",
      c: "Naud",
      d: "Aud"
    },
    correctAnswer: "a"
  },
  {
    question: "What caused Bojack to call Sarah Lynn and break her sobriety?",
    answers: {
      a: "Bojack's oscar nominee was rescinded",
      b: "Bojack finished secretariat",
      c: "Bojack fought with Beatrice",
      d: "Todd finds out about Bojack and Emily"
    },
    correctAnswer: "a"
  },
  {
    question: "Which character was NOT in Bojacks dream in season 6?",
    answers: {
      a: "Cracker Jack",
      b: "Corduroy",
      c: "Todd",
      d: "Zach Braff"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is Henrietta?",
    answers: {
      a: "A name Beatrice keeps calling Bojack",
      b: "A nurse",
      c: "Hollyhock's mother",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Who saves the house from the fracking accident?",
    answers: {
      a: "Woodchucks team",
      b: "Ralph Stilton",
      c: "Warrior Ants",
      d: "The Police"
    },
    correctAnswer: "c"
  },
  {
    question: "What happens at the end of Bojack's Eulogy?",
    answers: {
      a: "He promotes his new show, Philbert",
      b: "He realizes he's at the wrong funeral",
      c: "He leaves to buy a churro",
      d: "He starts tearing up"
    },
    correctAnswer: "b"
  },
  {
    question: "What celebrity does Todd advertise Bojack's house as?",
    answers: {
      a: "David Boreanaz",
      b: "David Bowie",
      c: "David Hasselhoff",
      d: "David Bautiste"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the doctor's name that gives Sarah Lynn pills?",
    answers: {
      a: "Dr.Who",
      b: "Dr.Hu",
      c: "Dr.Woo",
      d: "Dr.Hoo"
    },
    correctAnswer: "b"
  },
  {
    question: "What animal is the naval officer Bojack offends?",
    answers: {
      a: "Walrus",
      b: "Penguin",
      c: "Sea Lion",
      d: "Seal"
    },
    correctAnswer: "d"
  },
  {
    question: "What kind of doctor is Dr.Hu?",
    answers: {
      a: "Pediatrician",
      b: "Eye Doctor",
      c: "Pharmacist",
      d: "Anesthesiologist"
    },
    correctAnswer: "a"
  },
  {
    question: "What does Todd call the robot he makes for Emily?",
    answers: {
      a: "Jonnie Touch",
      b: "Henry Fondle",
      c: "Stevie Hug",
      d: "Ben Huggin"
    },
    correctAnswer: "b"
  },
  {
    question: "Emily creates a dating app for men of what profession to meet her?",
    answers: {
      a: "Firefighters",
      b: "Doctors",
      c: "Policemen",
      d: "EMT"
    },
    correctAnswer: "a"
  },
  {
    question: "Where does Princess Carolyn meet Vincent Adultman?",
    answers: {
      a: "A cafe",
      b: "Elefante",
      c: "A bar",
      d: "PB's house"
    },
    correctAnswer: "c"
  },
  {
    question: "What triggers Bojack and Wanda to break up?",
    answers: {
      a: "nike",
      b: "apple",
      c: "Because Bojack said I love you and took it back",
      d: "Diane overstays her welcome"
    },
    correctAnswer: "d"
  },
  {
    question: "What triggers Bojack and Wanda to break up?",
    answers: {
      a: "Bojack falls back into drinking and drugs",
      b: "Wanda finds out what Bojack did to Todd",
      c: "Because Bojack said I love you and took it back",
      d: "Diane overstays her welcome"
    },
    correctAnswer: "d"
  }
];

const mediumQuestions = [
  {
    question: "What fake story does Bojack tell about Beatrice at her funeral?",
    answers: {
      a: "She taught him how to dance",
      b: "She hugged him",
      c: "She paid for his acting classes",
      d: "She bought Bojack a cool jacket"
    },
    correctAnswer: "d"
  },
  {
    question: "How does Todd meet Yolanda?",
    answers: {
      a: "To talk about the failing clown dentist practice",
      b: "To launch his business",
      c: "To apply for whattimeisitrightnow.com",
      d: "Todds clown dentist practice is breaking a law"
    },
    correctAnswer: "a"
  },
  {
    question: "What was Princess Carolyn's mother's job?",
    answers: {
      a: "Mail woman",
      b: "Milk delivery",
      c: "Stay at home mom",
      d: "Maid"
    },
    correctAnswer: "d"
  },
  {
    question: "In the 'bad things Bojack did' whiteboard, Diane adds all these except:",
    answers: {
      a: "Fired her from writing the book",
      b: "Stood her up",
      c: "Stole her scarf",
      d: "Told people about 'cry-anne'"
    },
    correctAnswer: "b"
  },
  {
    question: "What's the name of the group of girls who tries to rob Todd?",
    answers: {
      a: "Celeb Rob Club",
      b: "Famous Heist Club",
      c: "Celebrity Stealing Club",
      d: "Famous People Mug Club"
    },
    correctAnswer: "c"
  },
  {
    question: "Where does Bojack meet Wanda Pierce?",
    answers: {
      a: "Roller Skating Rink",
      b: "Elefante",
      c: "VIM",
      d: "Diner"
    },
    correctAnswer: "a"
  },
  {
    question: "What foundation does Diane work for with Sebastian?",
    answers: {
      a: "St. Claire",
      b: "St. Vincent",
      c: "United Nations",
      d: "Cordovia"
    },
    correctAnswer: "a"
  },
  {
    question: "When Bojack goes to Pacific Ocean Film Fest underwater, how many seahorse babies does he deliver?",
    answers: {
      a: "4",
      b: "5",
      c: "6",
      d: "7"
    },
    correctAnswer: "c"
  },
  {
    question: "What alcohol commercial does Todd star in?",
    answers: {
      a: "apple",
      b: "rasp",
      c: "blue",
      d: "pineapple"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of the chicken Todd saves?",
    answers: {
      a: "Becca",
      b: "Becky",
      c: "Henrietta",
      d: "Henny"
    },
    correctAnswer: "a"
  },
  {
    question: "What was Diane's barista name?",
    answers: {
      a: "Blair",
      b: "Blarn",
      c: "Dee",
      d: "Larn"
    },
    correctAnswer: "b"
  },
  {
    question: "Where does Bojack hide his pain killers in his bathroom to hide from Gina?",
    answers: {
      a: "Toothpaste",
      b: "Shaving cream can",
      c: "Behind the toilet",
      d: "Under the sink"
    },
    correctAnswer: "b"
  },
  {
    question: "Why was Todd to be in a relationship with Courney Portnoy?",
    answers: {
      a: "To make her seem relatable",
      b: "To get back at her ex",
      c: "To promote her movie",
      d: "To help Todd figure out his aesexual journey"
    },
    correctAnswer: "d"
  },
  {
    question: "In the 'bad things Bojack did' whiteboard, Todd adds all these except:",
    answers: {
      a: "Slept with emily",
      b: "Destroyed rock opera",
      c: "Ate the last sandwich",
      d: "Left him in prison"
    },
    correctAnswer: "c"
  },
  {
    question: "What was Captain PB scared to tell Mr.PB?",
    answers: {
      a: "He has a twisted spleen",
      b: "He broke his tailbone",
      c: "He has 1 more year left to live",
      d: "He can't howl anymore"
    },
    correctAnswer: "a"
  },
  {
    question: "Why was the meme Sad Dog created?",
    answers: {
      a: "Mr.PB was getting hate when cheating on pickles became public",
      b: "To promote Birthday Dad 2",
      c: "To stay relevant with the age crowd",
      d: "It was a joke"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of these does Todd NOT put in his resume to whattimeisitnow.com?",
    answers: {
      a: "Founded a ride share app",
      b: "Started a clown dentist practice",
      c: "Built and managed own theme park",
      d: "Briefly Governor of California"
    },
    correctAnswer: "b"
  },
  {
    question: "How many brothers does Diane have?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    correctAnswer: "d"
  },
  {
    question: "How did Mr.PB get his job on Mr.Peanutbutter's house?",
    answers: {
      a: "Worked as backstage crewmember",
      b: "Was an audience in the taping of original show",
      c: "Wandered in the studio while filming",
      d: "Delivered flowers backstage"
    },
    correctAnswer: "c"
  },
  {
    question: "What letter does Mr.PB gift to Hollywoo?",
    answers: {
      a: "S",
      b: "O",
      c: "D",
      d: "B"
    },
    correctAnswer: "d"
  },
  {
    question: "Who says this quote 'Hello. I am Bojack. Horseman, obviously. You've probably heard of me, I'm very famous. So sober me up, please!'?",
    answers: {
      a: "Bojack",
      b: "Princess Carolyn",
      c: "Diane",
      d: "Mr.PB"
    },
    correctAnswer: "c"
  },
  {
    question: "What young adult franchise did Pinky Penguin ask Bojack if he heard of _____ of Malibu?",
    answers: {
      a: "Lizards",
      b: "Swamp Monsters",
      c: "Iguanas",
      d: "Manatee"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the comedy club's name that Herb and Bojack worked at?",
    answers: {
      a: "Laugh Shack",
      b: "Laugh Factory",
      c: "Ha Ha Club",
      d: "Laugh Floor"
    },
    correctAnswer: "a"
  },
  {
    question: "In the last scene of Bojack and Diane, what song plays?",
    answers: {
      a: "Mr. Blue",
      b: "Sea of Dreams",
      c: "Flying High",
      d: "Back in the 90s"
    },
    correctAnswer: "a"
  },
  {
    question: "What was the last piece to complete fixing Sugarman's house?",
    answers: {
      a: "Barn door",
      b: "Backyard Pergola",
      c: "Front door",
      d: "Weather vane"
    },
    correctAnswer: "d"
  },
  {
    question: "What animal does Diane's therapist change Bojack to?",
    answers: {
      a: "Donkey",
      b: "Zebra",
      c: "Pony",
      d: "Mule"
    },
    correctAnswer: "b"
  },
  {
    question: "Who is Sarah Lynns Ex?",
    answers: {
      a: "Adam Levine",
      b: "Daniel Radcliffe",
      c: "Andrew Garfield",
      d: "Ryan Gosling"
    },
    correctAnswer: "c"
  },
  {
    question: "Who didn't get hurt because of the store Halloween in January?",
    answers: {
      a: "Jimmy Fallon",
      b: "Andrew Garfield",
      c: "Jimmy Kimmel",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of these is NOT Princess Carolyn's assistants?",
    answers: {
      a: "Stuart",
      b: "Jimmy",
      c: "Laura",
      d: "Charley"
    },
    correctAnswer: "b"
  },
  {
    question: "What video game was the downfall of Todd's Opera?",
    answers: {
      a: "Decapathon VII",
      b: "Decapathon VI",
      c: "Decapathon V",
      d: "Decapathon III"
    },
    correctAnswer: "a"
  },
  {
    question: "How many seasons was Horsin Around on for?",
    answers: {
      a: "6",
      b: "7",
      c: "8",
      d: "9"
    },
    correctAnswer: "d"
  },
  {
    question: "Bojack went up to the roof to meet Diane after all but one of these events?",
    answers: {
      a: "After he got casted in Secretariat",
      b: "After Mr.PB's engagement party",
      c: "After the Princess Carolyn's wedding",
      d: "After he tries to make amends with the naval officer"
    },
    correctAnswer: "b"
  }
];

const hardQuestions = [
  {
    question: "Why does Todd make a giant papier-mache Todd head?",
    answers: {
      a: "To enroll in a parade",
      b: "To scare away something that's eating their food",
      c: "To apply as a mascot",
      d: "To start a new religion"
    },
    correctAnswer: "b"
  },
  {
    question: "Diane listed 10 reasons to visit Vietnam, which one isn't one of those reasons?",
    answers: {
      a: "Reconnect with ancestral roots",
      b: "To be a tourist",
      c: "Have an open mind",
      d: "Get out of your natural habitat"
    },
    correctAnswer: "c"
  },
  {
    question: "What college does Princess Carolyn attend?",
    answers: {
      a: "Pomona",
      b: "USC",
      c: "Claremont Mckenna",
      d: "UCLA"
    },
    correctAnswer: "d"
  },
  {
    question: "Why does Princess Carolyn fire Judah?",
    answers: {
      a: "He lied to her about merging companies",
      b: "He lost her family heirloom necklace",
      c: "PC acted impulsively after her miscarrage",
      d: "He tells her to break up with Ralph"
    },
    correctAnswer: "a"
  },
  {
    question: "How many miles is metaphor mountain?",
    answers: {
      a: "12",
      b: "6",
      c: "24",
      d: "17"
    },
    correctAnswer: "a"
  },
  {
    question: "Why does Todd sell his last kidney?",
    answers: {
      a: "He fell into an online scam",
      b: "He wanted sock puppets",
      c: "He got jumped",
      d: "He wanted to go to a buffet"
    },
    correctAnswer: "b"
  },
  {
    question: "What's the name of the diner?",
    answers: {
      a: "Grandma Susies",
      b: "Taste of Moo",
      c: "Silver Spoon Diner",
      d: "Good Eats Diner"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of these are NOT Diane's ringtones?",
    answers: {
      a: "Sarah Koenig/Serial",
      b: "Terry Gross",
      c: "Ira Glass/ This American Life",
      d: "Stephen Dubner/Freakanomics"
    },
    correctAnswer: "d"
  },
  {
    question: "Bojack accuses all of these people are out to ruin Philbert except?",
    answers: {
      a: "Diane",
      b: "Charlotte",
      c: "Flip",
      d: "Gina"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of these is NOT in HollyHock's last name?",
    answers: {
      a: "Manheim",
      b: "Sung",
      c: "Robinson",
      d: "McQuack"
    },
    correctAnswer: "b"
  },
  {
    question: "How does Bojack first pronounce Diane's last name?",
    answers: {
      a: "Nu-goo-ya-goo-ya-neh",
      b: "No-goo-ye-goo-ya",
      c: "Na-goo-ya-go-goo-goo-goo-ya",
      d: "Na-gyoo-goo-go-ya"
    },
    correctAnswer: "c"
  },
  {
    question: "In the very first episode who interviews Bojack?",
    answers: {
      a: "Peter Jennings",
      b: "Brian Williams",
      c: "Charlie Rose",
      d: "Dick Cavett"
    },
    correctAnswer: "c"
  },
  {
    question: "Where does Bojack go after the 2nd (bad) interview with Biscuits Braxby?",
    answers: {
      a: "Laugh Shack",
      b: "Chicago",
      c: "Griffith Observatory",
      d: "A bar"
    },
    correctAnswer: "a"
  },
  {
    question: "What was Herbs 'gold' he gave to Sarah Lynn?",
    answers: {
      a: "His will",
      b: "His manuscript",
      c: "His ashes",
      d: "A Key"
    },
    correctAnswer: "b"
  },
  {
    question: "What were Beatrice's last words to Bojack?",
    answers: {
      a: "You ruined me, Bojack",
      b: "Thats nice",
      c: "ICU / I see you",
      d: "It's so.. Delicious"
    },
    correctAnswer: "c"
  },
  {
    question: "Which Jameson was not mentioned when Bojack was looking for her at the party?",
    answers: {
      a: "Jameson H",
      b: "Jameson K",
      c: "Jameson Q",
      d: "Jameson M"
    },
    correctAnswer: "b"
  },
  {
    question: "Mr.PB pitches all these shows when Birthday Dad doesnt do well except:",
    answers: {
      a: "Its a girl Girl",
      b: "Detective John GetWellSoon",
      c: "Officer Mike Condolences",
      d: "President Blank Inside"
    },
    correctAnswer: "a"
  },
  {
    question: "What was Bojack's first alcoholic drink?",
    answers: {
      a: "Rum",
      b: "Orange juice and Vodka",
      c: "Rum and Coke",
      d: "Vodka"
    },
    correctAnswer: "d"
  },
  {
    question: "Who is Pickle's favorite recording artist?",
    answers: {
      a: "Eminem",
      b: "Joey Pogo",
      c: "Lo-Fi Chill-Hop beats to study/ relax to",
      d: "Two Naked Hearts (raw dog remix)"
    },
    correctAnswer: "c"
  },
  {
    question: "What food does Bojack eat at Princess Carolyn's wedding?",
    answers: {
      a: "Mini slider",
      b: "Pretzels",
      c: "Cantelope",
      d: "Cotton candy"
    },
    correctAnswer: "d"
  },
  {
    question: "Where does QueefBurgalar69 NOT come up in the show?",
    answers: {
      a: "Pickles live stream comment",
      b: "Secretariat movie review",
      c: "Cabracadabra review",
      d: "Wanda's show review"
    },
    correctAnswer: "b"
  },
  {
    question: "Who says this quote: Theres no such thing as 'bad guys' or 'good guys'! We're all just guys who do good stuff sometimes and bad stuff sometimes",
    answers: {
      a: "Bojack",
      b: "Diane",
      c: "Princess Carolyn",
      d: "Todd"
    },
    correctAnswer: "b"
  },
  {
    question: "Who released the very large Bojack balloon in the sky?",
    answers: {
      a: "Margo Martindale",
      b: "Bojack",
      c: "Diane",
      d: "Princess Carolyn"
    },
    correctAnswer: "d"
  },
  {
    question: "What did Todd NOT suggest for the Mr.PB + Diane movie?",
    answers: {
      a: "Make Mr.PB say tru dat",
      b: "Make it more Diane-y",
      c: "Make Bojack be a selfish asshole",
      d: "Bimonthly curated box of snacks"
    },
    correctAnswer: "a"
  },
  {
    question: "What is NOT one of the movie posters PC has in her apartment?",
    answers: {
      a: "Junior",
      b: "Cat on a Hot Tin Roof",
      c: "When Tabby met Snappy",
      d: "Krill and Grace"
    },
    correctAnswer: "d"
  },
  {
    question: "Which actress plays Diane in the movie interpretation of Mr.PB and Diane?",
    answers: {
      a: "Carey Mulligan",
      b: "Naomi Watts",
      c: "Blake Lively",
      d: "Amanda Seyfried"
    },
    correctAnswer: "b"
  },
  {
    question: "What flower does Bojack bring in his dream to Beatrice's house?",
    answers: {
      a: "Lilies",
      b: "Hydrangea",
      c: "Roses",
      d: "Daisies"
    },
    correctAnswer: "b"
  },
  {
    question: "What event shows the scene of Bojack backing a car into the pool and almost drowning?",
    answers: {
      a: "At the party for cabracadabra",
      b: "At the party when he's nominated for an oscar",
      c: "At the party to celebrate Secretariat ",
      d: "At the party to close detective show"
    },
    correctAnswer: "b"
  },
  {
    question: "What state is Sugarman's summer home",
    answers: {
      a: "Minnesota",
      b: "Michigan",
      c: "Wisconsin",
      d: "Ohio"
    },
    correctAnswer: "b"
  },
  {
    question: "While Bojack, Sarah Lynn, and Todd were writing his book and taking drugs, which scene did NOT happen?",
    answers: {
      a: "Bojack turns into a pencil drawing and gets erased",
      b: "Bojack slides down a slide of pills",
      c: "A scene in Peanuts show style",
      d: "Bojack has a baby with Charlotte"
    },
    correctAnswer: "b"
  }
];

var slides, previousButton, nextButton = null;
let currentSlide = 0;

function startQuiz(questionObj) {
  buildQuiz(questionObj);

  previousButton = document.getElementById("previous");
  nextButton = document.getElementById("next");
  slides = document.querySelectorAll(".slide");

  previousButton.style.display = 'inline-block';
  nextButton.style.display = 'inline-block';
  document.getElementById('home').style.display = 'inline-block';

  // Show the first slide
  currentSlide = 0;
  showSlide(currentSlide);

  submitButton.addEventListener('click',function() {
    showResults(questionObj);
  });
  previousButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
}

startButton.addEventListener('click', function() {
  startQuiz(myQuestions)
});
mediumButton.addEventListener('click', function() {
  startQuiz(mediumQuestions)
});
hardButton.addEventListener('click', function() {
  startQuiz(hardQuestions)
});

homeButton.addEventListener('click', function() {
  quizContainer.innerHTML = '';
  resultsContainer.innerHTML = '';
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
  startButton.style.display = 'inline-block';
  mediumButton.style.display = 'inline-block';
  hardButton.style.display = 'inline-block';
  submitButton.style.display = 'none';
  homeButton.style.display = 'none';
});


$(document).ready(function() {
  submitButton.style.display = "none";
});
