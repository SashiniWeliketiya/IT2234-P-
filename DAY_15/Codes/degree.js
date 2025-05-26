const mongoose = require('mongoose')
const { student } = require('./student')
const degreeSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},
    duration:{type:Number,require:true},
    faculty:{type:String}
})

const degree=mongoose.model('degrees',degreeSchema)
const BICT = new degree({
    _id:'FAS2000ICT',
    name:'Bachelor of Information Technology',
    credits:120,
    duration:4,
    faculty:'Faculty of Applied Science'
})
//BICT.save()
module.exports=degree

