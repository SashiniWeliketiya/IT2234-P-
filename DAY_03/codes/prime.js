//write a boolean function to find a given a number is prime 
 function isPrime(n,i=2)
{
	if(n<2)
		return false;
    if(i>n/2)
	   return true;
     if (n%i==0)
	   return false;
   return isPrime(n,i+1);
   
}

if(isPrime(13))
{
	console.log("Number is prime")
}
else{
	console.log("Number is not prime")
}