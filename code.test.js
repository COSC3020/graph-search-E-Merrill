const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

var test1 = [];

// Testing the case of an empty array
// Should return an empty array for the path

assert(JSON.stringify(search(test1, 0, 2)) == JSON.stringify([]));

var test2 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

// Testing a graph without a route from start to the target node
// Should also return an empty array

assert(JSON.stringify(search(test2, 0, 2)) == JSON.stringify([]));

var test3 = test2;

// Testing the case where the target node isn't a node in the graph
// Should return an empty array again

assert(JSON.stringify(search(test3, 0, 3)) == JSON.stringify([]));

var test4 = [
    [1,1,0],
    [1,1,1],
    [1,1,1]
];

// Testing a case where there is a loop;
// If the algorithm is improperly made, the program will work improperly 

assert(JSON.stringify(search(test4, 0, 2)) != JSON.stringify([]));

var test5 = [
    [1,0,1],
    [0,0,1],
    [0,1,0]
];

// Testing to see if the path can be correctly made

assert(JSON.stringify(search(test5, 0, 1)) == JSON.stringify([0,2,1]));

