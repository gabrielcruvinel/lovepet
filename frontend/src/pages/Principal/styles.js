import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
    display:flex;
    flex-direction:row;
    height: 100vh;
    background: rgb(44,136,159);
    background: linear-gradient(90deg, rgba(44,136,159,1) 2%, rgba(240,227,196,0.8253676470588236) 62%);

`;
export const Preview = styled.div `
    display:flex;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;
export const PrincipalInfo = styled.div `
    display:flex;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction:column;

`;
export const InfoPrincipalRow = styled.span `
    display:flex;
    font-size: 27px;
    margin:60px 0;
    svg{
        margin-right: 20px;
    }
`;
export const TxtPrincipal = styled.div `
    text-align:center;
    font-size: 18px;
    
`;
export const PrincipalLogin = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    form{
        display:flex;
        flex-direction:column;
        margin-top:30px;
        width:270px;
    }
    input{
        background: rgba(0, 0, 0 , 0.1);
        border: 0px;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        margin: 0 0 10px;
        &::placeholder {
        color: rgba(0, 0, 0, 0.7);
        }
    }
    button {
        margin: 5px 0 0;
        height: 44px;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        background: #248ea9;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
            background-color:${ darken(0.05, '#248ea9') };
        }
    }
`;
export const TitleCadastro = styled.div`
    color:black;
`;
export const BtnCadastro = styled.div`
    margin-top:180px;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    text-align: center;
        button{
        width: 260px;
    }
`;
export const BtnMoreInfo = styled.div`
    button {
        margin: 5px 0 0;
        height: 35px;
        width: 140px;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        background: #248ea9;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
            background-color:${ darken(0.05, '#248ea9') };
        }
        svg{
            margin-right:5px;
        }
    }      
`;
