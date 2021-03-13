class Account {
  constructor (username) {
    this.username = username;

    this.balance = 0;
  }
};

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
};


class Withdrawal extends Transaction {

  get value() {
    return -(this.amount);
  }

  // commit() {
  //   this.account.balance -= this.amount;
  // }
};

class Deposit extends Transaction {

  get value() {
    return
  }

  // commit() {
  //   this.account.balance += this.amount;
  // }
};



// DRIVER CODE

const myAccount = new Account("snow-patrol");
t1 = new Deposit(500, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(50.25, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log(myAccount.balance)
