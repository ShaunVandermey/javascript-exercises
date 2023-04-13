const removeFromArray = function(arrayInput, ...numbersToRemove) {
    
    //declare array
    let newArray = [];
    arrayInput.forEach((item) => {

        if (!numbersToRemove.includes(item)) {
          newArray.push(item);
        }
      });
      return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
