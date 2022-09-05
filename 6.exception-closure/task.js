// Задача 1

function parseCount(value) {
    if (!Number.isNaN(Number.parseInt(value))) {
        return Number.parseInt(value);
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
    constructor(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
        if (((this.A + this.B) < this.C) || ((this.A + this.C) < this.B) || ((this.B + this.C) < this.A)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        return this.A + this.B + this.C;
    }
    getArea() {
        let p = 0.5 * this.getPerimeter();
        return Number(Math.sqrt(p * (p - this.A) * (p - this.B) * (p - this.C)).toFixed(3));
    }
}

function getTriangle(A, B, C) {
    try {
        return new Triangle(A, B, C)
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