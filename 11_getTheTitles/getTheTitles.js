const getTheTitles = function(args) {
    /* so it's a lot more simple than this, you need to use args.map to apply an array of objects
    let output;
    for(i = 0; i < args; i++){
        let temp = args[i];
        output = temp.title;
    }
    return output;
    */
   return args.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
