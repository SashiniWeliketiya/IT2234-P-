//callback function
//a function passed as an argument
const myName = (name)=> {console.log("My name is: "+name)}

const greet = (msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greet("Good Morning",()=>{console.log("My name is David")})


const multtwo = (n)=>n*3

const myarr = (mul,...n)=>{
	
	n.forEach((i)=>console.log(mul(i)))
	
}
		
myarr(multtwo,4,5,6,8,2)