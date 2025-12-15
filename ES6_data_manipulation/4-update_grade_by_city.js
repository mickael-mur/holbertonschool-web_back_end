// TODO: Create a function updateStudentGradeByCity
// Must use filter and map combined
// If student doesn't have grade, set it to 'N/A'
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter((student) => student.location === city)
        .map((student) => {
            const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
            return {
                ...student,
                grade: gradeObj ? gradeObj.grade : 'N/A'
            };
        });
}
