
🧱 1.Create a Database and Collection

![1](https://github.com/user-attachments/assets/3d668255-ac15-4fa7-b05d-174e968fe892)
![2](https://github.com/user-attachments/assets/fb496e8d-f177-43e8-96f1-44d96de04681)



📥 2.Insert Data
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
