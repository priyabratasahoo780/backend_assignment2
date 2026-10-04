// Object.assign() method : Object.assign() is a built-in JavaScript method used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns a new object.

const user = {
    name: "Nitish",
};

const details = {
    age: 21,
    city: "Patna"
};

const result = Object.assign({}, user, details);
console.log(result);

// object.create() method : Object.create() is a static method that creates a new object with the specified prototype object and properties.

const person = {
    greet: function(){
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.greet();


// JSON.stringify : JSON.stringify is a built-in JavaScript method that converts a JavaScript object or value into a JSON (JavaScript Object Notation) string.

const users = {
    name: "Priyabrata",
    age: 21,
    city: "Surat"
};

const results = JSON.stringify(users);

console.log(results);
console.log(typeof results);


// JSON.parse() : JSON.parse() is a built-in JavaScript method that parses a JSON string and converts it into a JavaScript object. It returns an object.


const jsonString2 = '{"name":"Priyabrata","age":21,"city":"Surat"}';

const users2 = JSON.parse(jsonString2);
console.log(users2);
console.log(typeof users2);
