// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.
let name = "Faith Elijah";
let age = 25;
let nationality = "Nigerian";

let introduction = `My name is ${name}, I am ${age} years old and I am a ${nationality}.`;
console.log(introduction);  


// 2. Favorite quote or lyric. Change to uppercase and lowercase.
let favoriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";

let upperCaseQuote = favoriteQuote.toUpperCase();
let lowerCaseQuote = favoriteQuote.toLowerCase();

console.log("Uppercase:", upperCaseQuote);
console.log("Lowercase:", lowerCaseQuote);


// 3. Take a word and reverse it.
let word = "Enigma";
let reversedWord = word.split("").reverse().join("");

console.log("Reversed Word:", reversedWord);  // tpircsavaJ


// 4. Store prices of 3 items and calculate total.
let price1 = 120.50;
let price2 = 349.99;
let price3 = 87.25;

let totalPrice = price1 + price2 + price3;
console.log(`The total price of the items is $${totalPrice.toFixed(2)}`);


// 5. Average of 5 test scores.
let test1 = 85;
let test2 = 90;
let test3 = 78;
let test4 = 92;
let test5 = 88;

let average = (test1 + test2 + test3 + test4 + test5) / 5;
console.log(`The average score is ${average}`);


// 6. Array of 5 favorite foods. Display first and last items.
let favoriteFoods = ["Pizza", "Jollof Rice", "Burgers", "Suya", "Pounded Yam"];

console.log("First food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);


// 7. Add food to beginning and end. Show updated list.
favoriteFoods.unshift("Fried Plantain");  // Add at beginning
favoriteFoods.push("Ice Cream");          // Add at end

console.log("Updated food list:", favoriteFoods);


// 8, 9, 10. Create three arrays with 10 student names each.
let jssOne = ["Alice", "Bola", "Charles", "Daisy", "Emeka", "Fatima", "George", "Hauwa", "Ibrahim", "Juliet"];
let jssTwo = ["Kenny", "Linda", "Mike", "Nora", "Oscar", "Precious", "Queen", "Rita", "Sam", "Tolu"];
let jssThree = ["Uche", "Vera", "Wale", "Xavier", "Yemi", "Zara", "Abdul", "Becky", "Chris", "Deborah"];

console.log("JSS One:", jssOne);
console.log("JSS Two:", jssTwo);
console.log("JSS Three:", jssThree);
