let array = [1,2,3,4,5]
console.log(array)

for(let i=0;i<=array.length;i++)
{
   console.log(array[i])
}

let array1 =["Sashini","Yeheni","Nipunika","Ushani"]

console.log(array1)
for(let i=0;i<=array1.length;i++)
{
   console.log(array1[i])
}

array.forEach((n) =>{ //every element in the array
	console.log(n)
})


array1.forEach((n) =>{
	console.log(n)
	
})