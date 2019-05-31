var debug = true;
var dummies = {
    alpha:      "010101",
    bravo:      "101010",
    charlie:    "000111",
    echo:       "111000",
    foxtrot:    "000000",
    golf:       "111111",
    hotel:      "110011",
    
    juliet:     "101101",
    
    lima:       "100000",
    
    romeo:      "010010",
    
    zulu:       "000001"
};
var dummyNames = Object.keys(dummies); // get the names of each property as a string

function testDummy() {
    if (debug) { 
        console.log("Setting dummies...");
    }
    
    var value;
    var key;
    for (var i = 0; i < dummyNames.length; i++) { // for every dummy
        key = dummyNames[i];
        value = dummies[key];
        
        
        if (debug) {        
            console.log("Key: " + key + ", Value: " + value);
        }
        
        localStorage.setItem(key, value); // put it in local storage with its value
    }    
}

function main() {
    testDummy();
    console.log("Keys in local storage: " + localStorage.length);
    console.log("Size of dummies: " + dummyNames.length);
}

function PageRefreshRate(seconds) {
    var reload = "location.reload(true);"; // the method to reload the page
    var msconvert = 1000; // ms in a sec
    var ms = seconds * msconvert; // convert sec to ms
    setTimeout(reload, ms); // reload the page after ms milliseconds
    // timeout needs to be provided ms
}

main();