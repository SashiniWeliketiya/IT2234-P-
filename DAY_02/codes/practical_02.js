let array = [1,3,5,7,9]
array.forEach((n) =>{ //every element in the array
	console.log(n)
})

//find the max number in the array using forEach
let max=0;
array.forEach((n) =>{
	/*
	if(max<n)
	{
		max=n;
	}
	*/
	(max<n) && (max=n)
})		
console.log("Max is:" +max)

//print nested array
//[[1,2,30],[5,6],[8,5,3]]

let array1 = [[1,2,30],[5,6],[8,5,3]]
console.log(array1)

array1.forEach((m)=>{
	console.log(m)
   }
)


array1.forEach((m) => {
	m.forEach((i) =>{
		console.log(i)
	})
})





