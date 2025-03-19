

//define 10 students JSON
//store it in Array
//find the female students
//find the students who are following IT course 
//find the max and average GPA among the students

 let students = [
   {regno:'2021/ICI/01',name:'James',course:'MATHS',GPA:3.75,gender:'Male'},
   {regno:'2021/ICI/02',name:'Sashini',course:'IT',GPA:3.45,gender:'Female'},
   {regno:'2021/ICI/03',name:'Yeheni',course:'IT',GPA:3.78,gender:'Female'},
   {regno:'2021/ICI/04',name:'Ravi',course:'BIO',GPA:3.56,gender:'Male'},
   {regno:'2021/ICI/05',name:'Smith',course:'MATHS',GPA:3.35,gender:'Male'},
   {regno:'2021/ICI/06',name:'Nipunika',course:'IT',GPA:3.65,gender:'Female'},
   {regno:'2021/ICI/07',name:'Gayan',course:'BIO',GPA:3.41,gender:'Male'},
   {regno:'2021/ICI/08',name:'Ushani',course:'IT',GPA:3.84,gender:'Female'},
   {regno:'2021/ICI/09',name:'John',course:'MATHS',GPA:3.32,gender:'Male'},
   {regno:'2021/ICI/10',name:'Kamal',course:'IT',GPA:3.25,gender:'Male'}
  
]



 //find the female students
 let femaleStudents =[];
 for(let i=0;i<students.length;i++)
 {
	 if(students[i].gender=='Female')
	 {
		 femaleStudents.push(students[i])
	 }
 }
 console.log("Female Students:",femaleStudents)
 
 //find the students who are following it course
 let itStudents =[];
 for(let j=0;j<students.length;j++)
 {
	 if(students[j].course=='IT')
	 {
		 itStudents.push(students[j])
	 }
 }
 console.log("IT Students:",itStudents)
 
 
 //find the max and average gpa among the students
 let totalGPA=0;
 let maxGPA = students[0].GPA;
 
 for(let k=0;k<students.length;k++)
 {
	 totalGPA += students[k].GPA;
	 if(students[k].GPA>maxGPA){
		 maxGPA=students[k].GPA;
	 }
 }
 let avgGPA = totalGPA/students.length;
 console.log("Max GPA:",maxGPA);
 console.log("Average GPA:",avgGPA.toFixed(2));