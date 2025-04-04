//is object from a operation
//mention the status of the opeartion

//3 states:
//1 pending/waiting
//2 fulfiled/resolved - done 
//3 Rejected/error

Promise

const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file.txt','utf8')//return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.error(err);
})

