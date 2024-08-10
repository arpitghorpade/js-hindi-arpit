// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "arpit",
    "full name": "arpit ghorpade",
    [mySym]: "mykey1",
    age: 20,
    location: "Nagpur",
    email: "arpitghorpade@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "arpit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "arpit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user");
}


JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());