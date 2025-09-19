const quizData = {
  math: [
    {
      question: "What is 12 × 8?",
      answers: [
        { text: "96", correct: true },
        { text: "86", correct: false },
        { text: "108", correct: false },
        { text: "88", correct: false }
      ]
    },
    {
      question: "Solve: 15 ÷ 3 + 2",
      answers: [
        { text: "7", correct: true},
        { text: "8", correct: false },
        { text: "10", correct: false },
        { text: "6", correct: false }
      ]
    },
    {
      question: "Square root of 144?",
      answers: [
        { text: "10", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false }
      ]
    },
    {
      question: "What is 9²?",
      answers: [
        { text: "99", correct: false },
        { text: "18", correct: false },
        { text: "81", correct: true },
        { text: "27", correct: false }
      ]
    },
    {
      question: "Simplify: 25% of 200",
      answers: [
        { text: "25", correct: false },
        { text: "50", correct: true },
        { text: "100", correct: false },
        { text: "75", correct: false }
      ]
    }
  ],
  science: [
    {
      question: "Which gas do plants release during photosynthesis?",
      answers: [
        { text: "Oxygen", correct: true },
        { text: "Carbon dioxide", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false }
      ]
    },
    {
      question: "Which planet has the most moons?",
      answers: [
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: true },
        { text: "Mars", correct: false },
        { text: "Neptune", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Ag", correct: false },
        { text: "Au", correct: true },
        { text: "Gd", correct: false },
        { text: "Go", correct: false }
      ]
    },
    {
      question: "What is H2O?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Water", correct: true },
        { text: "Hydrogen", correct: false },
        { text: "Carbon dioxide", correct: false }
      ]
    },
    {
      question: "Speed of light in vacuum?",
      answers: [
        { text: "3 × 10⁸ m/s", correct: true },
        { text: "3 × 10⁶ m/s", correct: false },
        { text: "1.5 × 10⁸ m/s", correct: false },
        { text: "3 × 10⁵ m/s", correct: false }
      ]
    }
  ],
  history: [
    {
      question: "Who was the first President of the USA?",
      answers: [
        { text: "Abraham Lincoln", correct: false },
        { text: "George Washington", correct: true },
        { text: "Thomas Jefferson", correct: false },
        { text: "John Adams", correct: false }
      ]
    },
    {
      question: "In which year did World War II end?",
      answers: [
        { text: "1945", correct: true },
        { text: "1939", correct: false },
        { text: "1918", correct: false },
        { text: "1960", correct: false }
      ]
    },
    {
      question: "Who discovered America in 1492?",
      answers: [
        { text: "Christopher Columbus", correct: true },
        { text: "Ferdinand Magellan", correct: false },
        { text: "Vasco da Gama", correct: false },
        { text: "James Cook", correct: false }
      ]
    },
    {
      question: "Which wall fell in 1989?",
      answers: [
        { text: "Great Wall of China", correct: false },
        { text: "Berlin Wall", correct: true },
        { text: "Hadrian’s Wall", correct: false },
        { text: "Wailing Wall", correct: false }
      ]
    },
    {
      question: "Who was known as the Iron Lady?",
      answers: [
        { text: "Angela Merkel", correct: false },
        { text: "Margaret Thatcher", correct: true },
        { text: "Indira Gandhi", correct: false },
        { text: "Golda Meir", correct: false }
      ]
    }
  ],
  gk: [
    {
      question: "What is the largest ocean?",
      answers: [
        { text: "Atlantic", correct: false },
        { text: "Pacific", correct: true },
        { text: "Indian", correct: false },
        { text: "Arctic", correct: false }
      ]
    },
    {
      question: "Which is the tallest mountain in the world?",
      answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "Lhotse", correct: false }
      ]
    },
    {
      question: "Currency of Japan?",
      answers: [
        { text: "Yen", correct: true },
        { text: "Won", correct: false },
        { text: "Ringgit", correct: false },
        { text: "Baht", correct: false }
      ]
    },
    {
      question: "Fastest land animal?",
      answers: [
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Tiger", correct: false },
        { text: "Leopard", correct: false }
      ]
    },
    {
      question: "Which is the largest desert?",
      answers: [
        { text: "Sahara", correct: false },
        { text: "Antarctic Desert", correct: true },
        { text: "Arabian Desert", correct: false },
        { text: "Gobi Desert", correct: false }
      ]
    }
  ]
};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const restartButton = document.getElementById("restart-btn");
const resultElement = document.getElementById("result");
const questionNumberElement = document.getElementById("question-number");
const progressElement = document.getElementById("progress");

let currentTopic = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Choose Topic
document.querySelectorAll(".topic-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentTopic = btn.dataset.topic;
    currentQuestions = quizData[currentTopic];
    startQuiz();
  });
});

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "block";
  submitButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = currentQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  progressElement.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) score++;

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
    button.disabled = true;
  });

  if (currentQuestionIndex < currentQuestions.length - 1) {
    nextButton.style.display = "block";
  } else {
    submitButton.style.display = "block";
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});

submitButton.addEventListener("click", () => {
  showResult();
});

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressElement.style.width = "100%";
  resultElement.textContent = `🎉 You scored ${score} out of ${currentQuestions.length}!`;
}

restartButton.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
