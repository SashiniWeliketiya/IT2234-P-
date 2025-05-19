const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{
        type:String,
        require:true,
        ref:'degrees'
    }
})

const student=mongoose.model('students',studentSchema)
const Kolins = new student({
    _id:'2021ICT01',
    name:'Peter Kolins',
    date_of_birth:'01-01-1995',
    gender:'Male',
    degreeId:'FAS2000ICT'
})
Kolins.save()
module.exports=student