import './styles.css'

// import perfil from '../../img/perfil.svg'
// import sacola from '../../img/sacola.sv'


// const icones = [perfil, sacola]

function IconesMenu() {
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

export default IconesMenu