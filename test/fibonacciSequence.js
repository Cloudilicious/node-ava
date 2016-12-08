// var test = require('ava'); below newer syntax of writing the same thing
import test from 'ava';
// var fibonacciSequence = require('../lib/fibonacciSequence');
import fibonacciSequence from '../lib/fibonacciSequence';

// test('first 2', function(t){
//   t.deepEqual(
//     fibonacciSequence(2),
//     [1, 1]
//   );
// });

// as above, so below

test('first 2', (t) => {
  t.deepEqual(
    fibonacciSequence(2),
    [1, 1]
  );
});

test('first 3', function(t){
  t.deepEqual(
    fibonacciSequence(3),
    [1, 1, 2]
  );
});

test('first 0', function(t){
  t.deepEqual(
    fibonacciSequence(0),
    []
  );
});