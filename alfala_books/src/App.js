import './App.css';
import Logo from './components/logo';
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'
import OptionsHeader from './components/OptionsHeader/index.js';
import IconesHeader from './components/IconesHeader/index.js';



const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconesHeader />

      </header>
    </div>
  );
}

export default App;
