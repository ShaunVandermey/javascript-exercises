const findTheOldest = function(args) {
    let peopleNames =  args.map((names) => names.name);
    let peopleDOB = args.map((DOB) => DOB.yearOfBirth);
    let peopleDOD = args.map((DOD) => DOD.yearOfDeath);
    let oldest = "";
    let prevAge = 0;
    for(i = 0; i < peopleNames.length; i++){
        let difference = peopleDOD[i] - peopleDOB[i];
        if(prevAge == 0 || difference > prevAge){
            oldest = peopleNames[i];
            prevAge = difference;
        } 
    }
    return peopleNames;
};

// Do not edit below this line
module.exports = findTheOldest;
