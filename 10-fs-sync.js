const {readFileSync,writeFileSync} = require('fs')

console.log('start')
// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first,second)

// create and write the content of first and second files
// overwrite the content of first and second files, if result-sync.txt already exist
// writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`)

// for appending the contents
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')