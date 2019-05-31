
var header = document.getElementById("stick");
var sticky = header.offsetTop;
var file = document.title;

function buttonPress(){
    switch (file) {
        case "Results":
            location.href = "Questionnaire.html";
            break;
            
        case "Candidates":
            location.href = "WelcomePage.html";            
            break;
            
        case "Questionnaire":
            location.href = "Candidates.html";
            break;
            
        case "WelcomePage": // do nothing
            break;
            
        default:
            break;
    }
}

function buttonPress2(){
    switch (file) {
        case "Results":
			localStorage.clear();
            location.href = "WelcomePage.html";
            break;
            
        case "Candidates":
            location.href = "Questionnaire.html";            
            break;
            
        case "Questionnaire":
            location.href = "Results.html";
            break;
            
        case "WelcomePage": // do nothing
            break;
            
        default:
            break;
    }
}

window.onscroll = function() {
    myFunction()
};

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}