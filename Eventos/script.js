// Pop-up
document.getElementById('popup').style.display = 'block';
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Formulário e cumprimento
document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    document.getElementById('greeting').textContent = 'Bom dia, ' + name + '!';
});

// Verificador de número par/ímpar
document.getElementById('checkNumber').addEventListener('click', function() {
    const number = parseInt(document.getElementById('number').value);
    if (number % 2 === 0) {
        document.getElementById('result').textContent = 'O número é par.';
    } else {
        document.getElementById('result').textContent = 'O número é ímpar.';
    }
});

// Calculadora
document.getElementById('calculate').addEventListener('click', function() {
    const operation = document.getElementById('operation').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    }
    document.getElementById('calcResult').textContent = 'Resultado: ' + result;
});
