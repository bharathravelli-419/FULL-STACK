const path = require('path')
//console.log(path)
console.log(path.resolve('./utils.js') )
console.log(path.relative('/','./app.js'))

console.log(path.extname('./app.js'))

console.log(path.dirname('./temp/utils.js'))
console.log(path.join(__dirname,'app.js'))
console.log(__dirname)