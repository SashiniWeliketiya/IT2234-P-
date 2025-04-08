const students=require('./studentdb')

//write function to get all the students
function getstudents(){
    return students;
}

//find particular student according to ID
function getStudent(id){
    return students.find((student)=>student.regno==id)
}

//student by gender
function getByGender(gen){
    return students.filter((student)=>student.gender==gen)
}


module.exports={getstudents,getStudent,getByGender}