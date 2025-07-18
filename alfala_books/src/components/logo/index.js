import logo from '../../img/logo.svg';
import styled from 'styled-components';
 
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
`
 
const Img = styled.img`
    height: 60px;
`
 
function Logo() {
    return (
        <LogoContainer>
            <Img src={logo} alt='Alfala books logo'></Img>
            <p> <strong>Alfala</strong>Books</p>
        </LogoContainer>
    )
}
 
export default Logo;
 