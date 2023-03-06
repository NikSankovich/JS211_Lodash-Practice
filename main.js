const _ = require('lodash');

const numbers = [8, 16, 24, 32, 40, 48, 56, 64, 72];

// Build a simple terminal app that uses at least 5 lodash methods.
// Console.log the output of each lodash method called on the fake data.
// Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().
// Create unit tests with Mocha for each function you build.


let loChunk = _.chunk(numbers, 3);
console.log(loChunk);

let loVerse = _.reverse(numbers);
console.log(loVerse);

let loWithout = _.without(numbers, 16, 24, 32)
console.log(loWithout);

let loShuffle = _.shuffle(numbers)
console.log(loShuffle);

let loJoin = _.join(numbers, ',')
console.log(loJoin);

// if (typeof describe === 'function') {
//     describe('Lodash test', function () {
//         it('should create 2 separate arrays', function () {
//             const loChunk = _.chunk(numbers, 3)
//             assert.equal(loChunk[0], 8);
//         });
//     })
// }