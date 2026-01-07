const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.filter((line) => {
    const trimmed = line.trim();
    return trimmed !== '' && !trimmed.startsWith('firstname');
  });

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  const fieldOrder = [];

  for (const line of students) {
    const parts = line.split(',');
    if (parts.length >= 4) {
      const firstname = parts[0];
      const field = parts[3];

      if (field && firstname) {
        if (!fields[field]) {
          fields[field] = [];
          fieldOrder.push(field);
        }
        fields[field].push(firstname);
      }
    }
  }

  for (const field of fieldOrder) {
    const list = fields[field].join(', ');
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
  }
};

module.exports = countStudents;
