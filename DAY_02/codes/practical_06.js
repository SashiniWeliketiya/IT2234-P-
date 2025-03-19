//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the Array
let arr1 = [4,8,3,4,3,2,1,8,4]
console.log(arr1)
console.log()

let frequencyMap = {}
let maxCount = 0;
let mostfrequentElement = 0;

arr1.forEach((n)=>{
	frequencyMap[n] = (frequencyMap[n] || 0)+1
	if(frequencyMap[n]>maxCount){
		mostfrequentElement = n;
	}
})
console.log("Most frequent element: "+mostfrequentElement);
