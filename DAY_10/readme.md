
## 💻 1. Create Database & using compass

![01_createdb](https://github.com/user-attachments/assets/c46277ea-77ed-47a8-a7f0-cfbc8c415a56)

🧭 Open MongoDB Compass

➕ Click "Create Database"

📝 Enter a name for the database & collection

✅ Hit "Create Database"


## 🖥️ 2. Insert Data into collection

![02_insert](https://github.com/user-attachments/assets/83013938-8dfc-46a0-9e1b-5493218c6fab)


🧭 Open your database & select a collection

➕ Click on “Insert Document”

📝 Fill out the fields 

✅ Hit “Insert” 

✅ Use "Format" button to make the document permitted.

![02_format](https://github.com/user-attachments/assets/a527a95a-f622-4e8c-969d-d9bc0d99114e)

✅ Inserted Document

![03](https://github.com/user-attachments/assets/7c737929-3fbc-42e4-bcfd-8bb45d5eef5f)


## 🖥️ 3. Using a Database in MongoDB Shell (mongosh)

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


## 🖥️ 4. Edit Documents Using Compass

✅ Step 1: Click the "Edit" Button

On the right side of the document, you’ll see a little ✏️ edit icon — click it!

Now you're in Edit Mode 🎯✨

✅ Step 2: Make Your Changes

✅ Step 3: Save Your Edits

Once you're done editing, click the "Replace" button.

![03_update](https://github.com/user-attachments/assets/375406a7-0afc-4801-856d-3ea022c3e5a7)


## 🖥️ 5. Insert Documents Using MongoDB Shell

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









