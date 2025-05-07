🧱 1,2.Create a Database and Collections

![1_1](https://github.com/user-attachments/assets/986d21a2-6829-4bc6-88c3-59cda6b76e0a)
![1_2](https://github.com/user-attachments/assets/1cc28161-2819-4207-b4ef-fc4cde0de38a)
![1_3](https://github.com/user-attachments/assets/f11520f8-385c-4a17-aec9-5d9c8348d11a)


📥 3.Insert Sample Data


//Insert data into libraries collection

![3_3](https://github.com/user-attachments/assets/007fb7a8-19e9-41f6-8ca5-63bb1d9b66b2)
![3_4](https://github.com/user-attachments/assets/a0938708-84c7-4bb5-98d2-7eaf51d8b2c1)


//Insert data into books collection


~~~
db.books.insertMany([
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

![3_1](https://github.com/user-attachments/assets/db7f153c-2f3c-4b8a-b6ba-6efabffd3f8f)
![3_2](https://github.com/user-attachments/assets/70890858-555f-43ae-88de-d8012141676a)





