const students = [
    { regno: "2021/ICT/01", name: "Sashini", age: 23, course: "IT", Pro_languages: ["Java", "JS", "C++"] },
    { regno: "2021/ICT/02", name: "Yeheni", age: 20, course: "CS", Pro_languages: ["Python", "C", "Go"] },
    { regno: "2021/ICT/03", name: "Nipunika", age: 23, course: "Software Engineering", Pro_languages: ["C#", "JavaScript", "Swift"] },
    { regno: "2021/ICT/04", name: "Ridmi", age: 21, course: "Data Science", Pro_languages: ["Python", "R", "SQL"] },
    { regno: "2021/ICT/05", name: "Ushani", age: 22, course: "Cybersecurity", Pro_languages: ["Ruby", "Bash", "C"] }
];

function getLanguages(students) {
    const languagesSet = new Set();

    students.forEach(student => {
        student.Pro_languages.forEach(language => {
            languagesSet.add(language);
        });
    });

    return Array.from(languagesSet);
}

console.log(getLanguages(students));