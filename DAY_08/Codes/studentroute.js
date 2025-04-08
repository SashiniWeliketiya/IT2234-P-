const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

//callback for the router
router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry,No Data Found !")
    }
})

//route to get certain student by id
router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getStudent(id)
    if(results) {
          res.status(200).json(results)
    }else{
        res.status(404).send("Sorry,No Data Found !")
    }

})

//route by the gender
router.get('/gender/:gen',(req,res)=>{
    const gen = req.params.gen=='M'?'Male':'Female'
    const results = studentService.getByGender(gen)
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry,No Data Found !")
    }
})



module.exports=router



