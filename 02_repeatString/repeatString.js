const repeatString = function(stringName, repeatNumber) {
//take the input string and reutrn a new string that is stringName repeated repeatNumber of times
    let output = "";
    if(repeatNumber > 0){
        for(let i = 0; i <repeatNumber; i++){
            output += stringName;
        }
    }
    if (repeatNumber < 0){
        output = "ERROR";
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
