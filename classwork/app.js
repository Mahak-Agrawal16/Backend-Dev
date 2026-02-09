import { wallet, transactions } from "./wallet.js";
import { addFunds, spendFunds } from "./transaction.js";
function printStatement() {
    console.log("\n====== MINI STATEMENT ======");
    console.log(`Account Holder: ${wallet.accountHolder}`);
    console.log(`Current Balance: ₹${wallet.balance}`);
    console.log("\nLast 3 Transactions:");
    const lastThree = transactions.slice(-3);
    if (lastThree.length === 0) {
        console.log("No transactions yet.");
    } else {
        lastThree.forEach(t => {
            console.log(
                `#${t.transId} | ${t.type} | ₹${t.amount} | ${t.timestamp.toLocaleString()}`
            );
    });
}
console.log("============================\n");
}
addFunds(1234, 2000);
spendFunds(1234, 1000);
spendFunds(1234, 9000);
addFunds(1111, 500);
printStatement();
