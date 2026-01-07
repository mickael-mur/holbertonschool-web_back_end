const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    const studentLines = lines.filter((line) => line.trim() !== '' && !line.startsWith('firstname'));

    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};
    const fieldOrder = [];

    for (const line of studentLines) {
      const parts = line.split(',');
      const field = parts[3];
      const firstname = parts[0];

      if (field) {
        if (!fields[field]) {
          fields[field] = [];
          fieldOrder.push(field);
        }
        fields[field].push(firstname);
      }
    }

    for (const field of fieldOrder) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
