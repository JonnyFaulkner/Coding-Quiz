var score = 0;
var timer = 60;
var currentQuestion = 0;

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

        var questions = [
            {
                q: "DOM stands for ____.",
                a1: "Dollar Options Menu" ,
                a2: "Definitive Operating Menu",
                a3: "Document Object Model",
                a4: "Direct Options Model",
                cA: "Document Object Model"
            },
            {
                q: "GitHub is a website that hosts ____.",
                a1: "Repositories",
                a2: "Parties",
                a3: "Video Calls",
                a4: "Metal Concerts",
                cA: "Repositories"
            },
            {
                q: "CSS stands for",
                a1: "Calculated Style Sheet",
                a2: "Calendar Support System",
                a3: "Car Seat Strap",
                a4: "Casscading Style Sheet",
                cA: "Casscading Style Sheet"
            }
        ];
        var questionContainer = document.createElement("div");
        var questionsStart = function(){
                
            for (var i = 0; i < questions.length; i++) {
                currentQuestion = questions[i];
                var question = document.createElement("p")
               
                question.textContent = currentQuestion.q;
                questionContainer.appendChild(question)
                
                var answer1 = document.createElement("button")
                answer1.textContent = currentQuestion.a1
                questionContainer.appendChild(answer1)
                
                var answer2 = document.createElement("button")
                answer2.textContent = currentQuestion.a2
                questionContainer.appendChild(answer2)
                
                var answer3 = document.createElement("button")
                answer3.textContent = currentQuestion.a3
                questionContainer.appendChild(answer3)
                
                var answer4 = document.createElement("button")
                answer4.textContent = currentQuestion.a4
                questionContainer.appendChild(answer4)

                quiz.appendChild(questionContainer)
                
                var clickEvent = function() {
                answer1.addEventListener("click", function(){
                    if (answer1.textContent === currentQuestion.cA) {
                        console.log(answer1.textContent)
                        score + 5
                        currentQuestion++
                    }
                    
                })

                answer2.addEventListener("click", function(){
                    if (answer2.textContent === currentQuestion.cA) {
                        console.log(answer2.textContent)
                        score + 5
                    }
                })

                answer3.addEventListener("click", function(){
                    if (answer3.textContent === currentQuestion.cA){
                        console.log(answer3.textContent)
                        score + 5
                        currentQuestion++
                    }
                })

                answer4.addEventListener("click", function(){
                    if (answer4.textContent === currentQuestion.cA){
                        console.log(answer4.textContent)
                        score + 5
                    }
                })
                }
                clickEvent()   
                quiz.appendChild(questionContainer)
            }
        }
        function timerStart() {
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
                    questionContainer.remove()
                    timer = 60;
                }
            }, 1000);
        };
        
        timerStart()

        questionsStart()
    };

    startButton.addEventListener("click", startQuiz)
};
quizStartScreen();