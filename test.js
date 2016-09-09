const stack = require('./');
let err = [],count = 0
for(;count<10000;++count) {
  err.push(new Error('not found ' + count));
}
console.time('print trace');
err.map(e=>{console.error(e.stack)});
console.timeEnd('print trace');
console.time('print one line trace');
err.map(e=>{console.error(stack(e.stack))});
console.timeEnd('print one line trace');
