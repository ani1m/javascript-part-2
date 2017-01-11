/* 1
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


/* 2
Create an array of objects (don’t need to use new here, just regular object 
literals). These objects will contain a name and email property. 
*/

var arrObjects = [ 
    { name: "Toutou", email:        "jaime@lestoutous.com"},
    { name: "Pitouminou", email:    "wheres@mypitou.com"},
    { name: "Minou", email:         "notcrazy@minou.com"}
    ];
    
// Then, run some code that will sort your array by the longest name. 
console.log(arrObjects.sort(function(n1,n2)

{return n2.name.length - n1.name.length}
)); 

/* Then, run some code that will sort your array by e-mail address in 
alphabetical order. */
console.log(arrObjects.sort(function(n1,n2)

{ return n1.email > n2.email }

));

/* 3
Create a function that can be used with Array.prototype.map. This function 
should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.
*/

var numbers = [2,5,4,2,3,2];

function squared (x) {
    return x * x;
}
var newArr = numbers.map(squared);
console.log(newArr);

/* 4
Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each containing a 
“num” property. 
*/

var arrObj = [
    {num: 23,   name: "idk"},
    {num: 44,   name: "bb"},
    {num: 2,    name: "cc"},
    {num: 4,    name: "gg"}
    ];
    
    function objNum (x) {
        return x.num * x.num ;
    }
    var newNum = arrObj.map(objNum);
    console.log(newNum);
    