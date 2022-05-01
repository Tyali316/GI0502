                                              //EASY//
//Write a function that would allow you to do this:

// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(x) {
    // I nested these functions because without it, I kept getting an error//
    function exercising(){
return `Today's exercise: ${x}`;
    }
    return exercising;
}  
var run = exercise('running');
console.log(run());

var swim = exercise('swimming');
console.log(swim());
