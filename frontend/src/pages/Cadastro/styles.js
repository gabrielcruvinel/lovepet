import styled from 'styled-components';


export const BodyCadastro = styled.div`
    /* background: linear-gradient(to right, rgba(44,136,159,1), rgba(184,223,233,1)); */
    background: linear-gradient(90deg, rgba(44,136,159,1) 2%, rgba(240,227,196,0.8253676470588236) 62%);
    display:flex;
    flex-direction:row;
    height:100vh;
`;


export const CadastroElement = styled.div`
    background: rgba(0,0,0,0.2);
    display: flex;
    flex:1;  
    justify-content:center;
    align-items:center;
    align-self:center;
    flex-direction: column;
    border: 5px solid #DBF7FE;
    border-radius:20px;
    height:70%;
    h1{
        font-weight: bold;
        font-size:70px;
        font-family: 'Lucida Sans';
    }
`;

export const CampoPreencher = styled.div`
    display:flex;
    flex-direction:row;
    padding: 5px;
    width: 100%;
    height:max-content;
    margin: 10px;
    border: 1px solid #fff;
    border-radius:10px;
    background: rgba(255,255,255,0.2);
    label{
        font-weight:bold;
        color:#000;
        padding:5px;
        display:flex;
        flex:1;
        font-size:20px;
    }
    input{
        font-size:15px;
    }
`;

export const BtnCadastro = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:max-content;
    margin: 20px 0 20px 0px;
    button{
        color:#000;
        background: #fff;
        border:1px solid #000;
        border-radius: 4px;
        padding: 2px;
        font-weight: bold;
        font-size:20px;
        transition: 0.15s;
        padding:5px 20px 5px 20px;
        &:hover {
            background-color:rgba(24,71,83,1);
            color:#fff;
        }
        &:active{
            background-color: rgba(10,34,40,1);
        }        
    }
`;
