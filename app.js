const questions = [
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false },
        ]
    },
    {
        question: "Which of these is not a primary color?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: false },
            { text: "Yellow", correct: false },
            { text: "Green", correct: true },
        ]
    },
    {
        question: "Which of these countries is not in Europe?",
        answers: [
            { text: "France", correct: false },
            { text: "Germany", correct: false },
            { text: "Italy", correct: false },
            { text: "Japan", correct: true },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Uranus", correct: false },
        ]
    },
    {
        question: "Which of these is not a common web browser?",
        answers: [
            { text: "Google Chrome", correct: false },
            { text: "Mozilla Firefox", correct: false },
            { text: "Microsoft Edge", correct: false },
            { text: " Snapchat ", correct: true },
        ]
    },
    {
        question: "What is the currency used in Japan?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: " Pound", correct: false },
        ]
    },
    {
        question: "Which of these is not a type of renewable energy?",
        answers: [
            { text: "Solar", correct: false },
            { text: "Wind", correct: false },
            { text: "Hydroelectric", correct: false },
            { text: "Nuclear", correct: true },
        ]
    },
    {
        question: "Who is the current President of the United States?",
        answers: [
            { text: "Donald Trump", correct: false },
            { text: "Joe Biden", correct: true },
            { text: "Barack Obama", correct: false },
            { text: "Hilary Clinton", correct: false },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: " Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Which of these is not a common programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: " Snapchat", correct: true },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =  questionNo + ". " +  currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
            
        }
        button.addEventListener("click", selectAnswer);

    })   
}


function resetState(){
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
 
}


function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score } out of ${questions.length}! So how smart do you think you are?😉😉`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})

startQuiz()

