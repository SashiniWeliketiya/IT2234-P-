🧱 1.Create a Database and Collection

![1](https://github.com/user-attachments/assets/a0f8286d-28dd-46c9-adf7-6d693daed9d5)


📥 2.Insert Data

~~~
db.books.insertMany([{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "published_year": 1937,
  "genres": ["Fantasy", "Adventure"],
  "pages": 310,
  "available": true,
  "rating": 4.8
},

  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
  }
])
~~~

![2](https://github.com/user-attachments/assets/0eeee393-9073-467d-9358-7ca6e0664501)

📚 3.Find All Books

~~~
db.books.find()
~~~

![3_1](https://github.com/user-attachments/assets/b4b74034-94be-4f96-9321-27fb0bdee6c7)
![3_2](https://github.com/user-attachments/assets/a215722d-ff1b-490a-bb88-601e71d99e9c)

📚 4. Find all books published after 1950

~~~
db.books.find({ published_year: { $gt: 1950 }})
~~~

![4](https://github.com/user-attachments/assets/ddf215b8-0803-4806-a18e-86b8e8375c05)

📗 5. Find all available books

~~~
db.books.find({ available: true })
~~~

![5_1](https://github.com/user-attachments/assets/7eb2a52c-51c2-4728-9725-ede5e3190a2d)
![5_2](https://github.com/user-attachments/assets/fc6e4d8b-9cf6-4315-9502-8c7503477548)

📘 6. Find all books that belong to the "Dystopian" genre

~~~
db.books.find({ genres: "Dystopian" })
~~~

![6](https://github.com/user-attachments/assets/5ebab534-399c-4afd-8b19-315c059a46b8)

📙 7. Find books published after 1960 and with rating more than 4.0

~~~
db.books.find({
  published_year: { $gt: 1960 },
  rating: { $gt: 4.0 }
})
~~~

![7](https://github.com/user-attachments/assets/8a8efb9e-e0e9-4db3-8eaf-089f4c700a1c)

📖 8. Project only title and author fields

~~~
db.books.find({}, { title: 1, author: 1, _id: 0 })
~~~

![8](https://github.com/user-attachments/assets/debd2d04-6530-4919-9433-2f02bdcfb19a)

🔧 9. Update the book "1984" to set available: false

~~~
db.books.updateOne(
  { title: "1984" },
  { $set: { available: false } }
)
~~~

![9](https://github.com/user-attachments/assets/23255120-0d4b-4fc0-b770-dc14c7ea4909)


⬆️ 10. Increase the rating of "Brave New World" by +0.1

~~~
db.books.updateOne(
  { title: "Brave New World" },
  { $inc: { rating: 0.1 } }
)
~~~


![10](https://github.com/user-attachments/assets/88029c4f-e908-464f-b099-a6deac535676)


➕ 11. Add a new genre "Classic" to "The Great Gatsby"

~~~
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $addToSet: { genre: "Classic" } }
)
~~~

![11](https://github.com/user-attachments/assets/1a39c16e-fff9-46e3-82da-979c94cdcbd6)



📉 12. Sort books by published_year ascending

~~~
db.books.find().sort({ published_year: 1 })
~~~

![13_1](https://github.com/user-attachments/assets/bfe4217f-3956-4412-a8c7-f50780ccf00c)
![13_2](https://github.com/user-attachments/assets/55c304a1-19bc-4c3a-81d1-5aaf7bb224e3)
![13_3](https://github.com/user-attachments/assets/08822a7c-241f-48f5-ba5c-84593164eaf3)



🔢 13. Sort books by rating descending

~~~
db.books.find().sort({ rating: -1 })
~~~

![12_1](https://github.com/user-attachments/assets/7c4cf04a-8b3d-4051-9318-c6de94789ba8)
![12_2](https://github.com/user-attachments/assets/ec407f16-56a4-407a-85f2-8b70dfda9811)
![12_3](https://github.com/user-attachments/assets/aebabe1a-5b98-493b-83df-db178b8c46c2)


🗑️ 14. Delete all books with a rating lower than 4.5


~~~
db.books.deleteMany({ rating: { $lt: 4.5 } })
~~~

![14](https://github.com/user-attachments/assets/ab4494c5-9d1c-4739-8322-716e70ebff9c)







