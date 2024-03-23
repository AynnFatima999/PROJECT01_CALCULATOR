#!  /usr/bin/env node
import inquirer from "inquirer";
let calculate = await inquirer.prompt([{
        name: 'firstNumber',
        type: 'number',
        message: "Enter your first Number"
    },
    {
        name: 'secondNumber',
        type: 'number',
        message: "Enter your second Number"
    },
    {
        name: 'operators',
        type: 'list',
        message: "Select any operator to calculate value:",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponenciation", "Modulus"]
    },
]);
if (calculate.operators === "Addition") {
    console.log(calculate.firstNumber + calculate.secondNumber);
}
else if (calculate.operators === "Subtraction") {
    console.log(calculate.firstNumber - calculate.secondNumber);
}
else if (calculate.operators === "Multiplication") {
    console.log(calculate.firstNumber * calculate.secondNumber);
}
else if (calculate.operators === "Division") {
    console.log(calculate.firstNumber / calculate.secondNumber);
}
else if (calculate.operators === "Exponenciation") {
    console.log(calculate.firstNumber ** calculate.secondNumber);
}
else if (calculate.operators === "Modulus") {
    console.log(calculate.firstNumber % calculate.secondNumber);
}
else {
    console.log("Please select valid operator");
}
