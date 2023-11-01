document.addEventListener("DOMContentLoaded", function () {
  // Your code here
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
  const playerName = prompt("What is your name?");
  const highScoreButton = document.getElementById("high-scores");
  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
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

  function showScore() {
    resetState();
    questionEl.innerHTML =
      "You scored " + score + " out of " + questions.length + " " + playerName;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    // const playerData = { name: playerName, score: score };
    // const highScoresEl = document.createElement("li");
    // highScoresEl.textContent = playerData.name + ": " + playerData.score;
    // appEl.appendChild(highScoresEl);
  }

  function showHighscores(){
    const playerData = { name: playerName, score: score };
    const highScoresEl = document.createElement("li");
    highScoresEl.textContent = playerData.name + ": " + playerData.score;
    questionEl.textContent = "Highest scores"
    questionEl.appendChild(highScoresEl);
  }

  highScoreButton.addEventListener("click", () =>{
    resetState();
    showHighscores();
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  })

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  startQuiz();
});
