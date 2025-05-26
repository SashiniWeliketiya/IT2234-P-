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
    },
    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]

})

const student=mongoose.model('students',studentSchema)
const Kolins = new student({
    _id:'2021ICT01',
    name:'Peter Kolins',
    date_of_birth:'01-01-1995',
    gender:'Male',
    degreeId:'FAS2000ICT',
    enroled_courses:['68336686f76166edd0db9c81','683366b965d560141923ed15']
})
//Kolins.save()
module.exports=student