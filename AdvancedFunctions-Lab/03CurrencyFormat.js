function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;  // Truncate value to integer and add separator
    result += value.toFixed(2).substr(-2, 2);    // Append two decimal places
    if (symbolFirst) {
        return symbol + ' ' + result;            // If symbolFirst is true, put symbol before the number
    } else {
        return result + ' ' + symbol;            // Else, put symbol after the number
    }
}

function createFormatter(separator, symbol, symbolFirst, formatter) {
    // Return a partially applied function that only takes 'value' as the argument
    return function(value) {
        return formatter(separator, symbol, symbolFirst, value);
    };
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
