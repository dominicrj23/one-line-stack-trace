const stack = require('one-line-stack-trace'),
err = new Error('not found');
console.log("trace", stack(err.stack));