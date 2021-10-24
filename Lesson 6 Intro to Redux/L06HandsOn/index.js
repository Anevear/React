// Step 1 Convert the given JavaScript into ES6 syntax using an arrow function and filter.
var filtered=car =>{
    return car.name === 'ford';
}

const arr = [
   {"name":"chevy", "count": 2},
   {"name":"ford", "count": 5},
   {"name":"acura", "count": 3},
   {"name":"honda", "count": 16},
].filter(filtered);

console.log("Filter results:", newArr);

// Step 2 Given the function, use the ES6 that was covered to combine the two arrays.

const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const mixArray = [...arr, ...newStudents];

console.log(mixArray);