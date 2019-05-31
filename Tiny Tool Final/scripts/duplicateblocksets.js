// var referenceBlockset = document.getElementsByClassName("blockset")[0];
var referenceBlockset;
var clone;
var headings;
var i;
var headingNames = [
    "Jarvis",
    "Henry",
    "Alvin"
];

var blocks = localStorage.length - 1;
function duplicateElementById(id) {
    referenceBlockset = document.getElementById(id);
    
    for (i = 0; i < blocks; i++) {
        console.log(id);
        clone = referenceBlockset.cloneNode(true);
        document.body.appendChild(clone);
    }
}

function formatHeadings() {
    headings = document.getElementsByTagName("h6");
    for (i = 0; i < headings.length; i++) {
        headings[i].innerHTML = headingNames[i % headingNames.length];
    }    
}

duplicateElementById("block-reference");