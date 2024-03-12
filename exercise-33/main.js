//Task 33
//Ordinal number:Ordinal numbers indicate their position in a array ,such as 1st or 2nd .Most ordinal numbers end in th, except 1, 2 and 3.
//*Store the number 1 through 9 in a array. 
//*Loop through the array .Use an if -else chain inside the loop to print the proper ordinal ending for each number .Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",and each result should be on a separate line .
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log("".concat(number, "st")); //1st
    }
    else if (number === 2) {
        console.log("".concat(number, "nd")); //2nd
    }
    else if (number === 3) {
        console.log("".concat(number, "rd")); //3rd
    }
    else {
        console.log("".concat(number, "th")); //4th, //5th, //6th, //7th, //8th, //9th
    }
}
