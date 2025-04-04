//Async/Await
const fs = require('fs').promises;

const readFile = async ()=>{
    try{
          
          //01
          //const data = await fs.readFile('file.txt','utf8')
          //const data1 = await fs.readFile('data.txt','utf8')
          //console.log(data) 
          //console.log(data1)  

          //02
          //parellel processing
          const [data,data1] = await Promise.allSettled([
            fs.readFile('file.txt','utf8'),
            fs.readFile('data.txt','utf8')
        ])
            //or single processing
             console.log(data) 
             console.log(data1)  
             console.log(data.status)  
             console.log(data1.status)  
    }catch(err){
       
        console.error(err);
    }
}
readFile()