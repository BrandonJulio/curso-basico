const botondeNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botondeNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        AgregarNumero(boton.innerText);
    });
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        AgregarOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    Calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
  clear();
  actualizarDisplay();
});

function AgregarOperacion(op){
    if (opeActual === '') return;
    
    if (opeAnterior!= ''){
        Calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function Calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior ='';
}

function AgregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();