/*
Sentencia if..else
*/ 
/**
 * 

var nombre ='Brandon';
var esCasado = false;

if (esCasado == true){
    console.log(nombre + ' es casado');
} else{
    console.log(nombre + ' es soltero');
} */

/** 
var nombre ='Brandon';
var edad = 27;

// edad < 12 es un niño
// edad >= 12, es < 18 es un adolescente    
// edad > 17 es, < 60, un adulto
// edad > 60 es un anciando


if (edad < 12){
    console.log(nombre + ' es un niño');
}else if (edad > 11 && edad < 18){
    console.log(nombre + 'es un adolecente')
} else if (edad >17 && edad < 60){
    console.log(nombre + ' es un adulto')
} else{
    console.log(nombre + ' es un anciano')
}*/

/*var mes =5;

switch (mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
        console.log('No es un mes valido');
}*/

/*Sentencias For

for (var i=1; i<=10; i++){
    console.log(i);
}
*/

/*
    Sentencia while, Do while

var i =10;
while(i>=1){
    console.log(i);
    i--;
}
console.log('Cual es la sentencia: '+ i);
*/

/*
    Sentencia Do..while
*/

var i = 11;
do{
    console.log(i);
    i++;
} while(i<=10)
    console.log('Cual es la sentencia: '+ i);
