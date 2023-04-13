const palindromes = function (args) {
    //only looking at letters, not cases or punctuation
    let array = args.split("");
    let lettersArray = [];
    for(i = 0; i < array.length; i++){
        if(array[i].toUpperCase() != array[i].toLowerCase()){
            lettersArray.push(array[i].toLowerCase());
        }
    }
    let allTrue = true;
    for(i = 0; i < lettersArray.length; i++){
        if(lettersArray[i] != lettersArray[lettersArray.length - 1 - i]){
            allTrue = false;
        }
    }
    return allTrue;
};

// Do not edit below this line
module.exports = palindromes;
