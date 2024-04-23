#! usr/bin/env node

import inquirer from "inquirer";

// Bank name
console.log("Welcome to the XYZ Bank")

        //    user balance
let myBalance : number = 12000;

      // ask user to enter pin
let pin = await inquirer.prompt(
    {
        name : "pin",
        type : "number",
        message : "Welcome. Please enter your ATM PIN. This is your first entry, so it's important to remember this PIN."
    }
)
       // user pin
let mypin : number = pin.pin;

        // ask pin to further process
let enterPin = await  inquirer.prompt(
    {
        name : "userpin",
        type : "number",
        message : "Enter Your Pin For Further Processing"
    }
);
//  user enetr correct pin then ask other question
if (enterPin.userpin === mypin) {
let operationAnswer = await  inquirer.prompt(
    [

      {
        name : "operation",
        type : "list",
        message : " Please Select One Of Them,To Further Process:",
        choices : ["Withdraw" , "Balance Check", "Currency Converter"]
      }
  ]
);
if (operationAnswer.operation ===  "Withdraw") {
    let withdrawMethod = await inquirer.prompt(
     [
        {
        name : "methodWithdraw",
        type : "list",
        message : " Please Select Withdraw Method:",
        choices : ["Easypaisa" , "Googlepay",]
        }
     ]   
    );
//   if user select easypaisa  
if (withdrawMethod.methodWithdraw === "Easypaisa") {
    let easypaisaDetail = await inquirer.prompt(
        [
            {
              name : "easypaesaDetail",
              type : "number",
              message : "Enter you Easypaisa Number :"
            },
            // user select withdraw amount
            {
                name : "withdrawAmount",
                type : "number",
                message : "Enter you amount you want to withdraw :"
              },
        ],
    );

    // store user Withdraw Amount
    let userWithdrawAmount = easypaisaDetail.withdrawAmount

    // if withdraw amount > userbalance
    if (userWithdrawAmount > myBalance){
        console.log(`Insufficient Balance Your current balance is ${myBalance}.`);
    };

    // if withdraw amount <= userbalance
    if (userWithdrawAmount <= myBalance){
        console.log(`Withdrawal successful. Remaining balance: ${myBalance - easypaisaDetail.withdrawAmount} `);
    };
};
//   if user select Googlepay
if (withdrawMethod.methodWithdraw === "Googlepay") {
    let googlepayDetail = await inquirer.prompt(
        [
            {
              name : "googlePay",
              type : "number",
              message : "Enter Your GooglePay I'D :",
            },
            // user select withdraw amount
            {
                name : "withdrawAmount",
                type : "number",
                message : "Enter you amount you want to withdraw :"
              },
        ],  
    );

    // store user Withdraw Amount
    let userWithdrawAmount = googlepayDetail.withdrawAmount

    // if withdraw amount > userbalance

    if (userWithdrawAmount > myBalance){
        console.log(`Insufficient Balance Your current balance is ${myBalance}.`);
    };

    // if withdraw amount <= userbalance
    if (userWithdrawAmount <= myBalance){
        console.log(`Withdrawal successful. Remaining balance: ${myBalance - googlepayDetail.withdrawAmount} `);
    };

};
    };

    // if user select Balance Check
    if (operationAnswer.operation === "Balance Check") {
        console.log(`Your Current Balance is ${myBalance}`)
    };

    // if user select currency converter
    if (operationAnswer.operation === "Currency Converter"){
        console.log(`Your Current Balance is ${myBalance} in USD`)
        let currencyConverter = await inquirer.prompt(
            [
                {
                    name : "currencyWithCountry",
                    type : "list",
                    message : "Select the Country you Want To Convert Currency in this Country: ",
                    choices : ["Pakistan", "India","USD"],
                },
            ]
        );
        // if user select Pakistan
    if (currencyConverter.currencyWithCountry == "Pakistan"){
           console.log(`Your current Balance in PKR is ${myBalance * 278.55}`);
        };
          // if user select India
    if (currencyConverter.currencyWithCountry == "India"){
            console.log(`Your current Balance in IND is ${myBalance * 83.27}`);
         };    
     if (currencyConverter.currencyWithCountry == "USD"){
            console.log(`Your current Balance in USD is ${myBalance * 1}`);
         };        
    };
}

//  user enetr wrong pin so print this below statement
else { 
   console.log("Please Enter Correct Pin")
}


