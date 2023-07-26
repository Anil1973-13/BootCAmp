
var person = {};
person.name = "John";
person.age  = "30";
person.city = "New York";

({age,...person}=person);
person.job = "Engineer";
person.city="San Francisco";
console.log(person);