// sahallow copy A shallow copy creates a new outer object, but nested objects/arrays still share the same reference.

const user1 = {
    name: "Priyabrata",
    address: {
        city: "Surat",
        pincode:395006
    }
}

const user2 = {...user1};

user2.name = "Modi";
user2.address.city = "Sachin";

console.log(user1);
console.log(user2);

// deep copy : A deep copy creates a new object and recursively copies all nested objects and arrays, ensuring no shared references.

const user3 = {
    name:"rahul gandhi",
    address: {
        city:"delhi",
        pincode:110001
    }
};

const user4 = structuredClone(user3);

user4.name = "Narendra Modi";
user4.address.city = "Junagadh";
user4.address.pincode = 362001;

console.log(user3);
console.log(user4);
