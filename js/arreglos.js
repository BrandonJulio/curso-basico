/**Arreglos */

var nombres = ['Brandon', 'salome', 'Ronaldo', 'ferxxo'];
var edades = [25, 30, 35, 40];
var vegetales = new Array ('tomate','lechuga', 'pepino');


// console.log(nombres[1])
// console.log(vegetales[2])


// nombres [3] ='Feid';
// vegetales [2]= 'cebolla';

// console.log(nombres[3]);
// console.log(vegetales[2]);

console.log(nombres.length);
for (var i=0; i<=nombres.length -1; i++){
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento, indice){
    console.log(indice, elemento);
})