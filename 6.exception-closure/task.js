// Задача 1

function parseCount(value) {
    let parseValue = Number.parseInt(value)
    if (!Number.isNaN(parseValue)) {
        return parseValue;
    } else {
        throw new Error('Невалидное значение');
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = 0.5 * this.getPerimeter();
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch(e) {
        e = 'Ошибка! Треугольник не существует';
        return {
            getArea() {
                return e;
            },
            getPerimeter() {
                return e;
            }
        }
    }
}