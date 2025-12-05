//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 4 ARRAY METHODS
//----------------------------------

//  This is the coding assigment for the fourth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:

//  - Using Array Methods
//  - Understanding about iterative methods
//  - Learning about callbacks
//  - Creating Higher Order Functions
//  - Using existing Array Higher Order Functions (e.g. forEach(), map(), filter(), etc.)

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. You'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console on this screen. Check to make sure that the output you get in your Console is the expected output.

// ----- Practice JS array methods: forEach -----
//---------- QUESTION 1 ----------
// Create an variable called 'names' and assign it an array of people's names.  Write a function called 'printNames' that uses the forEach array method to log each name in an array to the console.  Remember, since you're using the console.log in the function, you'll just want to call your function and pass it the array of names when testing your code.

// EXAMPLE CALL:
//    let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"];
//    console.log("Q1 printNames:");
//    printNames(names);

// EXAMPLE OUTPUT:
//   Q1 printNames:
//   Juan Marcos
//   Aleksandra Ivanov
//   Zhang Wei
//   Bernice King

const names = ['Mike', 'Alex', 'Helena', 'Bob'];

function printNames(arr){
    arr.forEach(name => {
        console.log(name);
    });
}

console.log("Q1 printNames:");
printNames(names);

//---------- QUESTION 2 ----------
// Create a variable called 'trees' and assign it an array of 3 objects.  Each object should have a 'type' property and a 'height' property.  You can use 'type' to describe the type of tree (ex. Dogwood, Maple, Oak, Elm, etc.) and give them any height.  Now write a function called 'logTreeType' that uses forEach to log the type of each tree object to the console.

// EXAMPLE CALL:
//   const trees = [
//     { type: "oak", height: "30m" },
//     { type: "elm", height: "25m" },
//     { type: "birch", height: "18m" } ]
//   console.log("Q2 logTreeType:");
//   logTreeType(trees);

// EXAMPLE OUTPUT:
//   Q2 logTreeType:
//   oak
//   elm
//   birch

const trees = [
    { type: 'Maple', height: '10m' },
    { type: 'Pine', height: '15m' },
    { type: 'Cedar', height: '22m' }
];

function logTreeType(arr){
    arr.forEach(tree=> {
        console.log(tree['type'])
    });
}

console.log("Q2 logTreeType:");
logTreeType(trees);


//---------- QUESTION 3 ----------
// Create a variable called 'myNumbers' and assign it an array of numbers.  Now write a function called 'totalPoints' that uses forEach to add up all the numbers in that array of numbers.

// EXAMPLE CALL:
//   let myNumbers = [1, 2, 7, 5, 8];
//   console.log (\`Q3 totalPoints [${myNumbers}]:\`, totalPoints(myNumbers));

// EXAMPLE OUTPUT:
//   Q3 totalPoints [1,2,7,5,8]:  23

// Try a few different input arrays to verify your code is working.

let myNumbers = [1, 2, 4, 6, 8, 9];

function totalPoints(arr){
    let total = 0;

    arr.forEach(number => {
        total += number
    });
    return total;
}

console.log (`Q3 totalPoints [${myNumbers}]:`, totalPoints(myNumbers));

//---------- QUESTION 4 ----------
// Create a variable called 'myWords' and assign it an array of words.  Then write a function called 'buildSentence' that takes in an array of words and uses forEach to add the strings together. It should also add a space, " ", after each word.

// EXAMPLE CALL:
//    let myWords = ["You","can","if","you","think","you","can","!"];
//    console.log (\`Q4 buildSentence [${myWords}]: \`, buildSentence(myWords));

// EXAMPLE OUTPUT:
//   Q4 buildSentence [You,can,if,you,think,you,can,!]:  You can if you think you can !

// Note: You should have a space after the ! too
// Try a few different input arrays to verify your code is working.


let myWords = ['I', 'believe', 'I', 'can', 'fly', '!'];

function buildSentence(words){
    let holeSentence = '';
    words.forEach(word => {
        holeSentence += word + ' '
    }); 
    return holeSentence;
} 

console.log (`Q4 buildSentence [${myWords}]: `, buildSentence(myWords));

let decimals = [3.14, 6.7, 9.99, 0.99];

function logPercentages(numbers){
    numbers.forEach(number => {
        console.log(`${number * 100}%`);
    });
}

console.log("Q5 logPercentages:");
logPercentages(decimals);

// ----- Practice JS Array Methods - map -----
// ---------- QUESTION 6 ----------
// Let's practice using the map array method.  Create a variable called 'startingNums' and assign it an array of numbers.  Then write a function called 'addThreeToAll' that uses map to add 3 to each number in an array of numbers.

// EXAMPLE CALL:
//   let startingNums = [4, 41, 832, 72, 89];
//   console.log (\`Q6 addThreeToAll [${startingNums}]: \`, addThreeToAll(startingNums));

// EXAMPLE OUTPUT:
//   Q6 addThreeToAll [4,41,832,72,89]:  [ 7, 44, 835, 75, 92 ]

let startingNums = [3, 5, 7, 9, 11, 23];

function addThreeToAll(numbers){
    return numbers.map(number => number + 3);
}

console.log(`Q6 addThreeToAll [${startingNums}]: `, addThreeToAll(startingNums));

// ---------- QUESTION 7 ----------
// Create a variable called 'baseNums' and assign it an array of numbers.  Write a function called 'squareAll' that takes in an array of numbers, and uses map to return an array containing the squares of each of the numbers.  Remember, you can square a number by multiplying it by itself, or by using the exponent operator like so:
// let number = 4
// number \* number // 16
// number \*\* 2 // 16
// Note that the caret operator ^ does NOT mean exponent in JavaScript

// EXAMPLE CALL:
//   let baseNums = [4, 41, 832, 72, 89];
//   console.log (\`Q7 squareAll [${baseNums}]:\`, squareAll(baseNums));

// EXAMPLE OUTPUT:
//   Q7 squareAll [4,41,832,72,89]: [ 16, 1681, 692224, 5184, 7921 ]

let baseNums = [67, 6, 7, 99, 25, 4];

function squareAll(arr) {
    return arr.map(number => number ** 2);
}

console.log(`Q7 squareAll [${baseNums}]:`, squareAll(baseNums));

// ---------- QUESTION 8 ----------
// Write a function called 'allGreetings' that takes an array of names (strings) by using your 'names' variable from question 1. Return an array of greetings (strings). The greetings should each be "Hello, [name], nice to meet you!".  You might find it helpful to use template strings.

// EXAMPLE CALL: (using the names array from question 1)
//   console.log (\`Q8 allGreetings [${names}]:\`, allGreetings(names));

// EXAMPLE OUTPUT:
// Q8 allGreetings [Juan Marcos,Aleksandra Ivanov,Zhang Wei,Bernice King]: [
//  'Hello, Juan Marcos, nice to meet you!',
//  'Hello, Aleksandra Ivanov, nice to meet you!',
//  'Hello, Zhang Wei, nice to meet you!',
//  'Hello, Bernice King, nice to meet you!'
// ]


//with forEach
function allGreetings(arr) {
    let namesGreet = [];
    arr.forEach(name => {
        namesGreet.push(`Hello, ${name}, nice to meet you!`);
    })
    return namesGreet;
}

console.log(`Q8 allGreetings [${names}]:`, allGreetings(names));

//with map
function allGreetingsMap(arr) {
    return arr.map(name => `Hello, ${name}, nice to meet you!`);
}

console.log(`Q8 allGreetingsMap [${names}]:`, allGreetingsMap(names));

// ---------- QUESTION 9 ----------
// Create a variable called 'users' and assign it an array of objects.  See example on line 153 below.  Write a function called 'getUsernames' that takes in an array of user objects and uses map to return an array of just the usernames.

// EXAMPLE CALL:
//   let users = [
//   {
//     username: "juan.marcos",
//     isAdmin: false,
//   },
//   {
//     username: "aleksandra.ivanov",
//     isAdmin: false,
//   },
//   {
//     username: "zhang.wei",
//     isAdmin: false,
//   },
//   {
//     username: "bernice.king",
//     isAdmin: true,
//   }
//   ];
//
//  console.log (\`Q9 getUsernames:\`, getUsernames(users));

// EXAMPLE OUTPUT:
//   Q9 getUsernames: [ 'juan.marcos', 'aleksandra.ivanov', 'zhang.wei', 'bernice.king' ]
let users = [
    {
        username: "bill.murray",
        isAdmin: true,
    },
    {
        username: "aleksandr.pushkin",
        isAdmin: false,
    },
    {
        username: "dui.sam",
        isAdmin: false,
    },
    {
        username: "no.king",
        isAdmin: true,
    }
];

function getUsernames(arr){
    return arr.map(user => user.username);
}

console.log (`Q9 getUsernames:`, getUsernames(users));
console.log (`Q9 getUsernames:`, users);
