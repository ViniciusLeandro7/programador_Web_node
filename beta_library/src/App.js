import Header from './components/Header';
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';

 const AppContainer = styled.div `
    width: 100vw;
    min-height: 100vh;
    

    li {
    list-style: none;
}
 `



function App() {
  return (
    <AppContainer className="App">
     <Header />
     <Pesquisa />
     
    </AppContainer>
    
  );
}

export default App;