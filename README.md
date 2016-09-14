[![npm](https://img.shields.io/npm/v/one-line-stack-trace.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/one-line-stack-trace)
[![npm](https://img.shields.io/npm/dt/one-line-stack-trace.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/one-line-stack-trace)
# one-line-stack-trace
get one line info from your stack trace
### Installation
    npm i -S one-line-stack-trace
### Usage
    const stack = require('one-line-stack-trace'),
    err = new Error('not found');
    console.log("trace", stack(err.stack));
#### performance
    npm run performance

console.error takes 25% less time to print traces processed by the library
