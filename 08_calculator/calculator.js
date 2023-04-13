const add = function(...args) {
	let output = 0;
  if(args.length > 0){
    for(i = 0; i < args.length; i++){
      output += parseInt(args[i]);
    }
  }
  return output;
};

const subtract = function(...args) {
	let output = args[0];
  if(args.length > 0){
    for(i = 1; i < args.length; i++){
      output -= args[i];
    }
  }
  return output;
};

const sum = function(args) {
	let output = 0;
  if(args.length > 0){
    for(i = 0; i < args.length; i++){
      output += parseInt(args[i]);
    }
  }
  return output;
};

const multiply = function(args) {
  let output = args[0];
  if(args.length > 0){
    for(i = 1; i < args.length; i++){
      output *= args[i];
    }
  }
  return output;
};

const power = function(...args) {
	let output = args[0];
  for(i = 1; i < args.length; i++){
    let prenum = output;
    for(j = 1; j < args[i]; j++){
      output *= prenum;
    }
  }
  return output;
};

const factorial = function(args) {
	//5! factorial is 1 * 2 * 3 * 4 * 5
  //only passing 1 paramter
  if (args == 0){
    return 1;
  }
  else{
    return args * factorial(args - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
