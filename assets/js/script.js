//set timer
//selects element by class
// var timeEl = document.queryselector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondleft = 75;
//var arrBtnQ1 = document.querySelectorAll(".btnQ1");







































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
   
    showNextSection(1);
}

btnStart.addEventListener("click", showQuestionOne);

var isQ1AnswerCorrect;
//checks if answer is Correct or Wrong
function checkAnswer1(event) {
    event.preventDefault();
    var btnElementQ1 = event.target;
    var btnValue = btnElementQ1.getAttribute("value");
    if (btnValue === "2") {
        isQ1AnswerCorrect = "Correct!";
    }
    else {
        isQ1AnswerCorrect = "Wrong!";
    }
    showNextSection(2, isQ1AnswerCorrect);
}

//Shows the section whose index number is passed as a parameter and hides the previous section

function showNextSection(i ,result) {    
    allSections[i].setAttribute("class", "show");
    allSections[i - 1].setAttribute("class", "hide");
    var eleSpanResult = allSections[i].querySelector(".qResult");
    eleSpanResult.innerText = result;
}

for (var i = 0 ; i< listBtnQ1.length ; i++)
{
listBtnQ1[i].addEventListener("click", checkAnswer1);
}

//showes the second question section

function showQuestionTwo(event) {
    event.preventDefault();   
    showNextSection(2);
}

var isQ2AnswerCorrect;
//checks if answer is Correct or Wrong
function checkAnswer2(event) {
    event.preventDefault();
    var btnElementQ2 = event.target;
    var btnValue = btnElementQ2.getAttribute("value");
    if (btnValue === "3") {
        isQ2AnswerCorrect = "Correct!";
    }
    else {
        isQ2AnswerCorrect = "Wrong!";
    }
    showNextSection(3, isQ2AnswerCorrect);
}

for (var i = 0 ; i< listBtnQ2.length ; i++)
{
listBtnQ2[i].addEventListener("click", checkAnswer2);
}







