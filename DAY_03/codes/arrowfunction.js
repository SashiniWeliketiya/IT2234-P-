//arrow function
const msg = () => {console.log("Hello JS")}
console.log(msg)

const msg1 = () => {return console.log("Hello JS")}
msg1()//msg is now a function


const mult = (a,b) => {return a*b}
console.log(mult(3,2))

const multi = (a,b=2) => {return a*b}
console.log(multi(4,5))
console.log(multi(4))


// const mysum = (...n)=>{
	
		// console.log(n)
// }

/*const mysum = (...n)=>{
	  let t=0;
	  n.forEach((i)=>t=t+1)
	  console.log(t)

}*/
		
const mysum = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
		
console.log(mysum(4,5,6,89,2))
