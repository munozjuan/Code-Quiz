//button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);


// html vars 
var quizBody = document.getElementById("quiz");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var resultsEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");




//Code Quiz questions
var quizQuestions = [{
        question: "What does the acronym D.O.M. stand for?",
        choiceA: "Digital Object Model",
        choiceB: "Display Old Management",
        choiceC: "Digital Ordinance Model",
        choiceD: "Document Object Model",
        correctAnswer: "d"},
    
    {
        question: "What HTML tags are JavaScript code wrapped in?",
        choiceA: "&lt;div&gt;",
        choiceB: "&lt;link&gt;",
        choiceC: "&lt;head&gt;",
        choiceD: "&lt;script&gt;",
        correctAnswer: "d"},
    {
        question: "How many elements can you apply to an 'ID' attribute?",
        choiceA: "5",
        choiceB: "1",
        choiceC: "34",
        choiceD: "35",
        correctAnswer: "b"},
    {
        question: "What is used to style web page?",
        choiceA: "HTTP",
        choiceB: "JSON",
        choiceC: "CSS",
        choiceD: "HTML",
        correctAnswer: "c"},
    {
        question: "What number do Arrays start on?",
        choiceA: "1",
        choiceB: "0",
        choiceC: "34",
        choiceD: "35",
        correctAnswer: "b"},  
    {
        question: "WWW stands for?",
        choiceA: "We Work Weekends",
        choiceB: "Will Willow Weak",
        choiceC: "World Wide Web",
        choiceD: "Where's Waldo Wierdo",
        correctAnswer: "c"},
]





// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}


// This function checks the response to each answer 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);