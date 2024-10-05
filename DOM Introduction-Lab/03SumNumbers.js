function calc(){

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    let num3 = Number(num1) + Number(num2)
    let resultBox = document.querySelector('#sum')
    resultBox.value = num3
}