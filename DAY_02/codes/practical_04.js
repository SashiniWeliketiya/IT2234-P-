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