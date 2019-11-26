import styled from 'styled-components';

export const BodyCadastro = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
    background: linear-gradient(to right, rgba(44,136,159,1), rgba(184,223,233,1));
`;


export const CenterElement = styled.div`
    display: flex;
    flex:1;    
    justify-content:center;
    align-items:center;
    flex-direction: column;
    h1{
        font-weight: bold;
    }
`;

export const CampoPreencher = styled.div`
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    height:max-content;
    margin: 10px;
    label{
        font-weight:bold;
        color:#000;
        margin-right: 20px;
    }
    input{
        
    }
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
            background-color:rgb(24,71,83,1);
            color:#fff;
        }
    }
`;