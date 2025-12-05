// // ---------- QUESTION 1 ----------
// // Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// // EXAMPLE "LOG":
// //    repeat(3);
// // EXAMPLE OUTPUT:
// //    Hello World!
// //    Hello World!
// //    Hello World!

// function repeat(n) {
//     for (let i = 1; i <= n; i += 1) {
//         console.log(`Hello world!`)
//     }
// };

// console.log("Q1: ");
// repeat(3);


// // ---------- QUESTION 2 ----------
// // Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.

// // EXAMPLE LOG:
// //    console.log("Q2: ", pyramidCounting(4));
// // EXAMPLE OUTPUT:
// //    Q2: 10
// // The mathematical explanation of this is 0+1+2+3+4 = 10.

// function pyramidCounting(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log("Q2: ", pyramidCounting(4));

// // ---------- QUESTION 3 ----------
// // Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// // EXAMPLE LOG:
// //    console.log("Q3: ", noVowels(adventurous));
// // EXAMPLE OUTPUT:
// //    Q3: dvntrs

// function isVowel(char){
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(char.toLowerCase())){
//         return true;
//     }
// }

// function noVowels(str) {
//     let wordOutVowels = '';
//     for (let char of str) {
//         if (!isVowel(char)) {
//             wordOutVowels += char;
//         }
//     }
//     return wordOutVowels;
// };

// console.log("Q3: ", noVowels("adventurous"));



// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string.

// EXAMPLE LOG:
//    console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//    Q4: 6

// function isVowel(char){
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(char.toLowerCase())){
//         return true;
//     }
// }

// function vowelCount(str){
//     let count = 0;
//     for (let char of str) {
//         if(isVowel(char)){
//             count ++;
//         }
//     }
//     return count;
// };

// console.log(vowelCount('I love to code.'));



// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//    console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT:
//    Q5: 8

// function isOdd(number){
//     if(number % 2 === 1){
//         return true;
//     }
// }

// function numOfOdds(numberEnd){
//     let count = 0;
//     for(let i = 0; i <= Math.abs(numberEnd); i++){
//         if(isOdd(i)){
//             count++;
//         }
//     }
//     return count;
// };

// console.log(numOfOdds(-17));
// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'.  Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable.  Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not.  Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//    console.log("Q6 empty: ", arrayChecker(empty));
//    console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//    Q6 empty: true
//    Q6 not empty: false

// const empty = [];
// const full = ['I', 'love', 'CTD'];

// function arrayChecker(arrayName) {
//     if (arrayName.length) {
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log("Q6 empty: ", arrayChecker(empty));
// console.log("Q6 not empty: ", arrayChecker(full));

// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter.  The function should return the element in the array at the given number index or 'null' if it doesn't exist.  Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//    console.log("Q7: ", getElementAt(full, 2));
//    console.log("Q7: ", getElementAt(full, 7));
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q7: code
//    Q7: null
// const full = ['I', 'love', 'CTD'];

// function arrayLengthChecker(arrayName, index){
//     if(arrayName.length < index){
//         return false;
//     } else {
//         return true;
//     }
// };

// function getElementAt(arrayName, index){
//     if(arrayLengthChecker(arrayName, index)){
//         return (arrayName[index]);
//     } else {
//         return null;
//     };
// };

// console.log("Q7: ", getElementAt(full, 2));
// console.log("Q7: ", getElementAt(full, 4));
// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array.  The function should return the NEW array.  Use your 'full' variable from Question 6 to test.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//    console.log("Q8: ", insertInArray(full));
//    console.log("original array: ", full);
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q8: ["dream", 0, 19, "code", 24, 180]
//    original array: ["dream", 19, "code", 24, 180]

// const full = ['I', 'love', 'CTD'];

// function insertInArray(nameOfArray) {
//     let slice1 = nameOfArray.slice(0, 1);
//     let slice2 = nameOfArray.slice(1);
//     return slice1.concat(0, slice2);
// }
// console.log(full);
// console.log(insertInArray(full));

// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those.  To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//    console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//    Q9 same: true

// EXAMPLE LOG:
//    console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//    Q9 different: false

// EXAMPLE LOG:
//    console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//    Q9 different: false

// const full = ['I', 'love', 'CTD', '!'];
// const empty = new Array();
// const part = full.slice(0,2);
// const compare = full.slice(0);

// // console.log(part);

// function compareArrays(array1, array2){
//     if(array1.length == array2.length){
//         for(let i = 0; i <= array1.length; i++){
//             if(array1[i] !== array2[i]){
//                 return false;
//             }
//         }
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log("Q9 same: ", compareArrays(full, compare));
// console.log("Q9 different: ", compareArrays(full, empty));
// console.log("Q9 partial: ", compareArrays(full, part));

// console.log(compare.push(1));
// console.log(compare);
// console.log(compare.unshift(9));
// console.log(compare);
// console.log(compare.shift());
// console.log(compare);
// console.log(compare.pop());
// console.log(compare);
// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]).  Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.

// STRETCH GOAL: write another version of calculateTotal (call it calculateTotal2) using the 'reduce()' method

// EXAMPLE LOG:
//    console.log("Q10: ", calculateTotal(numbers));
// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//    Q10: 17
// const numbers = [10, 3, 4];

// function calculateTotal(nameOfArray){
//     let total = 0;
//     for(let i = 0; i < nameOfArray.length; i++){
//         total += nameOfArray[i];
//     }
//     return total;
// };

// function calculateTotal2(nameOfArray){
//     return nameOfArray.reduce((total, current) => total + current, 0);
// };


// console.log("Q10: ", calculateTotal(numbers));
// console.log(`Q10 with reduce method: ${calculateTotal2(numbers)}`);


// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// STRETCH GOAL: write another version of findEvens or findOdds using the \`filter()\` method

// EXAMPLE LOG:
//    console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//    console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));
// EXAMPLE OUTPUT:
//    Q11 evens: [10,2,6]
//    Q11 odds: [3,19,7,93]

// const originalArray = [10,2,3,19,7,6,93];

// let newArray = originalArray.slice();
// console.log(newArray);
// console.log(originalArray);
// console.log(originalArray.length, newArray.length);
// console.log(originalArray.join(", "));

// function isOdd(number) {
//     return number % 2 !== 0;
// };

// function isEven(number){
//     return number % 2 == 0
// };

// function findEvens(nameOfArray) {
//     let newArray = [];
//     for (let i of nameOfArray) {
//         if (isEven(i)) {
//             newArray.push(i);
//         }
//     }
//     if (newArray.length) {
//         return newArray;
//     } else {
//         return (`There are no evens in this array!`);
//     }
// };

// function findOdds(nameOfArray) {
//     let newArray = [];
//     for (let i of nameOfArray) {
//         if (isOdd(i)) {
//             newArray.push(i);
//         }
//     }
//     if (newArray.length) {
//         return newArray;
//     } else {
//         return (`There are no odds in this array!`);
//     }
// };

// function findEvensFilter(nameOfArray){
//     return nameOfArray.filter(number => number % 2 === 0);   
// };

// function findOddsFilter(nameOfArray){
//     return nameOfArray.filter(number => number % 2 !== 0);
// }

// // console.log("Q11 evens: ", findEvens([3,19,7,93]));
// // console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));
// console.log("Q11 evens with filter: ", findEvensFilter([2,3,19,7,93,10]));
// console.log("Q11 odds with filter: ", findOddsFilter([10,2,3,19,7,6,93]));


// const nums = [5, 6, 7];

// nums.reduce((acc, curr, 1, array) => {
//     console.log("acc =", acc);
//     console.log("curr =", curr);
//     console.log("index =", index);
//     console.log("array =", array);
//     console.log("------");

//     return acc + curr;
// }, 0);

// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// STRETCH GOAL: write another version makeSquares using the \`map()\` method

// EXAMPLE LOG:
//    console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT:
//    Q12: [4,25,64]

// let originalArray = [2,5,8];

// function makeSquares(nameOfArray){
//     let newArray = [];
//     for(let number of nameOfArray){
//         newArray.push(number ** 2);
//     };
//     return newArray;
// };

// console.log("Q12: ", makeSquares([2,5,8]));

// function makeSquaresWithMap(nameOfArray){
//     return nameOfArray.map(number => number ** 2);
    
// };

// console.log("Q12 with map: ", makeSquaresWithMap(originalArray));

// console.log(originalArray);

// ---------- QUESTION 13 ----------
// Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array.  The function will return the array of values.

// EXAMPLE LOG:
//    console.log("BONUS: ", fizzBuzz();
// EXAMPLE OUTPUT:
// //    BONUS: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// function divBy3(number){
//     return number % 3 === 0;
// };

// function divBy5(number){
//     return number % 5 === 0;
// };

// function divByBoth(number){
//     return (number % 3 === 0 && number % 5 === 0);
// };

// function fizzBuzz(){
//     let newArray = [];
//     for(let i = 1; i <= 15; i++){
//         if(divByBoth(i)){
//             newArray.push('fizzbuzz');
//         } else if (divBy3(i)){
//             newArray.push('fizz');
//         } else if (divBy5(i)){
//             newArray.push('buzz');
//         } else{
//             newArray.push(i);
//         }
//     }
//     return newArray;
// }

// console.log("BONUS: ", fizzBuzz());

function fizzBuzz(){
    let newArray = [];
    for(let i = 1; i <= 15; i++){
        switch (true){
            case (i % 15 === 0):
                newArray.push('fizzbuzz');
                break;
            case (i % 3 === 0):
                newArray.push('fizz');
                break;
            case (i % 5 === 0):
                newArray.push('buzz');
                break;
            default:
                newArray.push(i);
        }
    }
    return newArray;
}

console.log(fizzBuzz(15));

// const cars = ["Saab", "Volvo", "BMW"];

// cars.push('Lada');

// console.log(cars);

// let x;
// x = 10;
// x= 20;

// console.log(x);

// // // cars = [1, 2, 3];
// // // console.log(cars);
// for(let i = 1; i < 15; i++){
//     if(i == 9){
//         //break;
//         continue;
//     }
//     console.log(i);
// }