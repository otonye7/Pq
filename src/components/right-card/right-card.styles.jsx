import styled from 'styled-components';



export const Container = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;

 .card-container {
  
 }

 .text {
     text-align: center;
     color: #AF2363;
     font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
     font-weight: 400;
     font-style: normal;
     line-height: 1.6;
     font-size: 10px;
 }

 
 .texts {
     text-align: center;
     color: #B51254;
     font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
     font-weight: 700;
     font-style: normal;
     line-height: 1.6;
     font-size: 10px;
 }

.card {
  /* Add shadows to create the "card" effect */
  width: 70px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  height: auto;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.8rem;
}


img {
    width: 98%;
    height: auto;
    margin: 0 auto;
}
  
`;

