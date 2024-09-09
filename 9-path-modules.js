const path = require('path')

console.log(path.sep);

const filePath = path.join('/built_in_modules', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'built_in_modules', 'subfolder', 'test.txt' );
console.log(absolute);