// Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        return this.state * 1.5 < 100 ? this.state = this.state * 1.5 : this.state = 100;
    }
    set state(value) {
        if (value > 100) {
            return this._state = 100;
        } else if (value < 0) {
            return this._state = 0;
        } else {
            return this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
        super(name, releaseDate, pagesCount, state, type)
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
        super(name, releaseDate, pagesCount, state, type)
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
        super(author, name, releaseDate, pagesCount, state, type)
    } 
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
        super(author, name, releaseDate, pagesCount, state, type)    
    }  
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
        super(author, name, releaseDate, pagesCount, state, type)
    } 
}

// Задание 2

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        return this.books.find((book) => book[type] === value) || null;
    }
    giveBookByName(bookName) {
        let book = this.books.findIndex((book) => book.name === bookName);

        if (book !== -1) {
            return this.books.splice(book, 1)[0];
        } else {
            return null;
        }
    }
}

// Задание 3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark > 0 && mark < 6) {
            if (this.marks[subject] === undefined) {
                this.marks[subject] = [mark];
            } else {0
                this.marks[subject].push(mark);
            }
        } else {
            return `Ошибка, оценка должна быть числом от 1 до 5`;
        }
    }
    getAverage() {
        return Object.keys(this.marks).reduce((acc, elem) => acc + this.getAverageBySubject(elem), 0) / Object.keys(this.marks).length;
    }
    getAverageBySubject(subject) {
        if (Object.keys(this.marks).find(elem => elem === subject))  {
            return this.marks[subject].reduce((acc, elem ) => acc + elem, 0) / this.marks[subject].length;
        } else {
            return 'Несуществующий предмет';
        }
    }
    exclude(reason) {
        delete this.marks;
        this.reason = reason;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");