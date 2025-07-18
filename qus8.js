// What is a closure and why is it useful?
// Write a function that returns another function which remembers a value from the outer scope.

/* answer */
// closure is used to create a function that has access to variables in the parent scope.


function outerFunction() {
        let count = 0;
    
        function innerFunction() {
            count++;
            console.log(count);
        }
    
        return innerFunction;
    }
    
    const myFunction = outerFunction();
    myFunction(); 
    myFunction(); 
    myFunction();
    