// npm - global command, comes with node
// npm --version
// npm --v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// git init
// git add .
// git commit -m "<your comment>"
// create a repository in github.com (say - temp-node-tut.git)
// git remote add origin https://github.com/loveranjan/temp-node-tut.git
// git branch -M main
// git push -u origin main
// to update run 1. init, 2. add, 3. commit