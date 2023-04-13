const reverseString = function(input) {
    let letters = input.split('');
    let output = "";
    for(let i = letters.length; i > 0; i--){
        output += letters[i - 1];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
