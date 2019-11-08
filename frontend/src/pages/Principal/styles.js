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
    flex:1;
    margin-left: 12%;
    padding-top: 30px;
    font-size: 27px;
    flex-direction:row;
    

`;

export const TxtPrincipal = styled.div `
    text-align:center;
    font-size: 18px;
    margin-top:210px;
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

export const BtnCadastro = styled.div`
    position:fixed;
    bottom:160px;
    height: 44px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    /* justify-content:center;
    align-items:center;
    flex-direction: column; */
    
`;