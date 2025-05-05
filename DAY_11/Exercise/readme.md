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
