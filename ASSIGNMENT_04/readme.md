🧱 1,2.Create a Database and Collections

![1_1](https://github.com/user-attachments/assets/986d21a2-6829-4bc6-88c3-59cda6b76e0a)
![1_2](https://github.com/user-attachments/assets/1cc28161-2819-4207-b4ef-fc4cde0de38a)
![1_3](https://github.com/user-attachments/assets/f11520f8-385c-4a17-aec9-5d9c8348d11a)


📥 3.Insert Sample Data

//Insert data into libraries collection

![3_3](https://github.com/user-attachments/assets/e7b141ff-844b-44e0-850d-8a4e4c773e50)

![3_4](https://github.com/user-attachments/assets/4519aad3-e0b0-413a-976e-e121238fad28)



//Insert data into books collection

~~~
db.books.insertMany(
[
{
    _id: ObjectId("60d5fc5ef295f5e2c4d5a8a3"),
    title: "To Kill a Mockingbird",
    library_id: ObjectId("60d5fbb2f295f5e2c4d5a8a1"),
    author_ids: [ObjectId("60d5fd3ef295f5e2c4d5a8a4")]
},
{
    _id: ObjectId("60d5fc5ef295f5e2c4d5a8a5"),
    title: "1984",
    library_id: ObjectId("60d5fbb2f295f5e2c4d5a8a2"),
    author_ids: [ObjectId("60d5fd3ef295f5e2c4d5a8a6")]
},
{
    _id: ObjectId("60d5fc5ef295f5e2c4d5a8a7"),
    title: "Harry Potter and the Philosopher's Stone",
    library_id: ObjectId("60d5fbb2f295f5e2c4d5a8a1"),
    author_ids: [ObjectId("60d5fd3ef295f5e2c4d5a8a8"), ObjectId("60d5fd3ef295f5e2c4d5a8a9")]
}
])
~~~

![3_1](https://github.com/user-attachments/assets/92c9d673-e8f9-45ed-a039-f5be0d17162e)

![3_2](https://github.com/user-attachments/assets/37ffd51f-cb94-4a96-b6d8-4a2e06336a25)


//Insert data into authors collection

![3_5](https://github.com/user-attachments/assets/d98b1357-5c13-40a1-8554-a68a1e38c2e2)

![3_6](https://github.com/user-attachments/assets/31ba939a-57a9-424d-91a0-47078a4b0b03)











