var score = 0;
var quiz = document.getElementById("quiz")
var quizStart = document.createElement("div")
var timerEl = document.getElementById("timer")

var quizStartScreen = function() {
    var highScoresBtn = document.createElement("button")
    highScoresBtn.textContent = "High Scores"
    quizStart.appendChild(highScoresBtn)

    var startHeader = document.createElement("h1")
    startHeader.innerText = "Coding Quiz"

    quizStart.appendChild(startHeader)

    var startDescription = document.createElement("p")
    startDescription.innerText = "Welcome to my coding quiz please click the button below to start the quiz or click the 'High Scores' button in the top left to see high scores."
    quizStart.appendChild(startDescription)

    var startButton = document.createElement("button")
    startButton.textContent = "Start Quiz"
    quizStart.appendChild(startButton)

    quiz.appendChild(quizStart)

    

    var startQuiz = function(){
        highScoresBtn.remove();
        startHeader.remove();
        startDescription.remove();
        startButton.remove();
        function timerStart() {
            var timer = 60;
            var time = setInterval(function () {
                if (timer > 0) {
                    timerEl.textContent = timer;
                    timer--;
                } else if (timer === 0) {
                    timerEl.textContent = timer;
                    clearInterval(time)
                    window.alert("You have failed!")
                    timerEl.textContent = ""
                    quizStartScreen()
                }
            }, 1000);
        };
        
        timerStart()

        var question1 = document.createElement("div")
        
    };

    startButton.addEventListener("click", startQuiz)
};
quizStartScreen();