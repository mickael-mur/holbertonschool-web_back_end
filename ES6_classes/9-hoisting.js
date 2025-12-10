// Fixed: Moved class definitions before instantiation to avoid hoisting issues
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// Fixed: Moved class instantiation after class definition
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  // Fixed: Added missing 'holbertonClass' parameter
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Fixed: Changed from 'this.holbertonClass' to 'this._holbertonClass' to avoid infinite recursion
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Fixed: Changed 'self' to 'this' (JavaScript uses 'this', not 'self')
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Fixed: Moved student instantiation after StudentHolberton class definition
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Fixed: Moved listOfStudents to the end and changed to default export
const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
