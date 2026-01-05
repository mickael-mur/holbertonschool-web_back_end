const fs = require('fs');

module.exports = function countStudents(path) {
    try {

        const data = fs.readFileSync(path, 'utf8');
        
        const students = data.split('\n');
        const fieldGroups = {};
        students.forEach((element) => {
            const result = element.split(',');
            if (element != "" && result[0] != "firstname") {
                let firstName = result[0];
                let lastName = result[1];
                let age = result[2];
                let domain = result[3];
                if (!fieldGroups[domain]) {
                    fieldGroups[domain] = [];
                }
                fieldGroups[domain].push(result[0]);
            }
        })
        const fieldResult = Object.keys(fieldGroups);
        let sumResult = 0;
        for (domain in fieldGroups) {
            sumResult += fieldGroups[domain].length;
        }
        console.log(`Number of students: ${sumResult}`);

        for(domain in fieldGroups) {
                const list = fieldGroups[domain].join(', ');
                console.log(`Number of students in ${domain}: ${fieldGroups[domain].length}. List: ${list}`);
            }
        
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}
