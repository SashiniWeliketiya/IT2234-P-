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