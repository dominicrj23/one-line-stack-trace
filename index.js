'use strict';
const lineNotInternal = /(^.*at.*(?!.*node_module.*|.*internal\/process.*|.*timers.*).*)/m,
mod = /node_modules\/(\w+)\//,
errorLine = /^(.*Error.*)$/m;
module.exports = stack => {
    return stack.match(errorLine)[0] + '\n' +
    (lineNotInternal.test(stack) ? lineNotInternal.exec(stack)[1] :'\tin node module ' + mod.exec(stack)[1]);
}
