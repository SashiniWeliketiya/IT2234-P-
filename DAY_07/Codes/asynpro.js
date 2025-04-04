//Syn

//1
///2
//3

//async 

// driven and non I/O blocking programme

//1- read a file -local file needed
//2- request data from an api from interned -need internet reference
//3- print msg -free to go



const fs = require('fs');
fs.readFile('file.txt','utf8',(err,data)=>{
       
    if(err)
    {
        console.error(err);
        return 0;
    }
    console.log(data);
});
console.log("File reading is done..")

