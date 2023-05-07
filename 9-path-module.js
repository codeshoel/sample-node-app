const path = require('path');


console.log(path.sep);

// using the join method to join paths
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

// access the base name
const base = path.basename(filePath);
console.log(base);

// path.resolve returns the absolute path of a file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);

