🧹 1.Delete an Entire Database

~~~
db.dropDatabase()
~~~

![2](https://github.com/user-attachments/assets/ee5b7843-5a71-41b3-9489-fa14da1eb261)

🗑️ 2.Delete a Collection

~~~
db.sampledata.drop()
~~~

![4](https://github.com/user-attachments/assets/e038a826-b9d5-4060-97b8-fbd30dea41a5)

🗑️ 3.Delete a Degree by ID

~~~
db.degrees.deleteOne({_id:ObjectId('6818c59a10694888a7d03766')})
~~~

![5_1](https://github.com/user-attachments/assets/cffd1ab5-b3ac-42b3-9868-a9d92aaaf2c4)
![5_2](https://github.com/user-attachments/assets/716eb3b2-fcc7-4bd8-8e51-d543a6e791af)


👀 4.Display Degree Name & Duration

~~~
db.degrees.find().projection([{'name':1,'_id':1}])
db.degrees.find().projection(['name','duration'])
~~~

![6_1](https://github.com/user-attachments/assets/a99e0b7d-4e25-4fc6-883b-3c337ef437a8)
![6_2](https://github.com/user-attachments/assets/71eaa70a-4ec0-438a-a4c4-f9f58564fb9f)




🗑️ 5.Delete Degrees with Duration < 4


~~~
db.degrees.deleteMany({duration:{$lt:4}})
~~~

![7_1](https://github.com/user-attachments/assets/805edc87-3bb3-4d09-8aa3-808e4592630e)
![7_2](https://github.com/user-attachments/assets/42ea57c1-0ae9-4fff-bc1d-33c0ea79a4b2)

📋 6.Show All Remaining Degrees

~~~
db.degrees.find({},{name:1,_id:0}).pretty()
~~~

![8](https://github.com/user-attachments/assets/f35493bb-cc1a-4e57-aa43-cba02ee3fbe5)


✏️ 7.Update a Degree (by ID or any field)

~~~
db.degrees.updateOne({_id:ObjectId('6818c5f810694888a7d03768')},{$set:{name:"BIT",duration:3}})
~~~

![9](https://github.com/user-attachments/assets/2b8e5ead-180a-45fc-8cb3-47bf0eef481e)


📌 8.Find a Degree by _id

~~~
db.degrees.findOne({_id:ObjectId('6818c5f810694888a7d03768')})
~~~

![10](https://github.com/user-attachments/assets/ce5a613b-cf5b-4caa-88ff-d4303f255890)

