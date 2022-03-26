'use strict';

//Part 2:
function selectElementAndLog() {
    const selection = document.querySelector('p');
    console.log(selection);
}

selectElementAndLog();


//Part 3:
const students = [
    { name: "Tasha", grades: [80, 67, 75, 62] },
    { name: "Tuvok", grades: [90, 88, 91, 92] },
    { name: "Dax", grades: [88, 90, 89, 85] },
    { name: "Neelix", grades: [60, 54, 48, 50] }
];

function logScholarshipCandidates(students) {
    const studentsScholarship = [];

    for (let student of students) {
        let num_of_grades = student.grades.length;

        let average_grade = calculateAverageGrade(student, num_of_grades);

        if (average_grade >= 80) {
            studentsScholarship.push(
                {
                    "name": student.name,
                    "gradeAvg": average_grade
                }
            );
        }
    }
    console.log(studentsScholarship)
}

function calculateAverageGrade(student, num_of_grades) {
    let sum = 0;
    for (let grade of student.grades) {
        sum += grade;
    }
    let average_grade = sum / num_of_grades;
    return average_grade;
}

logScholarshipCandidates(students);