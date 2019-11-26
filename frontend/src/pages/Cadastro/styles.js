import styled from 'styled-components';

export const BodyCadastro = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
    background: linear-gradient(to right, rgba(5,38,113,1), rgba(98,145,248,1));
`;


export const CenterElement = styled.div`
    display: flex;
    flex:1;    
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;

export const CampoPreencher = styled.div`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
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
        padding: 2px;
        font-weight: bold;
        transition: 0.15s;
        &:hover {
            background-color:rgb(255,0,0,1);
        }
    }
`;