class BankAccount {
    accountNumber;
    _accountHolder;
    balance;
    accountType;
    static totalBalance = 0;
    constructor(accountNumber, _accountHolder, balance, accountType) {
        this.accountNumber = accountNumber;
        this._accountHolder = _accountHolder;
        this.balance = balance;
        this.accountType = accountType;
        BankAccount.totalBalance += balance;
    }
    get accountHolder() {
        return this._accountHolder;
    }
    set accountHolderSet(name) {
        if (name.length < 4) {
            console.log("Invalid name! Enter at least 4 characters.");
            return;
        }
        this._accountHolder = name.toUpperCase();
    }
    static bankAccountBalance() {
        console.log(`Total Bank Account Balance: ${BankAccount.totalBalance}`);
    }
    addBalance(amount) {
        this.balance += amount;
        BankAccount.totalBalance += amount;
    }
    subtractBalance(amount) {
        this.balance -= amount;
        BankAccount.totalBalance -= amount;
    }
}
class SavingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        super(accountNumber, accountHolder, balance, "saving");
    }
    credit(amount) {
        if (amount <= 0) {
            console.log("Credit amount must be greater than 0!");
            return;
        }
        this.addBalance(amount);
        console.log(`Credited: ${amount}`);
        console.log(`Current Balance: ${this.balance}`);
    }
    debit(amount) {
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
    displayAccount() {
        console.log(`Account Holder: ${this.accountHolder}Account Type: ${this.accountType}Balance: ${this.balance}`);
    }
}
class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        super(accountNumber, accountHolder, balance, "current");
    }
    credit(amount) {
        if (amount <= 0) {
            console.log("Credit amount must be greater than 0!");
            return;
        }
        this.addBalance(amount);
        console.log(`Credited: ${amount}`);
        console.log(`Current Balance: ${this.balance}`);
    }
    debit(amount) {
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
    displayAccount() {
        console.log(`Account Holder: ${this.accountHolder}Account Type: ${this.accountType}Balance: ${this.balance} `);
    }
}
const b1 = new CurrentAccount(3995214996, "priyabrata", 100000);
const b2 = new SavingAccount(399521499, "priyanka", 150000);
b1.credit(200);
b1.debit(100);
b2.credit(500);
b2.debit(200);
b1.displayAccount();
b2.displayAccount();
BankAccount.bankAccountBalance();
export {};
