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


📚 4.Find All Books in "Central Library"

~~~
db.books.find({ library_id: centralLibrary._id }, { title: 1, _id: 0 });
~~~

![4](https://github.com/user-attachments/assets/d769e644-9bf2-4b8c-862c-771adf623c85)

🔍 5.List all libraries along with the number of books they have

~~~
db.libraries.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "library_id",
      as: "books"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      location: 1,
      book_count: { $size: "$books" }
    }
  }
])
~~~

![5](https://github.com/user-attachments/assets/28614970-8cc0-42b7-ac00-3c85e35c2dd3)


🔍 6. Find all books written by "J.K. Rowling"

//1 way

~~~
const rowling = db.authors.findOne({ name: "J.K. Rowling" });
db.books.find({ author_ids: rowling._id }, { title: 1, _id: 0 });
~~~

![6_1](https://github.com/user-attachments/assets/7b70bfdc-e1f5-47ae-a3b1-fa3f02b3f66c)

//2 way

~~~
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author_ids",
      foreignField: "_id",
      as: "authors"
    }
  },
  {
    $match: {
      "authors.name": "J.K. Rowling"
    }
  },
  {
    $project: {
      _id: 0,
      title: 1
    }
  }
])

~~~

![6_2](https://github.com/user-attachments/assets/78f3b409-26b4-4786-b0fc-63a81eb76ce2)


📝7. List of Authors & Their Books 📖
   
~~~
db.authors.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "author_ids",
      as: "books"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      books: "$books.title"
    }
  }
])

~~~

![7_1](https://github.com/user-attachments/assets/7dfd08a6-0f68-46bc-94bb-caaf1e397349)
![7_2](https://github.com/user-attachments/assets/569f317d-bf00-41b9-8dc8-19dd584b4855)


🔍 8.Find all books along with their authors' details

~~~
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author_ids",
      foreignField: "_id",
      as: "authors"
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      authors: {
        name: 1,
        birth_year: 1
      }
    }
  }
])
~~~

![8_1](https://github.com/user-attachments/assets/1d32cebe-0f25-4d31-b057-3d9f07863a9f)
![8_2](https://github.com/user-attachments/assets/a561bb27-4ad4-4e68-8287-d3e6feeae434)


🏛️📚 9.List all libraries and the number of books they have, including libraries with no books

~~~
db.libraries.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "library_id",
      as: "books"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      location: 1,
      book_count: { $size: "$books" }
    }
  }
])
~~~

![9](https://github.com/user-attachments/assets/6b7ce0e0-959b-4734-a1ea-56b48005549f)


🧮 10. Calculate the average number of books per library


~~~
db.libraries.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "library_id",
      as: "books"
    }
  },
  {
    $project: {
      book_count: { $size: "$books" }
    }
  },
  {
    $group: {
      _id: null,
      average_books: { $avg: "$book_count" }
    }
  },
  {
    $project: {
      _id: 0,
      average_books: { $round: ["$average_books", 2] } // Optional rounding to 2 decimal places
    }
  }
])
~~~

![10_1](https://github.com/user-attachments/assets/4ac2ecdd-ba02-44ff-95d5-632c034bce9f)
![10_2](https://github.com/user-attachments/assets/947b18bf-a205-4642-b0eb-c6b17eed35a9)


🧑‍🏫 11. Find all authors who have written more than one book

~~~
db.books.aggregate([
  { $unwind: "$author_ids" },
  {
    $group: {
      _id: "$author_ids",
      book_count: { $sum: 1 }
    }
  },
  { $match: { book_count: { $gt: 1 } } },
  {
    $lookup: {
      from: "authors",
      localField: "_id",
      foreignField: "_id",
      as: "author"
    }
  },
  { $unwind: "$author" },
  {
    $project: {
      _id: 0,
      name: "$author.name",
      book_count: 1
    }
  }
])
~~~

![11](https://github.com/user-attachments/assets/55a2445f-8c2d-4d1c-a894-fe8005e0833d)
⚠️ Based on the current dataset, all authors have only written one book.


📄 12. Retrieve all books along with their authors' names and the library they belong to.

~~~
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author_ids",
      foreignField: "_id",
      as: "authors"
    }
  },
  {
    $lookup: {
      from: "libraries",
      localField: "library_id",
      foreignField: "_id",
      as: "library"
    }
  },
  {
    $unwind: "$library"
  },
  {
    $project: {
      _id: 0,
      title: 1,
      authors: "$authors.name",
      library: "$library.name"
    }
  }
])
~~~

![12_1](https://github.com/user-attachments/assets/0c48aa7c-6b67-45ed-bc19-8ef769048ae3)
![12_2](https://github.com/user-attachments/assets/6f2590af-56bc-46ca-bb97-97466c7c7de4)


📚❌ 13. List all authors who have not written any books


~~~
db.authors.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "author_ids",
      as: "books"
    }
  },
  {
    $match: {
      books: { $eq: [] }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      birth_year: 1
    }
  }
])
~~~

![13](https://github.com/user-attachments/assets/053e85bb-639d-47d3-b280-6e6b2cd0f3b3)

⚠️ Based on the current data, all authors have written at least one book 




