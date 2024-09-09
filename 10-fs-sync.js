const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./built_in_modules/first.txt', 'utf8')
const second = readFileSync('./built_in_modules/second.txt', 'utf8')

writeFileSync(
    './built_in_modules/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}
)
console.log('done with the task');
console.log('starting the next one');