
var cars = [];
let car ={
    make : "Toyota",
    model : "Camry",
    year : 2018
};
cars.push(car);
cars.push(car);
cars.push(car);
cars.splice(0,1);
let new_car ={make: "Honda",model: "Civic",year: 2020};
cars.push(new_car);
cars[1].model="Accord";
console.log(cars);