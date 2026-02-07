const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//  filter() only "credit" transactions
const creditTransactions = transactions.filter(transaction => transaction.type === "credit");       
console.log("Credit Transactions:", creditTransactions);
//  map() to extract only transaction amounts
const transactionAmounts = transactions.map(transaction => transaction.amount);
console.log("Transaction Amounts:", transactionAmounts);
//  reduce() to calculate final account balance
const finalBalance = transactions.reduce((acc, transaction) => {
  if (transaction.type === "credit") {
    return acc + transaction.amount;
  } else {
    return acc - transaction.amount;
  }
}, 0);
console.log("Final Account Balance:", finalBalance);
//  find() the first debit transaction
const firstDebitTransaction = transactions.find(transaction => transaction.type === "debit");
console.log("First Debit Transaction:", firstDebitTransaction);
//  findIndex() of transaction with amount 10000
const indexWithAmount10000 = transactions.findIndex(transaction => transaction.amount === 10000);
console.log("Index of Transaction with Amount 10000:", indexWithAmount10000);