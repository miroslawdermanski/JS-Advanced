function mathOps(num1, num2, str){

    let result
    switch(str){

        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);

}

mathOps(5, 6, '+')

mathOps(3, 5.5, '*')