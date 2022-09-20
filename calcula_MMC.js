//Calculates the Least Common Multiple (LCM) of two integer numbers

function mmc(number1, number2) {
    if (number1 % number2 === 0) { return number1; }
    else if (number2 % number1 === 0) { return number2; }
    else {        
        if (number1 > number2) {
            let resultado = number1;
            for (let multiplier = 2; resultado % number2 !== 0 ; multiplier++) {
                resultado = number1 * multiplier;
            }
            return resultado;
        } else {
            let resultado = number2;
            for (let multiplier = 2; resultado % number1 !== 0 ; multiplier++) {
                resultado = number2 * multiplier;
            }
            return resultado;
            }
        }
    }

console.log(mmc(3, 30));