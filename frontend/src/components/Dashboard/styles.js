import styled from 'styled-components';

export const Container = styled.div`
    background-color:#fff;
    display:flex;
    flex-direction:row;
    height: 100vh;
`;

export const Left = styled.div`
    border: 1px solid; 
    display: block;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;
export const Right = styled.div`
    border: 1px solid;
    display:flex;
    flex:2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const HeaderUsuario = styled.div`
    border: 1px solid;
    display:flex; 
    flex:2;
    
`;

export const MensagensBox = styled.div`
    border: 1px solid;
    display:flex;
    flex:4;
`;

export const FooterUsuario = styled.div`
    border: 1px solid;
    display:flex;
    align-self: flex-end;

`;
