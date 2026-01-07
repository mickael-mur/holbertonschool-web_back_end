const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = [];
  
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i] && i !== 0) {
      students.push(lines[i].split(','));
    }
  }

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  const fieldOrder = [];

  for (const student of students) {
    if (!fields[student[3]]) {
      fields[student[3]] = [];
      fieldOrder.push(student[3]);
    }
    fields[student[3]].push(student[0]);
  }

  for (const field of fieldOrder) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
};

module.exports = countStudents;
