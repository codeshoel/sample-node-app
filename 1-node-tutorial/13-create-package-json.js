// manual aproach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// install nodemon to help restart our app each time we made changes to our
// during development. (run npm i nodemon -D or --save-dev)


const _ = require('lodash');

const items = [1, [2 [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);
console.log("Hello people");
