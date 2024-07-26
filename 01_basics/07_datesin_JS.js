// Dates

let myDate = new Date() // it is object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2003 , 10, 5);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2003 , 10, 5, 15, 4);

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myCreatedDate.getTime()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "long",
    
});