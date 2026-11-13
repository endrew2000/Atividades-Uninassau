const campoNumero = document.getElementById('campoNumero');
const contador = document.getElementById('contador');

campoNumero.addEventListener('input', function() {

    let numeroDigitado = campoNumero.value;
    
    contador.innerHTML = '';

    if (numeroDigitado === '') {
        return;
    }

    contador.innerHTML = `<strong>--- Tabuada do ${numeroDigitado} ---</strong><br><br>`;

    for (let i = 1; i <= 10; i++) {
        
        contador.innerHTML += `${numeroDigitado} x ${i} = ${numeroDigitado * i} <br>`;
    }
});

const campoTexto = document.getElementById('campoTexto');
const resultado = document.getElementById('resultado');


campoTexto.addEventListener('input', function() {
    
    let textoDigitado = campoTexto.value;
    
    let totalCaracteres = 0;
    
    for (let letra of textoDigitado) {
        
        totalCaracteres++; 
    }
    
    resultado.innerHTML = `Total de caracteres: ${totalCaracteres}`;
});