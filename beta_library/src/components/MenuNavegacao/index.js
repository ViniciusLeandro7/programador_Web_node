import './style.css'

const textoOpcoes = ['INICIO', 'CATÁLOGO', 'SOBRE']

 function MenuNavegacao(){
    return(
        <ul className='menu'>
          {textoOpcoes.map((texto) => (
            <li className='menu'><p>{texto}</p></li>
            ))
          }
        </ul>
    )
 }
 
export default MenuNavegacao