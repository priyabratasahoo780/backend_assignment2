// optional chaining

const user = {
    name:"nitish",
    address: {
        city: "Patna",
        state: "Bihar"
    }
};

console.log(user?.address?.city);
console.log(user?.address?.state);

// nullish operators 
 
const user_name = null;

const display_name = user_name ?? "Unknown";

console.log(display_name);

// nullish operators with logical AND : 

const user_name2 = null;

const display_name2 = user_name2 && "Unknown";

console.log(display_name2);
