import style from './Boton.module.css'

function Boton({ texto, esBotonClick, funcionClick }) {
     //texto="soy texto" ; es el nombre del boto  ya sea boton reiniciar , eliminar etc..
        //esto es la forma de usar el stylo modular 
     return (
        <button className={esBotonClick ? style["boton-click"] : style["boton-reiniciar"]}  onClick={funcionClick} >
         
        {texto}
        </button>
    )
}

export default Boton;
