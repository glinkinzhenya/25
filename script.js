// 1. Створити клас Людина.
//     Властивості:
// імʼя;
// вік.
//     Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.info = function () {
    return `My name is ${this.name}. I'm ${this.age} years old.`
};

const users = [
    {
        name: "Dasha",
        age: 25,
    },
    {
        name: "Kolya",
        age: 30,
    },
    {
        name: "Milka",
        age: 8,
    }
];

users
    .map(function (user) {
        return new Person(user.name, user.age);
    })
    .forEach(function (user) {
        // console.log(user);
        console.log(user.info());
    });

const cars = [
    {
        brand: "BMV",
        model: 5,
        yearStart: 1995,
        number: 2345,
    },
    {
        brand: "Lamborgini",
        model: 5,
        yearStart: 1995,
        number: 2345,
    },
    {
        brand: "Traktor",
        model: 5,
        yearStart: 1995,
        number: 2345,
    }
];

// 2. Створити клас Автомобіль.
//     Властивості:
// марка, модель, рік виписку, номерний знак(або на Ваш розсуд);
// власник.
//     Методи:

// конструктор, який приймає чотитри параметри(тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 

// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
// інакше виводити у консоль відповідне повідомлення

// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.


function Car(brand, model, yearStart, number) {
    this.brand = brand;
    this.model = model;
    this.yearStart = yearStart;
    this.number = number;
};

Car.prototype.info = function () {
    return `Brand this car ${this.brand}. Model ${this.model}. Year start ${this.yearStart}, number car ${this.number}`
};

Car.prototype.infoCar = function () {
    return console.log(`Brand this car ${this.brand}. Model ${this.model}. Year start ${this.yearStart}, number car ${this.number} and owner ${this.name}`)
};

Car.prototype.age = function (us) {
    if (us.age >= 18) {
        this.name = us.name;
        this.infoCar();
    } else {
        console.log(`${us.name} нет 18ти`);
    }
};

cars.map(function (i) {
    return new Car(i.brand, i.model, i.yearStart, i.number);
    })
    .forEach(function (i, y) {
        i.age(users[y]);
    });