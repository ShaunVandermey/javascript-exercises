const leapYears = function(input) {
    /*
    let years4 = input;
    let years100 = input;
    let years400 = input;
    while(years4 >= 4){
        years4 = minusBy(years4, 4);
    }
    while(years100 >= 100){
        years100 = minusyBy(years100, 100)
    }
    while(years400 >= 400){
        years400 = minusyBy(years400, 100)
    }
    */
    return ((input % 4 == 0) && (input % 100 != 0)) || (input % 400 == 0);
};


// Do not edit below this line
module.exports = leapYears;
