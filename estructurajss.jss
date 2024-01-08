const color=['rojo','verde','rosado','negro']
const persona={nombre:"catalina", apellido:"gonzales", edad:23};
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
for(let i=0; i<color.lengt();i++)
{
   console.log(color[i]);
}

color.push("violeta");
color.reverse();
color.sort();
color.push(5);
color.push(7);
color.push(3);
color.find(callback(element[, index[, array]])[, thisArg])
// busca elemento dentro de un array o vector
const color=['rojo','verde','rosado','negro']
var encontrado= color.find(function(elemento)
                          { return elemento === 'rosado'; }); 
console.log(encontrado);
// busca y muestra la posicion del elemto que se busca

var elemento= color.findIndex(function(elemento)
                          { return elemento === 2; }); 
console.log(elemento);