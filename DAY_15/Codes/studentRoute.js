

const express=require('express')
const router = express.Router()
const student= require('../models/student')
 const {default : mongoose} = require ('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await student.find()
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry,No Data Found !")
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})

/*
router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await student.findById(id)
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry,No Data Found !")
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
*/
router.get('/code/:cid',async(req,res)=>{
    try{
        const cid = req.params.cid
        const results = await student.find({code:cid})
        const count = results.length
        console.log(count)
        if(results){
            if(count>0){
            res.status(200).json(results)
            }else{
            res.status(404).send("Sorry,No Data Found !")
            }
        
        }else{
            res.status(404).send("Sorry,No Data Found !")
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})

//insert
router.post('/',async(req,res)=>{
    try{
        const {_id,name,credits,duration,faculty} = req.body
        if(!code || !name || !credits || !duration){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await student.create({_id,name,credits,duration,faculty})
            res.status(200).json(results)
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})

//update
router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID !")
        }
        const ustudent =  await student.findById(id)
        const {_id,name,credits,duration,faculty} = req.body
        if(!code || !name || !credits){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await ustudent.updateOne({_id,name,credits,duration,faculty})
            res.status(200).json(results)
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})

//delete
router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID !")
        }
        const dstudent =  await student.findById(id)
        const {_id,name,credits,duration,faculty} = req.body
        const results = await dstudent.deleteOne(dstudent).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})

router.get('/course',async(req,res)=>{
    console.log('check')
    try{
        
        const results = await student.find().populate("degreeId").populate("enroled_courses")
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})
module.exports=router