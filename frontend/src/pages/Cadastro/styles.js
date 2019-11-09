import styled from 'styled-components';

export const BodyCadastro = styled.body`
    display:flex;
    flex-direction:row;
    height:100vh;
`;

export const SideElement = styled.div`
    background: rgba(240,227,196,1);
    display: flex;
    flex:1;
`;

export const CenterElement = styled.div`
    background: rgba(44,136,159,1);
    display: flex;
    flex:1;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;

export const CampoPreencher = styled.div`
    border: 1px solid #000;
    border-radius: 5px;
    width:max-content;
    height:max-content;
    margin: 10px;
`;

export const BtnCadastro = styled.div`
    button{
        color:#000;
        background: #fff;
        border:1px solid #000;
        border-radius: 4px;
    }
`;
