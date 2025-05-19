##✅ 1. INSERT 

Method: POST

Body (raw > JSON):

~~~
router.post('/',async(req,res)=>{
    try{
        const {code,name,credits,description} = req.body
        if(!code || !name || !credits){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await Course.create({code,name,credits,description})
            res.status(200).json(results)
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
~~~

 ![insert](https://github.com/user-attachments/assets/5718ad89-2c8f-485d-b807-2c780940248f)

 ![inserted](https://github.com/user-attachments/assets/3fbffc71-6832-453c-96bb-6ee787fcfe63)


✨ Required fields are manatory for the given outputs.Otherwise errors will occur.

![error](https://github.com/user-attachments/assets/c602d04a-581b-47fe-bceb-0e2b34fe3141)

##✅ 2. UPDATE

Method: PUT

Body (raw > JSON):

~~~
router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID !")
        }
        const ucourse =  await Course.findById(id)
        const {code,name,credits,description} = req.body
        if(!code || !name || !credits){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await ucourse.updateOne({code,name,credits,description})
            res.status(200).json(results)
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
~~~

![update](https://github.com/user-attachments/assets/9492f57b-8dbd-41bb-a0eb-4f427df504f5)

![updated](https://github.com/user-attachments/assets/6b234168-35c9-4209-9256-b467c1710fd0)


##✅ 3. DELETE

Method: DELETE

Body (raw > JSON):

~~~
router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID !")
        }
        const dcourse =  await Course.findById(id)
        const {code,name,credits,description} = req.body
        const results = await dcourse.deleteOne(dcourse).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
~~~

![delete](https://github.com/user-attachments/assets/998792d8-2cd3-4cd9-8469-89120eceaf8d)

![deleted](https://github.com/user-attachments/assets/b103d3d7-8c37-4746-baa3-c81814784407)

| Codes | Outputs|
|-------|--------|
|['index.js'](./Codes/index.js)|![index.png](./Outputs/index.png)|
|['Course.js'](./Codes/Course.js)|![course.png](./Outputs/course.png)|


