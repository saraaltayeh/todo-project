// var userName = prompt("what's your name?");
// console.log(userName);

// var gender = prompt("male or female?");
// console.log(gender);

// var age = prompt("what old are you?");
// console.log(age);

// if (age <= 0) {
//     alert("your age should be above the zero")
// }
// var skipMessage = confirm("do you want to skip the welcoming message?") ;
// (skipMessage)? alert(skipMessage): (gender === "male")? alert(`Hello Mr ${userName}`): (gender === "female")? alert(`Hello Ms ${userName}`): alert(`Hello ${userName}`);

function myQuestions(){
const questionOne = prompt("do you like coffee?");
const questionTwo = prompt("do you like challenges code?");
const questionThree = prompt("do you like shopping?");

const answers = [questionOne, questionTwo, questionThree];

for (let i=0; i< answers.length; i++) {
if (answers[i] == "") {
    console.log("invalid".toString());
}
else {
    console.log(answers[i])
}
}
}
myQuestions();
