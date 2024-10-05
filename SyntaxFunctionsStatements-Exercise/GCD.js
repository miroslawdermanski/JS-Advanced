function gcd(num1, num2){

    let gcd = num1 % num2
    while(gcd != 0){
        num1 = num2
        num2 = gcd
        gcd = num1 % num2
    }
    console.log(num2);
}

gcd(15, 5)

gcd(2154, 458)

// function naiveGCD(num1, num2) {
//     let gcd = 1;
//     let min = Math.min(num1, num2);

//     for (let i = 1; i <= min; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             gcd = i;
//         }
//     }

//     console.log(gcd);
// }