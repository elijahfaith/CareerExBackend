// 1. JAMB-style score check
const adeScore = 170;

function checkJambScore(score) {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

checkJambScore(adeScore);


// 2. Voting eligibility
const topeAge = 20;

function checkVotingEligibility(age) {
  return age >= 18 ? "You are eligible to vote" : "Not eligible";
}

console.log(checkVotingEligibility(topeAge)); 


// 3. Grading system
const name = "Chika";
const chikaScore = 76;

function gradeStudent(name, score) {
  if (score >= 90) return "Excellent";
  else if (score >= 75) return "Good";
  else if (score >= 50) return "Average";
  else return "Fail";
}

console.log(`${name}: ${gradeStudent(name, chikaScore)}`); 


// 4. Access based on ID and age
const hasID = true;
const isAbove18 = false;

function grantAccess(hasID, isAbove18) {
  return hasID && isAbove18 ? "Access granted" : "Access denied";
}

console.log(grantAccess(hasID, isAbove18));


// 5. Loop through scores and print Pass/Fail
const studentScores = [30, 55, 67, 50];

function checkScores(scores) {
  for (let i = 0; i < scores.length; i++) {
    const result = scores[i] > 50 ? "Pass" : "Fail";
    console.log(`Score: ${scores[i]} - ${result}`);
  }
}

checkScores(studentScores);


// 6. Passed Math and English
const mathScore = 65;
const englishScore = 70;

const passedBoth = (math, english) => (math >= 50 && english >= 50 ? "Yes" : "No");

console.log(passedBoth(mathScore, englishScore)); 


// 7. Email or phone check
const email = "";
const phone = "08012345678";

function canSignUp(email, phone) {
  return email || phone ? "Signup allowed" : "Email or phone required";
}

console.log(canSignUp(email, phone));


// 8. Validate username and password
const username = "admin";
const password = "";

function validateLogin(username, password) {
  return !username || !password ? "Invalid input" : "Login successful";
}

console.log(validateLogin(username, password));


// 9. Work status using ternary
const hoursWorked = 35;

function checkWorkStatus(hours) {
  return hours >= 40 ? "Full-time" : "Part-time";
}

console.log(checkWorkStatus(hoursWorked)); 


// 10. Get larger number
const num1 = 45;
const num2 = 89;

const getLargerNumber = (a, b) => (a > b ? a : b);

console.log(getLargerNumber(num1, num2));
