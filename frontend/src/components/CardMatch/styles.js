import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    max-height:900px;
    max-width:900px;
`;

export const FotoPetMatch = styled.div ` 
    
  
    text-align:center;
    margin-left: -370px;
    margin-right: -370px;
    margin-top: -370px;
    padding: 256px;
    
`;

export const FooterMatch = styled.div`
    flex:1;
    display:flex;
    text-align: center;
    margin-left: -370px;
    margin-right: -370px;
    margin-bottom:-370px;
`;
export const Like = styled.div`
    flex:1;
   
    text-align: center;
    font-size:50px;
        svg{
            margin-top: 50px
        }
`;
export const MaisInfo = styled.div`
    flex:1;
    border-right: 1px solid #e5e5e5;
    text-align: center;
    font-size:50px;
    svg{
            margin-top: 50px
        }

`;
export const Dislike = styled.div`
    flex:1;
    border-right: 1px solid #e5e5e5;
    text-align: center;
    font-size:50px;
    svg{
            margin-top: 50px
        }

`;