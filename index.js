var moment = require('moment');
var math = require('mathjs');


console.log('inside index.js');
console.log('inside index.js and it is cool!');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(math.sqrt(-4)); //2i

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}