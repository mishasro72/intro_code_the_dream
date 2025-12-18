"use strict";
//Task 1 Write a function that capitalizes a string

function capitalizeString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be string!");
  }
  return str.toUpperCase();
}

// Example usage:
console.log(capitalizeString("hello world")); // Output: "HELLO WORLD"

/* Task 2 Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

//version 1
function panic(str) {
  if (typeof str != "string") {
    throw new TypeError("Input must be string!");
  }
  return str.split(" ").join(" 😱 ").toUpperCase() + "!";
}

//version 2
function panic2(str) {
  if (typeof str != "string") {
    throw new TypeError("Input must be string!");
  }
  let arr = str.split(" ");
  let newArr = [];
  for (const i of arr) {
    newArr.push(i.toUpperCase());
  }
  return newArr.join(" 😱 ") + "!";
}

// Example usage:
console.log(panic("I'm almost out of coffee"));
console.log(panic("wold"));

console.log(panic2("I'm almost out of coffee"));
console.log(panic2("wold"));

/* Task 3 Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

//version 1
function whisper(str) {
  let arr = str.split(" ");
  arr.unshift("shh...");
  arr = arr.map((item) => item.toLowerCase());
  arr[arr.length - 1] = arr[arr.length - 1].replace("!", "");
  return arr.join(" ");
}

//version 2
function whisper2(str) {
  if (str.endsWith("!")) {
    return "shh... " + str.slice(0, -1).toLowerCase();
  } else {
    return "shh... " + str.toLowerCase();
  }
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

console.log(whisper2("PLEASE STOP SHOUTING."));
console.log(whisper2("MA'AM, this is a Wendy's!"));

/* Task 3 Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  let newStr = "";
  str.split("").forEach(function (char, index) {
    if (index % 2 == 0) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  });
  return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* Task 4 toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(" ")
    .map((item) => capitalizeWord(item))
    .join(" ");
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/* Task 5 Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
    } else if (i % 3 === 0) {
      console.log(`${i} - Vacation!`);
    } else if (i % 5 === 0) {
      console.log(`${i} - $100,000 bonus!`);
    } else {
      console.log(`${i} - :(`);
    }
  }
}

awardBonuses();

/*  Task 6 Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  if (!word.startsWith(":") && !word.endsWith(":")) {
    return word;
  }
  let newWord = word.slice(1, -1);
  if (emojis[newWord]) {
    return emojis[newWord];
  } else {
    return newWord;
  }
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(" ")
    .map((word) => emojifyWord(word))
    .join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));

/* Task 7 Anagrams

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

//version 1

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();

  return arr1.every((i, index) => i === arr2[index]);
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));

//version 2

function isAnagram2(str1, str2) {
  function normalizer(str) {
    return str.toLowerCase().split("").sort().join("");
  }
  return normalizer(str1) === normalizer(str2);
}

console.log(isAnagram2("allergy", "gallery"));
console.log(isAnagram2("treasure", "measure"));

/* Task 8 We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

//version 1
function reverseString(str) {
  return str.split("").reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr) {
  return arr.map((str) => reverseString(str));
}

////version 2
function reverseString2(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverseStringsInArray2(arr) {
  return arr.map((str) => reverseString2(str));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

console.log(reverseString2(title));
console.log(reverseStringsInArray2(messages));

/* Task 9 Palindrome Checker
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str) {
  const newStr = str.split("").reverse().join("");
  return str === newStr;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));

/* Task 10 Remove Duplicate Characters 
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

//version 1
function removeDupeChars(chars) {
  let arr = chars.split("");
  let newPassword = [];

  for (let i of arr) {
    if (!newPassword.includes(i)) {
      newPassword.push(i);
    }
  }
  return newPassword.join("");
}

console.log(removeDupeChars(password));

// //version 2
function removeDupeChars2(chars) {
  let newPassword = "";

  for (let i of chars) {
    if (!newPassword.includes(i)) {
      newPassword += i;
    }
  }
  return newPassword;
}

console.log(removeDupeChars2(password));

/* Task 11 How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  let charCount = {};
  let newStr = str.replace(/\s/g, "").toLowerCase();

  for (let i of newStr) {
    if (charCount[i]) {
      charCount[i] += 1;
    } else {
      charCount[i] = 1;
    }
  }
  return charCount;
}

console.log(countChars("Peggy Porth"));

/* Task 12 Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

//version 1
function removeDupesFromArray(arr) {
  let newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

//version 2
function removeDupesFromArray2(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

//version 3 j,jectrs and filter
function removeDupesFromArray3(arr) {
  let duplCheck = {};
  return arr.filter((item) => {
    if (!duplCheck[item]) {
      duplCheck[item] = true;
      return true;
    }
    return false;
  });
}

//version 4 Set
function removeDupesFromArray4(arr) {
  return [...new Set(arr)];
}

console.log(removeDupesFromArray(eggScrambleRecipe));
console.log(removeDupesFromArray2(eggScrambleRecipe));
console.log(removeDupesFromArray3(eggScrambleRecipe));
console.log(removeDupesFromArray4(eggScrambleRecipe));

/* Task 13 Flatten Nested Arrays
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

//version 1
function flatten(arr) {
  let flatArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((i) => flatArr.push(i));
    } else {
      flatArr.push(item);
    }
  });
  return flatArr;
}

//version 2 Using built-in flat() method
function flatten2(arr) {
  return arr.flat();
}

//version 3 Using recursion
function flatten3(arr) {
  let flatArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatten3(item));
    } else {
      flatArr.push(item);
    }
  });
  return flatArr;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

console.log(flatten2(kittyPrizes));
console.log(flatten2(kittyScores));

console.log(flatten3(kittyPrizes));
console.log(flatten3(kittyScores));

/*Task 14 Student Attendance Count
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArray(studentCount));

/* Task 15 Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5,
};

//version 1 Using key .. of ..
function findTheWinner(obj) {
  let votes = 0;
  let name = "";
  for (let key in obj) {
    if (obj[key] > votes) {
      votes = obj[key];
      name = key;
    }
  }
  return `The winner is ${name} with ${votes} votes!`;
}

//version 2 Using Object.entries()
function findTheWinner2(obj) {
  let votes = 0;
  let name = "";
  for (let [key, value] of Object.entries(obj)) {
    if (value > votes) {
      votes = value;
      name = key;
    }
  }
  return `The winner is ${name} with ${votes} votes!`;
}

console.log(findTheWinner(gameNightFood));
console.log(findTheWinner2(gameNightFood));

/* Task 16 Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/
import podcasts from "./data.js";

function getFreePodcasts(data) {
  return data
    .filter((podcast) => !podcast.paid)
    .map(({ title, rating, paid }) => ({ title, rating, paid }));
}

console.log(getFreePodcasts(podcasts));

/* Task 17 Candy Sale!
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/
import products from "./data_candy.js";

function getSaleItems(data) {
  return data
    .filter((item) => item.type === "sweet")
    .map(({ item, price }) => ({ item, price }));
}

let shoppingCarts = getSaleItems(products);
console.log(shoppingCarts);


/* Task 18 Total the Groceries 
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

import shoppingCart from "./data_groceries.js";

function total(arr){

  return arr
    .reduce((sum, { price }) => sum + price, 0)
    .toFixed(2);
    
}

console.log(total(shoppingCart));

