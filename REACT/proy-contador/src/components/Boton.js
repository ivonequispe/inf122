import '../style/Boton.css';

function Boton({ texto, esBotonClick, funcionClick }) {
     //texto="soy texto" ; es el nombre del boto  ya sea boton reiniciar , eliminar etc..
    return (
        <button className={esBotonClick ? "boton-click" : "boton-reiniciar"}   onClick={funcionClick}>
            
            {texto}
        </button>
    )
}

export default Boton;
