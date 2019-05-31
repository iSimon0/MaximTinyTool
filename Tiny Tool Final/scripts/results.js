// var responses = sessionStorage.getItem("responses");
var responses;
// var objectCount = sessionStorage.getItem("blocks");
var objectCount = localStorage.length;
var referenceBlockset = document.getElementsByClassName("blockset")[0];
var debug = true;

function getResponses() {
    var result = [];
    result.length = objectCount;
    
    console.log("Getting responses from local storage...");
    for (var i = 0; i < objectCount; i++) {
        var x = localStorage.key(i);
        var y = localStorage.getItem(x);
        
        if (debug) {
            console.log("Key: " + x + ", Value: " + y);
        }
        
        result[i] = y;
    }
    
    return result;
}
responses = getResponses();

var outputMessages = [
    "Your object is retaining information it does not need to know or is not useful. " +
    "An object should only contain information it must use.",
    
    "Your object is unable to modify and/or retrieve the values of its attributes. " +
    "An object should have the means to perform these actions.",
    
    "Your object contains 1 or no attributes, which may be better in another class. " +
    "An object must act as a container for multiple related attributes. ",
    
    "Your object's attributes do not apply to all instances of your object. " +
    "An instance that does not apply may work better as a different object, " +
    "or some of the attributes you've defined may be more appropriate in an existing class.",
    
    "Your object's methods/actions do not apply to all instance of your object. " +
    "An instance that does not apply may work better as a different object, " +
    "or some of the methods/actions you've defined may be more appropriate in an existing class.",
    
    "Your object contains a redundancy that is not necessary. " +
    "It is recommended that any redundancies are removed."
];

var verdicts = [
    
    "Something has to satisfy at least one of these criteria. " +
    "Since no criteria were satisified: your candidate doesn't exist as anything, let alone an object. " +
    "Please review your candidate according to the defined criteria above and try to make an object.",
    
    "This candidate is coming real close to not be anything at all because it doesn't satisfy nearly all of the criteria above. " +
    "Please review the unsatisified requirements above and rework your object.",
    
    "This candidate is definitely not an object because most of the criteria remain unsatisified. " +
    "Please consider reworking your object to satisify the above criteria.",
    
    "This candidate is not an object because it does not satisfy several criteria defined above. " +
    "Review the structure of you object according to the criteria above and see if you can make it work.",
    
    "This candidate does not satisfy a couple criteria points. " +
    "It's possible that your candidate may still be an object; " +
    "but review the intention of your object and determine if the unsatisified criteria applies.",
    
    "This candidate may be an object, but does not satisfy all the criteria here. " +
    "Advised to review the intention of the object and determine if the criteria applies.",
    
    "This candidate is an object: no action required."
    
];


var referenceReasonBlocks = "reason-field";
var blockset = "blockset";
var i, j;
var blocksets = document.getElementsByClassName(blockset);
var reasons;
function determineResults() {
    var candidateHeaders = document.getElementsByTagName("caption");
    var verdictInformationElement;
    
    for (i = 0; i < objectCount; i++) {
        candidateHeaders[i].innerHTML = localStorage.key(i);
    }
    
    for (i = 0; i < objectCount; i++) {
        verdictInformationElement = blocksets[i].getElementsByClassName("verdict-info")[0];        
        reasons = blocksets[i].getElementsByClassName(referenceReasonBlocks);        
        var reasonFields = 6;
        var satisfiedCriteria = 0;

        for (j = 0; j < reasonFields; j++) {
            
            if (responses !== null) {
                
                switch (responses[i][j]) {
                    case '1':
                    case true:
                        reasons[j].innerHTML = "Criteria Satisfied";
                        reasons[j].className += " good";
                        ++satisfiedCriteria;
                        break;

                    case '0':
                    case false:
                        reasons[j].innerHTML = outputMessages[j];
                        reasons[j].className += " bad";
                        break;

                    default:
                        break;
                        
                }
                
            }
            else {
                console.log("No responses exist in the session storage.");
            }
           
        }
        
        verdictInformationElement.innerHTML = verdicts[satisfiedCriteria];
    }
    
    
}

function main() {
    determineResults();
}
main();