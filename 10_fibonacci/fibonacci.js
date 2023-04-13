const fibonacci = function(args) {
    let prevNum = 0;
    let currentNum = 0;
    if(args > 0){
        for(i = 0; i < parseInt(args); i++){
            if(currentNum == 0){
                currentNum++;
            }
            else{
                let tempNum = currentNum;
                currentNum = currentNum + prevNum;
                prevNum = tempNum;
            }
        }
        return currentNum;
    }
    else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
