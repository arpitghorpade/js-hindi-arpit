// Immediately Invoked Function Expressions (IIFE)


(function chai () {
    // is called name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('arpit')