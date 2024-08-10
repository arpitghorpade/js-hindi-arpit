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
 

// function loginUserMessage(username = "arpit") {
//     if(!username){
//         console.log("Please enter a username");
//         return
        
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Arpit"));
// console.log(loginUserMessage("arpit"));

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "arpit",
    price: 100
} 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "arpit",
    price: 300
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

