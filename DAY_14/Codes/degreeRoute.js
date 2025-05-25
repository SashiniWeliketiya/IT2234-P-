
const express=require('express')
const router = express.Router()
const degree= require('../models/degree')
 const {default : mongoose} = require ('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await degree.find()
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


router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await degree.findById(id)
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

router.get('/code/:cid',async(req,res)=>{
    try{
        const cid = req.params.cid
        const results = await degree.find({code:cid})
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
            const results = await degree.create({_id,name,credits,duration,faculty})
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
        const udegree =  await degree.findById(id)
        const {_id,name,credits,duration,faculty} = req.body
        if(!code || !name || !credits){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await udegree.updateOne({_id,name,credits,duration,faculty})
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
        const ddegree =  await degree.findById(id)
        const {_id,name,credits,duration,faculty} = req.body
        const results = await ddegree.deleteOne(ddegree).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
module.exports=router
