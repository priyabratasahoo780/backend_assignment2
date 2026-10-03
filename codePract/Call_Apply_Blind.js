const person = {
  name : "priyabrata",
}

function greet(age,city){
    console.log(`my name is ${this.name} and i am ${age} years old, and i am from ${city}`);
}

   greet.call(person, 21, "surat");
   greet.apply(person, [21, "surat"]);
   
   const newFunction = greet.bind(person, 21, "surat");

    newFunction();