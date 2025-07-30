import './style.css'

import estante from '../../img/estante.svg'
import livro from '../../img/livro.svg'


const icones = [estante, livro]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'>
                    <img src={icone}></img>
                </li>
            ))}
        </ul>
    )
}

export default IconesHeader
