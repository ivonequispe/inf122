/*const usuario={
    nombre:'carlos ',
    pais:'Argentina',
};

switch(usuario.pais){
    case 'mexico':
       console.log('el usuario es mexicano');
}
------------------------

function saludo()
{
    console.log('hola mundo!');
}
//------------------------------

const saludo=function(){
    console.log('hola mundo desde la variable');
}

//muestra los paslabras que inicia con 'A'
let word=['hola','como','anda','aguila','cabeza','Angel']
for(let i=0; i<word.length; i++)
{
    if(word[i].toUpperCase().indexOf('A')==0)
    {
        console.log(word[i]);
    }
}


/// aplicando cotinue asi no muestra la palabras que inician con 'A'

let word=['hola','como','anda','aguila','cabeza','Angel']
for(let i=0; i<word.length; i++)
{
    if(word[i].toUpperCase().indexOf('A')==0)
    {
        continue;
    }
    
    
    console.log(word[i]);
}

// muestra los elementos de array word 
let word=['hola','como','anda','aguila','cabeza','Angel']

for(let i of word)
{
       console.log(i);
}
// recordando que un string es un array
let nombre='francisca'

for(let i of nombre)
{
       console.log(i);
}
*/
// asi tambien dentro de un array estan string y int con 
// typeof distinguimos el tipo de elemento
let nombre=['hola',6,'saludos',6]
let sum=0;
for(let i =0;i<nombre.length;i++)
{ let element=nombre[i];
    
    if(typeof element=='number' )
    {
     sum+=element;
    }
}
console.log(sum);
//este muestra 1 si elemento existe y si no nos muestra  -1
console.log(nombre.indexOf(6));

