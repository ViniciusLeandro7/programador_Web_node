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
            <Img src={logo} alt='TALivra'></Img>
            <p> <strong></strong></p>
        </LogoContainer>
    )
}
 
export default Logo;
 