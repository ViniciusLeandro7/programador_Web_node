import sacola from '../../img/sacola.svg'
import perfil from '../../img/perfil.svg'

const icones = [perfil,sacola]

 function IconesHeader(){
    return(
        <ul className='icones'>
          { icones.map((icone) => (
            <li className='icone'>
              <img src={icone}></img>
            </li>
          ))}
        </ul>
    )
 }
 
export default IconesHeader