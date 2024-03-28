import inquirer from 'inquirer';
const { operation, num1, num2 } = await inquirer.prompt([
    {
        type: 'list',
        name: 'operation',
        message: 'Select operation:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    },
    {
        type: 'input',
        name: 'num1',
        message: 'Enter first number:',
        validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number'
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter second number:',
        validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number'
    }
]);
let result;
switch (operation) {
    case 'Add':
        result = parseFloat(num1) + parseFloat(num2);
        break;
    case 'Subtract':
        result = parseFloat(num1) - parseFloat(num2);
        break;
    case 'Multiply':
        result = parseFloat(num1) * parseFloat(num2);
        break;
    case 'Divide':
        if (parseFloat(num2) === 0) {
            console.log("Division by zero is not allowed");
            result = NaN;
        }
        else {
            result = parseFloat(num1) / parseFloat(num2);
        }
        break;
    default:
        console.log("Invalid operation selected");
        result = NaN;
}
console.log("Result is: " + result);
