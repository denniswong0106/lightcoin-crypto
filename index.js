class Account {
  constructor (username) {
    this.username = username;
    this.transactions = [];
  }

  get balance () {
    let sumOfTransactions = 0;
    for (const transaction of this.transactions) {
      sumOfTransactions += transaction.value;
    }
    return sumOfTransactions;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
};

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.time = new Date();
    this.account.addTransaction(this)

  }
};


class Withdrawal extends Transaction {

  get value() {
    return -(this.amount);
  }

  commit() {
    if (this.amount < this.account.balance) {
      super.commit()
    } else {
      return `Current Balance is too low! Your balance is ${this.account.balance}. Your Withdrawal request is ${this.amount}`;
    }
  }
};

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

};



// DRIVER CODE

const myAccount = new Account("snow-patrol");
// console.log(myAccount.balance)
t1 = new Deposit(500, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log(myAccount.balance)

t2 = new Withdrawal(499, myAccount);
console.log(t2.commit());
console.log('Transaction 2:', t2);

console.log(myAccount.balance)
console.log(myAccount.transactions)
