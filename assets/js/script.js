//set timer
//selects element by class
var timeEl = document.querySelector(".time");
var submitBtn = document.querySelector("#submitBtn");
var highScoreBtn = document.querySelector("#counter");


//showes current score and final score
var currentScore = 0;
var constAnsPoint = 10;

//  Selects element by id
//var mainEl = document.getElementById("main");

var secondsLeft = 75;
function setTime() {
    // Sets interval in variable
    //var timerInterval = setInterval(function() {...},1000(miliseconds));
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            for (var i = 0; i < allSections.length; i++) {
                allSections[i].setAttribute("class", "hide");
               
            }


            // shows the initials section when timer runs out
            showNextSection(3, "You are out of time");

        }

    }, 1000);

}
// Access multiple button options for answer 1
var listBtnQ1 = document.querySelectorAll(".btnQ1");
// Access multiple button options for answer 2
var listBtnQ2 = document.querySelectorAll(".btnQ2");
var btnStart = document.querySelector("#btnStart");
//Access multiple sections on the html page
var allSections = document.querySelectorAll("section");
//showes the first question section
function showQuestionOne(event) {
    event.preventDefault();
    setTime();

    showNextSection(1);
}

btnStart.addEventListener("click", showQuestionOne);


//Shows the section whose index number is passed as a parameter and hides the previous section

function showNextSection(i, result) {
    allSections[i].setAttribute("class", "show");
    allSections[i - 1].setAttribute("class", "hide");
    var eleSpanResult = allSections[i].querySelector(".qResult");
    if (eleSpanResult !== null) {
    eleSpanResult.innerText = result;}
    //show final score everytime section changes
    var eleFinalScore = document.getElementById("pFinalScore");
    eleFinalScore.innerHTML = "Your final score is:" + currentScore +".";
}

for (var i = 0; i < listBtnQ1.length; i++) {
    listBtnQ1[i].addEventListener("click", checkAnswer1);
}

//showes the second question section

function showQuestionTwo(event) {
    event.preventDefault();
    showNextSection(2);
}

var isQ1AnswerCorrect;
//checks if answer is Correct or Wrong
function checkAnswer1(event) {
    event.preventDefault();
    var btnElementQ1 = event.target;
    var btnValue = btnElementQ1.getAttribute("value");
    if (btnValue === "2") {
        isQ1AnswerCorrect = "Correct!";
        currentScore = currentScore + constAnsPoint;  

    }
    else {
        isQ1AnswerCorrect = "Wrong!";
        secondsLeft = secondsLeft-10;
    }
    showNextSection(2, isQ1AnswerCorrect);
}

var isQ2AnswerCorrect;
//checks if answer is Correct or Wrong
function checkAnswer2(event) {
    event.preventDefault();
    var btnElementQ2 = event.target;
    var btnValue = btnElementQ2.getAttribute("value");
    if (btnValue === "3") {
        isQ2AnswerCorrect = "Correct!";
        currentScore = currentScore + constAnsPoint;        
    }
    else {
        isQ2AnswerCorrect = "Wrong!";
        secondsLeft = secondsLeft-10;
    }
    showNextSection(3, isQ2AnswerCorrect);
}

for (var i = 0; i < listBtnQ2.length; i++) {
    listBtnQ2[i].addEventListener("click", checkAnswer2);
}

var eleBtnSubmit = document.getElementById("btnSubmit");
var eleInitials = document.querySelector("#initials");
function submitScore(event) {
    event.preventDefault();
    var initials = eleInitials.value;    
    console.log("initials entered are:" + initials);
    var highScore = localStorage.getItem(initials);
    //if highscore is not stored in the locxal storage previously that means 
    //the questionaire is filled out for the first time
    if (highScore !== null){
        highScore = 0;
    }
    if ( currentScore> highScore){
        highScore = currentScore;
        localStorage.setItem(initials, highScore);
       
    }

showNextSection(4,highScore);
}
eleBtnSubmit.addEventListener("click" , submitScore);


    
    //var count = localStorage.getItem("count");






// function saveToLocalStorage(event) {
//     event.preventDefault();
//     var userInitials = document.querySelector("#initials").value;
//     var quizObject = {
//         initials: userInitials,
//         score: currentScore

//     }
// }

// function renderMessage() {
//  var localStorageData = JSON.parse(localStorage.getItem("quizData"));
//  if ( localStorageData !== null){
//     //localStorageData.push(quizObject)
// }
//  else {
//     localStorageData = []
//     localStorageData.push(quizObject)
    

//  }


//  localStorage.setItem("quizData", JSON.stringify(localStorageData));



