/*
Create a function that can be used with sort. This function should take two 
strings, and return a value that sort can use to determine which is the 
longest string.
*/

var words = ["random", "incredible", "idiot", "function"];

function longWord(str1, str2) {
    
    return str2.length - str1.length;
}

var result = words.sort(longWord);
console.log(result);





