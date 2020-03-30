var person = {
    name: "Chase",
    states: 50
};
console.log(person.name);
console.log(person.states);
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 4;
var number2 = 5;
console.log(add(number1, number2));
function sayHello(text) {
    if (typeof text === "string") {
        alert(text);
    }
    else {
        console.error("this is wrong");
    }
}
var greeting = "Hello World!";
var greet = 100;
sayHello(greeting);
sayHello(greet);
function checkAge(nam, ag) {
    if (ag < 21) {
        alert("Sorry " + nam + " you aren't old enough to view this page!!");
    }
    else {
        console.log("You are of age " + nam);
    }
}
checkAge("Chase", 28);
checkAge("Liam", 4);
checkAge("Sabrina", 21);
checkAge("Tanner", 20);
var favVeg = ["carrots", "potatoe", "celery"];
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}
var People = [
    {
        name: "Chase",
        age: 28
    },
    {
        name: "Sabrina",
        age: 21
    },
    {
        name: "Cheyenne",
        age: 28
    },
    {
        name: "Tanner",
        age: 20
    },
    {
        name: "Liam",
        age: 4
    },
];
for (var i = 0; i < People.length; i++) {
    checkAge(People[i].name, People[i].age);
}
function getLength(pop) {
    var wordlength = pop.length;
    return wordlength;
}
var x = getLength("Hello World!");
if (x % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
