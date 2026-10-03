// class Student {
//     id: number;
//     name:string;
//     email:string;
//     age:number;
//     gender: "male" | "female" | "other";
//     constructor(id:number, name:string, email:string, age:number, gender:"male" | "female" | "other"){
//         this.id=id;
//         this.name=name;
//         this.email=email;
//         this.age=age;
//         this.gender=gender;
//     }
//             displayDetails(){
//                 console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nGender: ${this.gender}\n`)
//             }
// }
// const student1 = new Student(12,"priya","priya@gmail.com",25,"female");
// student1.displayDetails();
// export {};
class AdvancedStudent {
    id;
    name;
    email;
    age;
    gender;
    country;
    constructor(id, name, email, age, gender, country) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.country = country;
    }
}
class startStudent extends AdvancedStudent {
    displayDetails() {
        console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nGender: ${this.gender}\nCountry: ${this.country}\n`);
    }
}
const student = new AdvancedStudent(12, "priya", "priya@gmail.com", 25, "female", "india");
console.log(student);
const star = new startStudent(13, "rahul", "rahul@gmail.com", 22, "male", "india");
star.displayDetails();
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    displayDetails() {
        console.log(this);
    }
}
const s1 = new Student(1, "priya");
const s2 = new Student(2, "rahul");
s1.displayDetails();
s2.displayDetails();
export {};
// type AccountType = "saving" | "current";
// class BankAccount {
// }
// class User {
// 	getDashboard(): string {
// 		return "User Dashboard";
// 	}
// }
// class Admin extends User {
// 	override getDashboard(): string {
// 		return "Admin Dashboard";
// 	}
// }
