const fs = require('fs');
const data = fs.readFileSync('input.txt'); // readFile Sync uses synchronous 
console.log(data.toString());
console.log('it is finished');

//The example shows that the program blocks until it reads the file and then only it proceeds to end the program.