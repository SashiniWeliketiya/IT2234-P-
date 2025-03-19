//write recursive function to print numbers i to n
function printNumbers(i,n)
{
	if(i>n)
		return;
	console.log(i);
	printNumbers(i+1,n);
}
printNumbers(1,10);