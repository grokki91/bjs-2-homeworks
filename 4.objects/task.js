function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  return (this.subject = subjectName);
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
  return this.marks;
};

Student.prototype.addMarks = function (...marks) {
  return (this.marks = marks);
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, elem) => acc + elem) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  return (this.excluded = reason);
};

let ivan = new Student("Ivan", "male", 19);
let zina = new Student("Zina", "female", 22);
