#! /usr/bin/env node
import inquirer from "inquirer";
//account balance and account pin code
let mybalance = 5000;
let myPin = 9090;
//print welcome message
console.log("\t Welcome to Muzammil ATM-Machine \t");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct ,login successfully ! :");
    // console.log(`your current accpunt balance ${mybalance}`);
    let OperationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select your operation",
            choices: ["withdraw ammount ", "check balance"],
        },
    ]);
    if (OperationAns.operation === "withdraw ammount ") {
        let amountAns = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter your withdraw ammount",
            },
        ]);
        if (amountAns.amount > mybalance) {
            console.log("insufficient balance ");
        }
        else {
            mybalance -= amountAns.amount;
            console.log(`${amountAns.amount} widraw succsessfully`);
            console.log(`your remaning balance is : ${mybalance}`);
        }
    }
    else if (OperationAns.operation === "check balance") {
        console.log(`your current accunt balance ${mybalance}`);
    }
}
else {
    console.log("pin is incorrect !");
}
