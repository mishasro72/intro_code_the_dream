// //# JavaScript Objects
// // This is the coding assignment for the third week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
// //   - Object Basics
// //   - Primitive vs Object Types
// //   - Object De-structuring
// //   - Manipulating Objects


// // ---------- QUESTION 1 ----------
// // Objects are a way to store property:value pairs of data in a variable.  First, create an object called 'myPet'.  Add three properties called 'name', 'species', and 'color' to the 'myPet' object below and assign each of them values.  Use your console.log's to print the values of each property to the console.

// // EXAMPLE LOG:
// //    console.log("Q1 name: ", myPet.name);
// //    console.log("Q1 species: ", myPet.species);
// //    console.log("Q1 color: ", myPet.color);
// // EXAMPLE OUTPUT:
// //    Q1 name: Teddy
// //    Q1 species: ferret
// //    Q1 color: brown

// let myPet = {
//     name: 'Norka',
//     species: 'dog',
//     color: 'brown'
// }

// console.log(`Q1 name: ${myPet.name}`);
// console.log(`Q1 species: ${myPet.species}`);
// console.log(`Q1 color: ${myPet.color}`);

// // ---------- QUESTION 2 ----------
// // Now let's see how we can use the property:value pairs in template literals.  Create a variable called 'aboutPet' and assign it a template literal that uses the 'myPet' object to make a sentence sharing all the pet details.  The sentence should look something like this: "Teddy is a brown ferret."

// let aboutPet = `${myPet.name} is a ${myPet.color} ${myPet.species}`;

// console.log(`Q2: ${aboutPet}.`);

// // ---------- QUESTION 3 ----------
// // Let's add a method to our object.  Create a method called 'age' that takes no parameters, and uses no outside variables (hint: use 'this').  The method should return the age of the pet in years.

// // EXAMPLE LOG:
// //    console.log("Q3: ", myPet.age());
// // EXAMPLE OUTPUT:
// //    Q3: 7

// myPet.ageInYears = 5;
// myPet.age = function() {
//     return this.ageInYears;
// }

// console.log("Q3: ", myPet.age());
// // Don't forget your console.logs!

// // ---------- QUESTION 4 ----------
// // Now, let's see how we can use data within objects in functions.  Write a function called 'isDog' that takes one object parameter.  In the function, create a variable called 'speciesChecker' and assign it the value 'dog'.  Then, still in the function, return true if the object's species value is equal to the variable 'speciesChecker', or false if not.

// // EXAMPLE LOG:
// //    console.log("Q4: ", isDog(myPet));
// // EXAMPLE OUTPUT: (if your 'myPet' object from Question 1 is about any animal other than a dog)
// //    false
// // NOTE: if when you made 'myPet' in Question 1, you did put dog as species, you should get true as your output instead.

// function isDog(object){
//     return object.species === 'dog';
// }

// console.log("Q4: ", isDog(myPet));

// // ---------- QUESTION 5 ----------
// // Now lets work with date and time
// // Create a function called 'month'.  Inside the function, declare a variable named 'today' that uses the Date object.  Your function should then return only the month of the 'today' variable.  You can return the month as a number
// // STRETCH GOAL: Return the month as a string

// // EXAMPLE LOG:
// //    console.log("Q5: ", month());
// // EXAMPLE OUTPUT: (Will be different for each class but should be the current month.  For example if you're doing this assignment in January...)
// //    Q5: 01
// //    stretch goal should result in:
// //    Q5: January

// function month(){
//     let today = new Date();
//     let months = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"]
//     return months[today.getMonth()];
// }

// console.log("Q5: ", month());

//_______________________
// function month() {
//     let today = new Date();
//     return today.getMonth() + 1;
// }


// function monthAsWord() {
//     let today = new Date();
//     let months = ["HappyNewYear", "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"]
//     return months[today.getMonth() + 1];
// }

// console.log("Q5: ", month());
// console.log("Q5 (stretch goal): ", monthAsWord());

// // ---------- QUESTION 6 ----------
// // Let's explore dates now.  Create a variable named 'birthday' and assign it the date of your next birthday.  Then create a function called 'birthdayCountdown' that takes birthday as a parameter and returns the number of days until your next birthday.  Remember that you may need to use a particular format for your birthday so you can properly convert the data to something you can use in the function.  CAUTION: 2024 is a leap year!

// // STRETCH GOAL: As we mentioned in Question 8, you should consider boundary cases. What if the date wasn't formatted to work with your function?

// // EXAMPLE LOG:
// //    console.log("Q6: ", birthdayCountdown(birthday));
// // EXAMPLE OUTPUT: (if your next birthday was March 15, 2024 and today was February 3, 2024)
// //    Q6: 41

// // let birthday = new Date ("2025-12-11");
// // function birthdayCountdown(end){
// //     let start = new Date();
// //     return Math.ceil(((end - start) / 1000 / 60 / 60 / 24));
// // }

// // console.log(birthdayCountdown(birthday));
// // console.log(birthday.getFullYear());

// // function checkTheDate(date){
// //     if(isNaN(date.getTime())){
// //         return 'Please set the date for the next birthday (YYYY-MM-DD format)';
// //     }
// //     return true;
// // }

// let birthday = new Date('2025-12-11');

// function birthdayCountdown(end) {
//     let start = new Date();
//     if (isNaN(end.getTime())) {
//         return 'Please set the date for the next birthday (YYYY-MM-DD format)';
//     } else {
//         return Math.ceil(((end - start) / 1000 / 60 / 60 / 24));
//     }
// }

// console.log("Q6: ", birthdayCountdown(birthday));



// // console.log(birthday.toLocaleString('ru-RU'));

// // Set the date for the next birthday (YYYY-MM-DD format)

// // ---------- QUESTION 7 ----------
// // If we work with dates, we should work with time also.  Create a variable named 'startTime' and assign it a start time.  Create a variable named 'endTime' and assign it an end time.  Then create a function called 'timeDifference' that takes startTime and endTime as parameters and returns the number of hours and minutes between the start and end times.  Remember that you may need to be careful what format you use when entering times so you can properly convert the data to something you can use in the function.

// // STRETCH GOAL: You should consider boundary cases. What if the times are not formatted to work with your function?

// // EXAMPLE LOG:
// //    console.log("Q7: ", timeDifference(startTime, endTime));
// // EXAMPLE OUTPUT: (if startTime was 12:37pm and endTime was 3:19pm)
// //    Q7: 2 hours and 42 minutes

// function checkRegion(str){
//     if(str.toLowCase().includes('pm') || str.toLowCase.includes('am')){
//         let timeStart = new Date(new Date().toDateString() + ' ' + starTime).toLocaleString('en-US');

//     }
// }

let startTime = '23:59';
let endTime = '11:59';

function checkNan(number){
    return isNaN(number);
}

function checkEndTimeEarlier(start, end){
     if (end < start){
        let FixedEnd = new Date(end);
        FixedEnd.setDate(end.getDate() + 1);
        return FixedEnd;
    }
    return end;
}

// let timeStart = new Date(new Date().toDateString() + ' ' + startTime);
// let timeEnd = new Date(new Date().toDateString() + ' ' + endTime);

function timeDifference(start, end){
    let timeStart = new Date(new Date().toDateString() + ' ' + start);
    let timeEnd = new Date(new Date().toDateString() + ' ' + end);
     
    if (checkNan(timeStart.getTime()) || checkNan(timeEnd.getTime())){
        return 'Please set the correct time (using hh:mm pm/am format)';
    } 
    timeEnd = checkEndTimeEarlier(timeStart, timeEnd);
    let diff = timeEnd - timeStart;
    let hours = Math.floor(diff / 1000 / 60 / 60);
    let minutes = Math.floor((diff - (hours * 60 * 60 * 1000)) / 1000 / 60);
    return `${hours} hours and ${minutes} minutes`;
}

 console.log("Q7: ", timeDifference(startTime, endTime));

// // let timeStart = new Date();
// // console.log(timeStart);
// // console.log(timeStart.toDateString());


// // console.log(timeEnd);
// // let diff = timeEnd - timeStart;

// // // let hours = Math.floor(diff / 1000 / 60 / 60);
// // // let minutes = ((diff - (hours * 60 * 60 * 1000)) / 1000 / 60);

// // console.log(hours, minutes);

// // ---------- QUESTION 8 ----------
// // Create a function called 'absDiff' that takes 2 parameters and returns the absolute difference between them. For example, if the first parameter is smaller than the second, the first parameter will be subtracted from the second. If the first parameter is larger than the second, the second parameter will be subtracted from the first. If they are both equal, return the first parameter subtracted by the second.  It's important to consider boundary cases - situations that may change how you expect your code to behave.  For this reason, work with same numbers and negative numbers as well to see if you get your absDiff function to calculate the absolute difference regardless of number type.

// // EXAMPLE LOG 1:
// //    console.log("Q8 first larger: ", absDiff(29, 5));
// // EXAMPLE OUTPUT: (if using the numbers 29 and 5 as in the example log)
// //    Q8 first larger: 24
// // EXAMPLE LOG 2:
// //    console.log("Q8 second larger: ", absDiff(3, 16));
// // EXAMPLE OUTPUT: (if using the numbers 3 and 16 as in the example log)
// //    Q8 second larger: 13
// // EXAMPLE LOG 3:
// //    console.log("Q8 same nums: ", absDiff(5, 5));
// // EXAMPLE OUTPUT 3: (if using the numbers 5 and 5 as in the example log)
// //    Q8 same nums: 0
// // EXAMPLE LOG 4:
// //    console.log("Q8 neg num: ", absDiff(-6, 5));
// // EXAMPLE OUTPUT 4: (if using the numbers -6 and 5 as in the example log)
// //    Q8 neg num: 11

// function absDiff(num1, num2){
//     let a = Number(num1);
//     let b = Number(num2);
//     if(checkNan(a) || checkNan(b)){
//         return 'You should provide numbers. Try again please!'
//     } else {
//         return a < b ? b - a : a - b;
//     }
// }
// console.log("Q8 first larger: ", absDiff(29, 5));

// console.log("Q8 second larger: ", absDiff(3, 16));

// console.log("Q8 neg num: ", absDiff(-6, 'nan'));


// ---------- QUESTION 9 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit.  Log both the input and output values

// EXAMPLE LOG:
//    console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//    Q9 convertTemp: 0 32
// // Create logs for several different celsium temperatures

// let celsiusTemp = 0;
// let celsiusTemp1 = 32;
// let celsiusTemp2 = 54;
// let celsiusTemp3 = 100;

// function convertTemp(temp) {
//     let a = Number(temp);
//     if (isNaN(a)) {
//         return 'Please provide correct temperatue parameter in celsius'
//     } else {
//         return a * 1.8 + 32;
//     }

// }

// console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp1));
// console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp2));
// console.log("Q9 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp3));

// let celsiusTempArr = [0, 32, 100, 232];

// function convertTempArr(temp) {
//     let fahrenTemp = [];
//     for (let i of temp) {
//         i = Number(i);
//         if (isNaN(i)) {
//             return 'Please provide correct temperatue parameter in celsius'
//         } else {
//             fahrenTemp.push(i * 1.8 + 32);

//         }
//     }
//     for (let i = 0; i < temp.length; i++) {
//         console.log(`Q9 convertTemp: ${temp[i]} -> ${fahrenTemp[i]})`);
//     }
// }

// convertTempArr(celsiusTempArr);

// ---------- QUESTION 10 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString.  Log both the input and output values

// EXAMPLE LOG:
//    console.log("Q10 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//    Q10 reverseString: HelloWorld dlroWolleH

// function reverseString(str){
//     let newStr = '';
//     for (let i of str){
//         newStr = i.concat(newStr);
//     }
//     return newStr;
// }

// console.log(reverseString('Hello World!'));

// ---------- QUESTION 11 ----------
// Declare a variable named "diameter" and assign it an integer value. Through a series of math calculations and variables, calculate the "radius" (which is half the diameter), the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) and the "area" (which is the Math value pi, multiplied by the radius squared).

// let diameter = 5;

// function circleMetric(diameter){
//     let metric = {};
//     metric['radius'] = diameter * 0.5;
//     metric['circumference'] = 2 * Math.PI * metric['radius'];
//     metric['area'] = Math.PI * metric['radius'] ** 2;
//     return metric;
// }

// console.log(circleMetric(diameter)['radius']);
// console.log(circleMetric(diameter)['circumference']);
// console.log(circleMetric(diameter)['area']);

// Don't forget your console.logs!


// ---------- QUESTION 12 ----------
// Let's make a useful math problem - create a tip calculator! Declare two variables called "billTotal" and "tipPercentage". Assign billTotal a floating point number with two decimal places. Assign tipPercentage a floating point number between 0.1 and 0.9. Create a third variable called "tip" that will multiply tipPercentage and billTotal then use the addition assignment operator to add that amount back to billTotal. Example: if our bill 35.75 and we want to leave a 20% tip (0.2) our new billTotal should come out to 42.90.
let billTotal = 35.75;
let tipPercentage = 0.2;

function tipCalculator(billTot, tipPer) {
    let tip = billTot * tipPer;
    return ((billTot + tip).toFixed(2));
}
console.log(`Q12 Total bill is: \$${tipCalculator(billTotal, tipPercentage)}`);

// ---------- QUESTION 13 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//    console.log("Q13: ", multiplyThese(num1, num2));
// EXAMPLE OUTPUT: (if num1 and num2 are 2 and 5 respectively))
//    Q13: 10

let num1 = 2.0;
let num2 = 5;

function multiplyThese(a, b) {
    if (isNaN(a) || (isNaN(b))) {
        return 'Put numbers!'
    } else {
        return a * b;
    }
}

console.log("Q13: ", multiplyThese(num1, num2));
// ---------- QUESTION 14 ----------
// Building on the last question, create a function called 'getAverage' that takes 2 parameters and returns their average (hint: there is no built-in average operator in JavaScript).  Use the variables (num1 and num2) you created in the last question to test your function.  NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

function getAverage(a, b){
    if (isNaN(a) || (isNaN(b))) {
        return 'Put numbers!'
    } else {
        return (a + b) / 2;
    }
}
console.log("Q14: ", getAverage(num1, num2));
