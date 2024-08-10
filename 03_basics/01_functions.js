function sayMyName () {
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");    
}

// sayMyName();

// function addTwoNumber(number1, number2//parameters){
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2){
    
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumber(4, 4);
// console.log("result:", result);
 

function loginUserMessage(username = "arpit") {
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Arpit"));
console.log(loginUserMessage("arpit"));