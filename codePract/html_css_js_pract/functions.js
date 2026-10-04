// Normal function

function greet(){
    console.log("Hello Interviews!");
}
greet();  


// function expression

const greets = function () {
    console.log("Hello Interview Express!");
}
greets();


// Arrow function

const add = (a,b) => {
    return a + b;
};

console.log(add(10,20));


// Anonymous function

(function () {
    console.log("Hello Interview Anonymous!");
})();


setTimeout(function () {
    console.log("Hello");
}, 2000); 


// callback function

function show(name){
    console.log(`hello, ${name}`);
}

function processUser(callback){
    callback("Interview Point Mentor");
}

processUser(show);

// HOF

function calculate(a,b,operation){
    return operation(a,b);
}

const adds = (a,b) => a + b;

console.log(calculate(10,20, adds));


// constructor function

function Car(brand,model){
    this.brand = brand;
    this.model = model;
    this.display = function(){
        console.log(`${this.brand} ${this.model}`);
    }
}

const myCar = new Car("Toyota","Camry");
myCar.display();


// Recursive function

function fact(n){
    if(n === 1){
        return 1;
    }

        return n*fact(n-1);
}

console.log(fact(5));


// async function

async function getdata(){
    try {
        console.log("Fetching data...");
        const data = await Promise.resolve("Data fetched");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getdata();


// Method

const user = {
    name: "Interviewer",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();