document.addEventListener("DOMContentLoaded", function () {

  let playerName = prompt("What is your name");

while (playerName === null || playerName.trim() === "") {
  playerName = prompt("Please enter your name");
};

  const questions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        { text: "script", correct: true },
        { text: "scripting", correct: false },
        { text: "javascript", correct: false },
        { text: "js", correct: false },
      ],
    },
    {
      question:
        "What is the correct JavaScript syntax to change the content of the HTML element below?",
      answers: [
        {
          text: "document.getElementByName('p').innerHTML = 'Hello World!'; ",
          correct: false,
        },
        { text: "#demo.innerHTML = 'Hello World!';", correct: false },
        {
          text: "document.getElementById('demo').innerHTML = 'Hello World!';",
          correct: true,
        },
        {
          text: "document.getElement('p').innerHTML = 'Hello World!';",
          correct: false,
        },
      ],
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      answers: [
        { text: "msgBox('Hello World');", correct: false },
        { text: "msg('Hello World');", correct: false },
        { text: "alertBox('Hello World');", correct: false },
        { text: "alert('Hello World');", correct: true },
      ],
    },
    {
      question: "How does a FOR loop start?",
      answers: [
        { text: "for i = 1 to 5", correct: false },
        { text: "for (i <= 5; i++)", correct: false },
        { text: "for (i = 0; i <= 5; i++) ", correct: true },
        { text: "for (i = 0; i <= 5)", correct: false },
      ],
    },
    {
      question: "How to write an IF statement in JavaScript?",
      answers: [
        { text: "if i == 5 then", correct: false },
        { text: "if (i == 5)", correct: true },
        { text: "if i = 5 then", correct: false },
        { text: "if i = 5", correct: false },
      ],
    },
  ];

  const questionEl = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  let currentQuestionIndex = 0;
  let score = 0;

  const initialCountdownTime = 2 * 60; // 2 minutes in seconds
  let timeLeft = initialCountdownTime;
  const countdownElement = document.getElementById("countdown");
  let countdownInterval;

  function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startCountdown();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
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
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  function showScores() {
    resetState();
  clearInterval(countdownInterval);
  const playerData = { name: playerName, score: score };

  // Retrieve existing high scores from local storage (if any)
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add the current player's score to the high scores
  highScores.push(playerData);

  // Sort the high scores in descending order (highest score first)
  highScores.sort((a, b) => b.score - a.score);

  // Limit the number of high scores to display (e.g., top 10)
  const maxHighScores = 10;
  highScores.splice(maxHighScores);

  // Save the updated high scores to local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  questionEl.innerHTML = "You scored " + score + " out of " + questions.length + " " + playerName;

  const highScoresList = document.createElement("ul");
  highScoresList.innerHTML = "<h2>Highest Scores</h2>";

  highScores.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = entry.name + ": " + entry.score;
    highScoresList.appendChild(listItem);
  });

  questionEl.appendChild(highScoresList);
  
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScores();
    }
  }

  function resetCountdown() {
    clearInterval(countdownInterval);
    timeLeft = initialCountdownTime;
    updateCountdown();
  }

  function startCountdown() {
    updateCountdown(); // Display the initial countdown
    countdownInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        updateCountdown();
      } else {
        clearInterval(countdownInterval);
        showScores(); // Trigger the end of the quiz when the time is up
      }
    }, 1000); // Update every 1 second
  }

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      resetCountdown();
      startQuiz();
      const highScoresEl = document.querySelector("li");
      if (highScoresEl) {
        highScoresEl.remove();
      }
    }
  });

  startQuiz();
});
