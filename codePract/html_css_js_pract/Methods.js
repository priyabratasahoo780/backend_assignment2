const numbers = [1,2,3,4,5,6];

// map methods : map() is an array method that creates and returns a new array by applying a callback function to every element of the original array.

const doubled = numbers.map(num => num*2);
console.log(doubled);

// filter method : filter() is an array method that creates and returns a new array containing only the elements that satisfy a given condition.

const evenNumbers = numbers.filter(num => num%2 === 0);
console.log(evenNumbers);

// reduce method: reduce() is an array method that executes a callback function on each element and reduces the array to a single accumulated value.

const sums = numbers.reduce((sum, num) => {
    return sum + num;
},0);


console.log(sums);

// forEach() method : forEach() is an array method that executes a provided function once for each array element.

numbers.forEach(num => {
    console.log(num*10);
})

// splice() is an array method used to add, remove, or replace elements in an array, and it modifies the original array.

numbers.splice(0,0);
console.log(numbers);


// slice() is an array method that returns a shallow copy of a portion of an array without modifying the original array.

const result = numbers.slice(0,6);
console.log(result);


// find() method: find() is an array method that returns the first element of an array that satisfies a provided condition.

const found = numbers.find(num => num === 3);
console.log(found);

// findIndex() method : findIndex() is an array method that returns the index of the first element of an array that satisfies a provided condition.

const index = numbers.findIndex(num => num === 3);
console.log(index);

// some() method : some() is an array method that returns true if at least one element of an array satisfies a provided condition.

const some = numbers.some(num => num === 3);
console.log(some);

// every() method: every() is an array method that returns true if all elements of an array satisfy a provided condition.

const every = numbers.every(num => num === 3);
console.log(every);

// push() is an array method that adds one or more elements to the end of an array and returns the new length of the array.

numbers.push(7);
console.log(numbers);

// pop() is an array method that removes the last element from an array and returns the removed element.

numbers.pop();
console.log(numbers);

// unshift() is an array method that adds one or more elements to the beginning of an array and returns the new length of the array.

numbers.unshift(0);
console.log(numbers);

// shift() is an array method that removes the first element from an array and returns the removed element.

numbers.shift();
console.log(numbers);

// isArray() is a static method that determines whether the passed value is an array.

const isArray = Array.isArray(numbers);
console.log(isArray);


// rest oparators : The rest parameter allows a function to accept an indefinite number of arguments as an array.

function sum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));


// perfect example of rest operators

function test(...numbers) {
    console.log(numbers);
}
test(10, 20, 30);


// spread oparators : The spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 

   const array = [1,2,3,4,5];
   const array2 = [6,7,8,9,10];
   const array3 = [...array,...array2];
   console.log(array3);


const arr1 = [10, 20, 30];
const arr2 = [...arr1];
console.log(arr2);

// perfect example of spread operators :
const arr = [10, 20, 30];
console.log(...arr);


// class constructors object 
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    introduce() {
        console.log(
            `My name is ${this.name}, I am ${this.age} years old and I study ${this.course}`
        );
    }
}

const student1 = new Student("Priyabrata", 21, "CSE");

const student2 = new Student("Rahul", 22, "IT");

student1.introduce();
student2.introduce();