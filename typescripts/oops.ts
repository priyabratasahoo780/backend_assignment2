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


// class AdvancedStudent {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     protected gender: "male" | "female" | "other"; 
//     protected country: string;
    
//     constructor(id: number, name: string, email: string, age: number, gender: "male" | "female" | "other", country: string) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.age = age; 
//         this.gender = gender;
//         this.country = country;
//     }

//     displayDetails() {
//         console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nGender: ${this.gender}\nCountry: ${this.country}\n`);
//     }
// }

// class startStudent extends AdvancedStudent {
//     displayDetails() {
//         console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nGender: ${this.gender}\nCountry: ${this.country}\n`);
//     }
// }

// class overidePractice extends AdvancedStudent {
//       age: number,

//      constructor {
//           name:string,
//           email:string,
//           age:number
//      }
// }

// const student = new AdvancedStudent(12, "priya", "priya@gmail.com", 25, "female", "india");
// console.log(student);

// const star = new startStudent(13, "rahul", "rahul@gmail.com", 22, "male", "india");
// star.displayDetails();

// export {};


// class Student {
//     constructor(
//         public id: number,
//         public name: string
//     ) {}

//     public displayDetails() {
//         console.log(this);
//     }
// }

// const s1 = new Student(1, "priya");
// const s2 = new Student(2, "rahul");
// s1.displayDetails();
// s2.displayDetails();

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







// class AdvancedStudent {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     protected gender: "male" | "female" | "other"; 
//     protected country: string;
    
//     constructor(id: number, name: string, email: string, age: number, gender: "male" | "female" | "other", country: string) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.age = age; 
//         this.gender = gender;
//         this.country = country;
//     }

//     displayDetails() {
//         console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nGender: ${this.gender}\nCountry: ${this.country}\n`);
//     }
// }

// class startStudent extends AdvancedStudent {
//     displayDetails() {
//         console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nGender: ${this.gender}\nCountry: ${this.country}\n`);
//     }
// }

// class overidePractice extends AdvancedStudent {
//       age: number,

//      constructor {
//           name:string,
//           email:string,
//           age:number
//      }
// }

// const student = new AdvancedStudent(12, "priya", "priya@gmail.com", 25, "female", "india");
// console.log(student);

// const star = new startStudent(13, "rahul", "rahul@gmail.com", 22, "male", "india");
// star.displayDetails();

// export {};


// class Student {
//     constructor(
//         public id: number,
//         public name: string
//     ) {}

//     public displayDetails() {
//         console.log(this);
//     }
// }

// const s1 = new Student(1, "priya");
// const s2 = new Student(2, "rahul");
// s1.displayDetails();
// s2.displayDetails();





type AccountType = "saving" | "current";

abstract class BankAccount {
    private static totalBalance: number = 0;
    constructor(
        private accountNumber: number,
        public _accountHolder: string,
        protected balance: number,
        protected accountType: AccountType
    ) {
        BankAccount.totalBalance += balance;
    }
    get accountHolder(): string {
        return this._accountHolder;
    }
    set accountHolderSet(name: string) {
        if (name.length < 4) {
            console.log("Invalid name! Enter at least 4 characters.");
            return;
        }
        this._accountHolder = name.toUpperCase();
    }

    abstract credit(amount: number): void;

    abstract debit(amount: number): void;

    abstract displayAccount(): void;

    static bankAccountBalance(): void {
        console.log(`Total Bank Account Balance: ${BankAccount.totalBalance}`);
    }

    protected addBalance(amount: number): void {
        this.balance += amount;
        BankAccount.totalBalance += amount;
    }

    protected subtractBalance(amount: number): void {
        this.balance -= amount;
        BankAccount.totalBalance -= amount;
    }
}

class SavingAccount extends BankAccount {

    constructor(
        accountNumber: number,
        accountHolder: string,
        balance: number
    ) {
        super(accountNumber, accountHolder, balance, "saving");
    }

    credit(amount: number): void {
        if (amount <= 0) {
            console.log("Credit amount must be greater than 0!");
            return;
        }

        this.addBalance(amount);
        console.log(`Credited: ${amount}`);
        console.log(`Current Balance: ${this.balance}`);
    }
    debit(amount: number): void {
        if (amount <= 0) {
            console.log("Debit amount must be greater than 0!");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }
        this.subtractBalance(amount);

        console.log(`Debited: ${amount}`);
        console.log(`Current Balance: ${this.balance}`);
    }

    displayAccount(): void {
        console.log(`Account Holder: ${this.accountHolder}Account Type: ${this.accountType}Balance: ${this.balance}`);
    }
}

class CurrentAccount extends BankAccount {

    constructor(
        accountNumber: number,
        accountHolder: string,
        balance: number
    ) {
        super(
            accountNumber,
            accountHolder,
            balance,
            "current"
        );
    }

    credit(amount: number): void {
        if (amount <= 0) {
            console.log("Credit amount must be greater than 0!");
            return;
        }

        this.addBalance(amount);

        console.log(`Credited: ${amount}`);
        console.log(`Current Balance: ${this.balance}`);
    }

    debit(amount: number): void {
        if (amount <= 0) {
            console.log("Debit amount must be greater than 0!");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }

        this.subtractBalance(amount);

        console.log(`Debited: ${amount}`);
        console.log(`Current Balance: ${this.balance}`);
    }

    displayAccount(): void {
        console.log(`Account Holder: ${this.accountHolder}Account Type: ${this.accountType}Balance: ${this.balance} `);
    }
}
const b1 = new CurrentAccount( 3995214996,"priyabrata",100000);

const b2 = new SavingAccount(
    399521499,
    "priyanka",
    150000
);


b1.credit(200);
b1.debit(100);
b2.credit(500);
b2.debit(200);

b1.displayAccount();

b2.displayAccount();

BankAccount.bankAccountBalance();

export {};