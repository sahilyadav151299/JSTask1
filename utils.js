'use strict'

// Addition Operation 

function performAddition(value1, value2)
{
    let result = 0;
    result = value1 + value2;
    document.getElementById("result").value = result;
}

// Subtraction Operation

function performSubtraction(value1, value2)
{
    let result = 0;
    result = value1 - value2;
    document.getElementById("result").value = result;
}

// Multiplication Operation

function performMultiplication(value1, value2)
{
    let result = 0;
    result = value1 * value2;
    document.getElementById("result").value = result;
}

// Division Operation

function performDivision(value1, value2)
{
    let result = 0;
    if(value2==0)
    alert("Cannot Divide By Zero");
    else
    {
        result = value1/value2;
        document.getElementById("result").value = result;
    }
}

// Modulus Operation

function performModulus(value1, value2)
{
    let result = 0;
    result = value1%value2;
    document.getElementById("result").value = result;
}

// Exponentiation Operation

function performExponentiation(value1, value2)
{
    let result = 0;
    result = value1**value2;
    document.getElementById("result").value = result;
}

// Main function for calculation

function calculateResult()
{
    const value1 = +(document.getElementById('operand1').value);
    const value2 = +(document.getElementById('operand2').value);
    const opr = document.getElementById('operator').value;

    console.log(typeof value1, value1, value2);
    console.log(opr);

    switch(opr)
    {
        case "Add":
            performAddition(value1, value2);
            break;
        case "Sub":
            performSubtraction(value1, value2);
            break;
        case "Mul":
            performMultiplication(value1, value2);
            break;
        case "Div":
            performDivision(value1, value2);
            break;
        case "Mod":
            performModulus(value1, value2);
            break;
        case "Exp":
            performExponentiation(value1, value2);
            break;  
        default:
            alert("Choose a valid operation");
            break;          
    }
}
