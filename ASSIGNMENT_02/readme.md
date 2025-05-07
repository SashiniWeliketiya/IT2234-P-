
🧱 1,2.Create a Database and Collection

![1](https://github.com/user-attachments/assets/3d668255-ac15-4fa7-b05d-174e968fe892)
![2](https://github.com/user-attachments/assets/fb496e8d-f177-43e8-96f1-44d96de04681)



📥 3.Insert Data
~~~
db.books.insertMany([
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "year_published": 1813,
        "genres": ["Fiction", "Romance"],
        "available": true
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year_published": 1951,
        "genres": ["Fiction", "Classic"],
        "available": true
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year_published": 1937,
        "genres": ["Fantasy", "Adventure"],
        "available": true
    },
    {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "year_published": 1851,
        "genres": ["Fiction", "Adventure"],
        "available": true
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "year_published": 1869,
        "genres": ["Historical Fiction", "Classic"],
        "available": true
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "year_published": -800,
        "genres": ["Epic", "Adventure"],
        "available": true
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "year_published": 1880,
        "genres": ["Fiction", "Philosophical"],
        "available": true
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year_published": 1932,
        "genres": ["Dystopian", "Science Fiction"],
        "available": true
    },
    {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "year_published": 1320,
        "genres": ["Epic", "Poetry"],
        "available": true
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "year_published": 1866,
        "genres": ["Fiction", "Philosophical"],
        "available": true
    }

]
)
~~~
![3](https://github.com/user-attachments/assets/d61de766-f344-44ff-b121-ef1228bc5b54)

📚 4.Find All Documnets in 'books' collection

~~~
db.books.find()
~~~

![4_1](https://github.com/user-attachments/assets/29f9612a-aea2-48b9-9ff1-192e82292e4a)
![4_2](https://github.com/user-attachments/assets/0be427f7-aea7-43ee-947d-17cbe2f3dfb6)
![4_3](https://github.com/user-attachments/assets/05a0c95f-047a-4c41-a85d-edb59447498d)
![4_4](https://github.com/user-attachments/assets/c62e15b3-3e39-45c4-98ab-22ab6afa695e)

📚 5. Find all books published after 1950

~~~
db.books.find({published_year: { $gt: 1950 }})
~~~

![5](https://github.com/user-attachments/assets/55f3cdd5-f66c-42c3-b9e5-4741446d836f)

📘 6.Find a book by title

~~~
db.books.find({ title: "Pride and Prejudice" })
~~~

![6](https://github.com/user-attachments/assets/02b8bec3-1cf5-4d6a-815a-91d4706f3ae9)

🔧 7.Update published year

~~~
db.books.updateOne( { title: "The Great Gatsby" }, { $set: { year_published: 1925 } })
~~~

![7](https://github.com/user-attachments/assets/3a38c278-aaf0-4897-948d-44a6ccc17dce)

Because,There is no book named "The Great Gatsby" in the collection.

🔧 8.Update Available Status

~~~
db.books.updateOne({ title: "Moby-Dick" },{ $set: { available: false } })
~~~

![8_1](https://github.com/user-attachments/assets/bf4fde56-4285-4ecb-80bb-8709f619fde3)
![8_2](https://github.com/user-attachments/assets/2a17d4b0-a899-4d49-9dbc-d8f03f121590)


🔍9. Set a new field checked_out to false for all available books

~~~
db.books.updateMany({ available: true },{ $set: { checked_out: false } })
~~~

![9_1](https://github.com/user-attachments/assets/3ebd5dab-5289-41b9-b752-48f9db0edccf)
![9_2](https://github.com/user-attachments/assets/8f3b1445-4160-4381-9e92-8a3a563b3eb4)


📚 10. Change the checked_out status to true for books in the "Adventure" genre

~~~
db.books.updateMany({ genres: "Adventure" },{ $set: { checked_out: true } })
~~~

![10](https://github.com/user-attachments/assets/17cce6b4-a74b-4e71-9e55-22f3c52dd4d7)


🗑️ 11.Delete a book by title

~~~
db.books.deleteOne({ title: "Moby-Dick" })
~~~

![11_1](https://github.com/user-attachments/assets/fdf2b9f5-f4f1-4622-8a81-05d6d6682418)
![11_2](https://github.com/user-attachments/assets/9798a5f6-ec9a-4d86-b46f-c1ea7acdecd7)


🗑️ 12.Delete all books published before 1930

~~~
db.books.deleteMany({ year_published: { $lt: 1930 } })
~~~

![12_1](https://github.com/user-attachments/assets/7ba34f63-f0a0-40a9-8836-8c7a7dd23959)
![12_2](https://github.com/user-attachments/assets/c88da7dd-7cca-40fd-a42b-793a0f7a9fe4)











