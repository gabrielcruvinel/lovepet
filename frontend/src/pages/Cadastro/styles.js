import styled from 'styled-components';

export const BodyCadastro = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
    background: linear-gradient(to right, rgba(44,136,159,1), rgba(184,223,233,1));
`;


export const CadastroElement = styled.div`
    background: rgba(0,0,0,0.2);
    display: flex;
    flex:1;  
    justify-content:center;
    align-items:center;
    align-self:center;
    flex-direction: column;
    border: 2px solid #000;
    height:500px;
    h1{
        font-weight: bold;
        font-size:50px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    /*form{
        border: 2px solid #000;
        padding:20px;
    }*/
`;

export const CampoPreencher = styled.div`
    display:flex;
    flex-direction:row;
    padding: 5px;
    width: 100%;
    height:max-content;
    margin: 10px;
    border: 1px solid #fff;
    background: rgba(255,255,255,0.2);
    label{
        font-weight:bold;
        color:#000;
        padding:5px;
        display:flex;
        flex:1;
        font-size:15px;
    }
    input{

    }
`;

export const BtnCadastro = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:max-content;
    button{
        color:#000;
        background: #fff;
        border:1px solid #000;
        border-radius: 4px;
        padding: 2px;
        font-weight: bold;
        font-size:20px;
        transition: 0.15s;
        &:hover {
            background-color:rgba(24,71,83,1);
            color:#fff;
        }
        &:active{
            background-color: rgba(10,34,40,1);
        }

        
    }
`;