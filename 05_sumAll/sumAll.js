const sumAll = function(firstNum, secondNum) {
    let total = 0;
    if(isNumber(firstNum) && isNumber(secondNum)){
        if(firstNum > 0 && secondNum > 0){
            if(firstNum < secondNum){
                for(i = 0; i < secondNum; i++){
                    total += i + firstNum;
                }
            }
            if(secondNum < firstNum){
                for(i = 0; i < firstNum; i++){
                    total += i + secondNum;
                }
            }
        }
        else{
            total = "ERROR";
        }
    }
    else{
        total = "ERROR";
    }
    return total;
};

function isNumber(input){
    if(typeof input == 'number'){
        return true;
    }
    else{
        return false;
    }
}

// Do not edit below this line
module.exports = sumAll;
