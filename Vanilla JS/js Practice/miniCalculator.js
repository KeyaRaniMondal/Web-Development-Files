const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

function calculator() {

    let a = prompt("Enter first number:")
    let b = prompt("Enter second number:")
    let choice
    choice = prompt("Enter your choce:\n 1.add num\n 2.subtract num\n 3.multiply num\n 4.divide num")

    switch (choice) {
        case '1':
            console.log(add(a, b))
            break;
        case '2':
            console.log(sub(a, b))
            break;
        case '3':
            console.log(mul(a, b))
            break;
        case '4':
            console.log(div(a, b))
            break;
        case '0':
            console.log("Exiting...");
            return;
        default:
            console.log("Invalid selection");
            return;
    }
}

calculator()

