// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user = prompt("What the day of the week?")
user = user.toLowerCase //Changes string to be lower case
if (user === "saturday" || user === "sunday"){
  console.log("It's the weekend, yay")
} else {
  console.log("It's a week day, BOOOOO ")
}

// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let Age = prompt("Enter your Age")
parseInt(Age)
if (Age <= 12 && Age >= 0){
  console.log("You are a child")
} else if (Age <= 19 && Age >=13){
  console.log("You are a teenager")
} else if (Age <= 64 && Age >= 20){
  console.log("You are an adult")
} else if (Age >= 65){
  console.log("You are a senior")
}

// WHILE LOOPS
// Print 1 to 5
let i = 1 
while(i <= 5){
  console.log(i)
  i++ // add 1 to i 
}

// Print from a certain number to 1
let User = prompt("Enter a number")
parseInt(User)
while (User > 0){
  console.log(User)
  User--
}

// Summing up to 5
let sum = 0 // We will be adding numbers to this variable
let counter = 1

// sum: 1 + 2 + 3 + 4 +5
while (counter <= 5){
  sum = counter + sum // sum+= counter
  counter++
}
console.log("Sum of 1-5", counter)


// Using prompt
let mysteryStudent = "monica"
let user2 = prompt("Enter a students name")
// While what the user entered ISN'T my mysterySudent, keep running
while (mysteryStudent !== user2.toLowerCase()){
  // We have to RE-ASSIGN user to ne the new value
  user2 = prompt("WRONG, guess again")
}
console.log("Good job!")



