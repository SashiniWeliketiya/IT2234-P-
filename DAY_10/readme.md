
## 💻 Create Database & using compass

![01_createdb](https://github.com/user-attachments/assets/c46277ea-77ed-47a8-a7f0-cfbc8c415a56)

🧭 Open MongoDB Compass

➕ Click "Create Database"

📝 Enter a name for the database & collection

✅ Hit "Create Database"


## 🖥️ Insert Data into collection

![02_insert](https://github.com/user-attachments/assets/83013938-8dfc-46a0-9e1b-5493218c6fab)


🧭 Open your database & select a collection

➕ Click on “Insert Document”

📝 Fill out the fields 

✅ Hit “Insert” 

✅ Use "Format" button to make the document permitted.

![02_format](https://github.com/user-attachments/assets/a527a95a-f622-4e8c-969d-d9bc0d99114e)

✅ Inserted Document

![03](https://github.com/user-attachments/assets/7c737929-3fbc-42e4-bcfd-8bb45d5eef5f)


## 🖥️ Using a Database in MongoDB Shell (mongosh)

![01_2](https://github.com/user-attachments/assets/b385a71a-6641-4ba2-9610-f9be8e354ffd)

✅ Step 1: Start the MongoDB Shell

✅ Step 2: Switch to (or Create) a Database

use unidb

📁 This switches to the unidb.

🆕 If it doesn’t exist, MongoDB will create it.

✅ Step 3: Insert Some Data (to create the DB)

📌 This creates the users collection and inserts one document.

🎉 Now your database is officially created!

✅ Step 4: Show the Current Database

🔍 This shows the name of the database you're currently using.

✅ Step 5: View All Databases

📚 Lists all databases that contain at least one collection with data.

✅ Step 6: View Collections in Current DB


## 🖥️ Edit Documents Using Compass

✅ Step 1: Click the "Edit" Button

On the right side of the document, you’ll see a little ✏️ edit icon — click it!

Now you're in Edit Mode 🎯✨

✅ Step 2: Make Your Changes

✅ Step 3: Save Your Edits

Once you're done editing, click the "Replace" button.

![03_update](https://github.com/user-attachments/assets/375406a7-0afc-4801-856d-3ea022c3e5a7)


## 🖥️ Insert Documents Using MongoDB Shell

📌 Insert One Document
~~~
db.students.insertOne(
  {
  "regno": "2021ICT005",
  "name": "Smith",
  "age": 22,
  "gpa": 3.0,
  "degree": "IT",
  "skills": [
    "Java",
    "MongoDB",
    "CSS"
  ],
  "gender": "Male"
  })
~~~
📌Shell Response
~~~
{
  acknowledged: true,
  insertedId: ObjectId('680dc8079a81d9183ac27328')
}
~~~

✅ InsertedOne Document

![insertone](https://github.com/user-attachments/assets/2a87968b-9524-432e-a6a4-88280d484a61)

![insertedone](https://github.com/user-attachments/assets/a7b1dee0-5c9e-47ab-acb9-a7fcb6b4844e)


📌Insert Many Documents

~~~
db.students.insertMany(
  [
  {
  "regno": "2021ICT006",
  "name": "Ridmi",
  "age": 24,
  "gpa": 3.4,
  "degree": "IT",
  "skills": [
    "Java",
    "MongoDB",
    "C++"
  ],
  "gender": "Female"
  },
  
  {
  "regno": "2021ICT007",
  "name": "Samo",
  "age": 21,
  "gpa": 3.4,
  "degree": "MATHS",
  "skills": [
    "Java",
    "MongoDB",
    "Node"
  ],
  "gender": "Female"
  }
  ])
~~~

📌Shell Response

~~~
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('680dca729a81d9183ac27329'),
    '1': ObjectId('680dca729a81d9183ac2732a')
  }
~~~

✅ InsertedMany Document

![insertedmany](https://github.com/user-attachments/assets/0ede459b-e052-4331-8244-7892f27d8c49)

## 🖥️ Query Operators

* find()
* project
* sort
* $gt -> greater than
* $lt -> less than
* $eq -> equal
* $ne -> not equal
* $in -> matches any in array
* $nin -> doesn't matches any in array

## 🖥️ Find Data Using Compass

![find_compass](https://github.com/user-attachments/assets/81b2b84d-1f1f-4916-8b27-2a2058e6f302)

## 🖥️ Find Data Using MongoDB Shell
~~~
db.students.find({"gender": "Male"})
~~~

📌Shell Response

~~~
{
  _id: ObjectId('680baeeaf922b1a220180401'),
  regno: '2021ICT003',
  name: 'Nipu',
  age: 25,
  gpa: 3.3,
  degree: 'MATHS',
  skills: [
    'JS',
    'CSS',
    'Python'
  ],
  gender: 'Female'
}
~~~

## 🖥️  Projecting Data Using Compass

![project](https://github.com/user-attachments/assets/0dc2c4c7-97ac-437d-b90e-2ce398714bc5)

## 🖥️  Sorting Data Using Compass

![sort](https://github.com/user-attachments/assets/c735f994-e151-48e5-a088-a0aba2786e10)

## 🖥️  Sorting Data Using MongoDB Shell
~~~
db.students.find({"degree": "IT","gender": "Female",}).sort({"age":1})
~~~

📌Shell Response

~~~
{
  _id: ObjectId('680baeacf922b1a220180400'),
  regno: '2021ICT002',
  name: 'Yeni',
  age: 24,
  gpa: 3.6,
  degree: 'IT',
  skills: [
    'JS',
    'MongoDB',
    'SQL'
  ],
  gender: 'Female'
}
{
  _id: ObjectId('680dca729a81d9183ac27329'),
  regno: '2021ICT006',
  name: 'Ridmi',
  age: 24,
  gpa: 3.4,
  degree: 'IT',
  skills: [
    'Java',
    'MongoDB',
    'C++'
  ],
  gender: 'Female'
}
{
  _id: ObjectId('680bab7ff922b1a2201803ff'),
  regno: '2021ICT001',
  name: 'Sashi',
  age: 25,
  gpa: 3.1,
  degree: 'IT',
  skills: [
    'JS',
    'MongoDB',
    'Node'
  ],
  gender: 'Female'
}
~~~

## 🖥️ Greater Than -> $gt

![gt](https://github.com/user-attachments/assets/c28ad5f7-27f9-446c-9f47-43ae2227503b)

~~~
db.students.find({"age": {"$gt":24}})
~~~

📌Shell Response

~~~
{
  _id: ObjectId('680bab7ff922b1a2201803ff'),
  regno: '2021ICT001',
  name: 'Sashi',
  age: 25,
  gpa: 3.1,
  degree: 'IT',
  skills: [
    'JS',
    'MongoDB',
    'Node'
  ],
  gender: 'Female'
}
{
  _id: ObjectId('680baeeaf922b1a220180401'),
  regno: '2021ICT003',
  name: 'Nipu',
  age: 25,
  gpa: 3.3,
  degree: 'MATHS',
  skills: [
    'JS',
    'CSS',
    'Python'
  ],
  gender: 'Female'
}
~~~

## 🖥️ Less Than -> $lt

![lt](https://github.com/user-attachments/assets/a2c0aff4-7ec5-4ba5-90ec-097004bcb3c9)

~~~
db.students.find({"age": {"$lt":24}})
~~~

📌Shell Response

~~~
{
  _id: ObjectId('680baf33f922b1a220180402'),
  regno: '2021ICT004',
  name: 'Nushi',
  age: 23,
  gpa: 3.3,
  degree: 'MATHS',
  skills: [
    'Java',
    'MongoDB',
    'Python'
  ],
  gender: 'Female'
}

  _id: ObjectId('680dc8079a81d9183ac27328'),
  regno: '2021ICT005',
  name: 'Smith',
  age: 22,
  gpa: 3,
  degree: 'IT',
  skills: [
    'Java',
    'MongoDB',
    'CSS'
  ],
  gender: 'Male'
}
{
  _id: ObjectId('680dca729a81d9183ac2732a'),
  regno: '2021ICT007',
  name: 'Samo',
  age: 21,
  gpa: 3.4,
  degree: 'MATHS',
  skills: [
    'Java',
    'MongoDB',
    'Node'
  ],
  gender: 'Female'
}
~~~
