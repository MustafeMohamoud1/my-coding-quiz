const startButton = $("#startButton")

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
startButton.innerHTML = "start";
showQuestion();
}

function showQuestion() {

}

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: true},
            {text: "js", correct: true},
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: true},
            {text: "js", correct: true},
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: true},
            {text: "js", correct: true},
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: true},
            {text: "js", correct: true},
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: true},
            {text: "js", correct: true},
        ]
    },
];

const question