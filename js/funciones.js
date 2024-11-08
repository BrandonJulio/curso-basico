/**
 * 
 * funciones
 */

/** 
function mensaje(msj){
    return 'Hola mundo estoy aprendiendo desde 0';
}
var msj = mensaje();
console.log(msj);

function sumar(a,b,c){
    return a + b + c;
}

var result = sumar(7,5,6);
console.log(result);
*/


/**Funciones Recursivas */

var factorial= function(n){
    if( (n == 0)|| (n==1) )
        return 1;
    else    
        return(n*factorial(n-1));
}

console.log(factorial(4));