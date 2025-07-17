import './style.css'
import LogoBeta from "../LogoBeta";
import MenuNavegacao from "../MenuNavegacao";
import IconesMenu from '../IconesMenu';



function Header() {
    return (
        <header className="App-header">
            <LogoBeta />
            <IconesMenu />
        </header>
    )
}

export default Header