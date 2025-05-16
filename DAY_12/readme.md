🧱 1.Create a Database and Collection

![1_1](https://github.com/user-attachments/assets/7c82718a-f559-432e-bb06-612c4a77b611)
![1_2](https://github.com/user-attachments/assets/b0cd66f4-0d2d-4b0c-99be-998e167794ee)

  Use database
  
  ![1_3](https://github.com/user-attachments/assets/7b1abaa8-5c61-4948-8127-1012949de143)


📥 Insert Data into Collections

students-->

~~~
db.students.insertMany(
[
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a1"),
  name: "Alice Johnson",
  enrollmentYear: 2021,
  major: "Computer Science",
  email: "alice.johnson@example.com",
  gender: "Female",
  age: 20
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a2"),
  name: "Bob Smith",
  enrollmentYear: 2020,
  major: "Mathematics",
  email: "bob.smith@example.com",
  gender: "Male",
  age: 22
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a3"),
  name: "Clara Lee",
  enrollmentYear: 2022,
  major: "Physics",
  email: "clara.lee@example.com",
  gender: "Female",
  age: 19
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a4"),
  name: "Daniel Kim",
  enrollmentYear: 2021,
  major: "Engineering",
  email: "daniel.kim@example.com",
  gender: "Male",
  age: 21
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a5"),
  name: "Eva Chen",
  enrollmentYear: 2020,
  major: "Biology",
  email: "eva.chen@example.com",
  gender: "Female",
  age: 23
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a6"),
  name: "Frank Wright",
  enrollmentYear: 2019,
  major: "Chemistry",
  email: "frank.wright@example.com",
  gender: "Male",
  age: 24
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a7"),
  name: "Grace Liu",
  enrollmentYear: 2022,
  major: "Economics",
  email: "grace.liu@example.com",
  gender: "Female",
  age: 20
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a8"),
  name: "Henry Davis",
  enrollmentYear: 2021,
  major: "Philosophy",
  email: "henry.davis@example.com",
  gender: "Male",
  age: 22
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a9"),
  name: "Ivy Zhang",
  enrollmentYear: 2020,
  major: "Statistics",
  email: "ivy.zhang@example.com",
  gender: "Female",
  age: 21
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41aa"),
  name: "Jack Lee",
  enrollmentYear: 2023,
  major: "Business",
  email: "jack.lee@example.com",
  gender: "Male",
  age: 18
}
])
~~~

![1_4](https://github.com/user-attachments/assets/a4c0286f-5a77-4d3c-961b-e5e761494420)

grades-->

~~~
db.grades.insertMany(
[
{ subject: "Mathematics", score: 85, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a1") },
{ subject: "English", score: 90, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a1") },


{ subject: "Mathematics", score: 75, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a2") },
{ subject: "Statistics", score: 80, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a2") },


{ subject: "Physics", score: 92, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a3") },
{ subject: "Mathematics", score: 86, term: "Spring 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41a3") },


{ subject: "Engineering", score: 89, term: "Fall 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a4") },
{ subject: "Mathematics", score: 84, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a4") },


{ subject: "Biology", score: 78, term: "Spring 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a5") },
{ subject: "Chemistry", score: 82, term: "Fall 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a5") },


{ subject: "Chemistry", score: 88, term: "Fall 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a6") },
{ subject: "Physics", score: 79, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a6") },


{ subject: "Economics", score: 83, term: "Spring 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41a7") },
{ subject: "English", score: 89, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a7") },


{ subject: "Philosophy", score: 91, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a8") },
{ subject: "History", score: 77, term: "Spring 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41a8") },


{ subject: "Statistics", score: 79, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a9") },
{ subject: "Data Science", score: 88, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a9") },

{ subject: "Business", score: 87, term: "Fall 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41aa") },
{ subject: "Finance", score: 82, term: "Spring 2024", studentId: ObjectId("64b1fcd1f4a13a001e3d41aa") }
])
~~~

![1_5](https://github.com/user-attachments/assets/92627941-19fb-4196-b4e1-7cf69fd0b949)


📊 2.Table View

students-->

![2_!](https://github.com/user-attachments/assets/b1561e98-5b13-4e67-8537-921fa7ad0cfe)


grades-->

![2_2](https://github.com/user-attachments/assets/402d610c-1f1f-456e-bd7c-cbf9430607a2)


3️. 👩 Find Female Students

~~~
db.students.find({ gender: "Female" },{ _id: 0, name: 1, age: 1, gender: 1 })
~~~

![3](https://github.com/user-attachments/assets/06a7d271-549a-43e0-859e-e4f7f670736d)


4️. 🎓 Find Young Students Enrolled After 2020


~~~
db.students.find({age: { $lt: 22 },enrollmentYear: { $gt: 2020 }})
~~~

![4_1](https://github.com/user-attachments/assets/913d356f-ad4d-4515-9d47-686482c79a45)

![4_2](https://github.com/user-attachments/assets/7cdff579-5b35-4cca-a1e3-c57018f9c9b0)



5. 📝 Find All Grades for "Alice Johnson"

   ~~~
   db.grades.find({studentId: ObjectId('64b1fcd1f4a13a001e3d41a1')})
   ~~~

   ![5](https://github.com/user-attachments/assets/697b6174-9c6e-454b-97a0-57bc5387c072)


6. ➕ Count Students Who Took “Mathematics”

  ~~~
   db.grades.aggregate([
  {
    $match: { subject: "Mathematics" } 
  }	,
  {
    $group: {
      _id: "$studentId" 
	  }
  },
  {
    $count: "mathStudentsCount"
  }
])
  ~~~

![image](https://github.com/user-attachments/assets/85cc02b7-eadb-4e1f-a997-b136098bb9fd)


7. 🍁 Find Students with Grades in "Fall 2022"

   ~~~
    db.grades.find({ term: "Fall 2022" })
   ~~~

   ![7_1](https://github.com/user-attachments/assets/74dc57e5-4097-403d-ae24-edf4fce026e8)

   ![7_2](https://github.com/user-attachments/assets/07ab0808-7ae5-448f-b3e8-4b1f4f456c97)


  
