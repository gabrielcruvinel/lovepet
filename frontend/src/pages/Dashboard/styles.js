import styled from 'styled-components';

export const Container = styled.div`
    background-color:#d9d9d9;
    display:flex;
    flex-direction:row;
    height: 100vh;
`;

export const Left = styled.div`
    
    display: block;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

export const Right = styled.div`
    
    display:flex;
    flex:2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BoxMatch = styled.div`
   
    max-height:900px;
    max-width:900px;
    position:fixed;
    padding: 370px;
    background-color:#fff;
    margin-bottom:190px;
    
`;
// export const CardMatch = styled.div`
    
  
//     display:flex;
//     flex-direction:column;
//     border : 1px solid;
// `;