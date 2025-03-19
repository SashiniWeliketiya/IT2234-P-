/*a = [4,5,6,3,7]
  b = [8,3,2,1,5]
  find the common elements betweeen a and b
*/

let a = [4,5,6,3,7]
let b = [8,3,2,1,5]
  a.forEach((n) => {
	  b.forEach((m) => {
		  if(n==m){
			  console.log(m)
		  }
		  
	  })
  })


//arr = [1,2,3,4,5,6]
//target = 7
//write a code find the all pairs that sum up to the target

let arr = [1,2,3,4,5,6]
let target =7;
arr.forEach((n) => {
	arr.forEach((m) =>{
		if(n+m == target)
		{
			console.log(n+","+m)
		}
	})
})

//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the Array
let arr1 = [4,8,3,4,3,2,1,8,4]
let count=0;
arr1.forEach((n) => {
	
})



//Array operation
//push and pop
arr3 = ['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
//a b c d -> d c b a
let arr4 = ['a','b','c','d']
let arr5 = []

console.log("Array: "+arr4)

while(arr4.length>0)
{
	arr5.push(arr4.pop());
}
console.log("Reverse Array: "+arr5)