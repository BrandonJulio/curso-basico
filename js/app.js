/*console.log('Hola mi gente como estamos?')
console.log(5+5)*/

/************* 
 Operadores matemáticos +, -,*,


var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;


// Obtiene la fecha actual y extrae el año
var fechaActual = new Date();
var yearActual = fechaActual.getFullYear();

edadAna= 34;
edadMaria = 28;
yearActual = 2024;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

// Calcula el año de nacimiento de Ana y de Maria correctamente
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log('Diferencia de edades: ' + diferenciaEdad);
console.log('Suma de edades: '+ sumaEdades);
console.log('Año en que nacio Ana: ' + yearAna);
console.log('Año en que nacio Maria: ' + yearMaria);
console.log('Año actual: ' + fechaActual.toLocaleDateString());
console.log(yearActual*5);
console.log(yearActual/2);*/

/**
 * Operadores lógicos, unarios y de asignaición

var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna= edadAna < edadMaria;
var menorMaria = edadMaria < edadAna;
console.log(mayorAna);
console.log(menorMaria);

// Unarios, ++Incremento, --Decremento

edadAna++;
console.log(edadAna);

var a = 12;
var b = 5;
var c= a % 5;
a +=b;
console.log(c);
console.log(a); */