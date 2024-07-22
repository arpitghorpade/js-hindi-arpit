const accountId = 122334;
let accountEmail = "arpit@gmail.com";
var accountPassword = "1234";
accountCity = "jaipur";
let accountState;

// accountId = 2 // not allowed

accountEmail = "ghorpade@gmail.com";
accountPassword = "5555";
accountCity = "amravati";

// console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);