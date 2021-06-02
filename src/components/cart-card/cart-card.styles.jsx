import styled from 'styled-components';



export const Container = styled.div`
 width: 80%;
 margin: 0 auto;
 padding-top: 2rem;

 .cart-title {
     width: 100%;
     margin: 0 auto;
 }

 .title-text {
       font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 400;
       font-style: normal;
       line-height: 1.6;
       font-size: 14px;
 }

 .items {
     display: flex;
 }

 .items-properties {
     display: flex;
     flex-direction: column;
     align-content: center;
     padding-top: 2rem;
 }

 .title {
       font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 400;
       font-style: normal;
       font-size: 12px;
 }

 .price {
      font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 400;
       font-style: normal;
       font-size: 10;
       padding-top:0.1rem;
 }

 .quantity {
       font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 400;
       font-style: normal;
       font-size: 10px;
       padding-top:0.1rem;
 }
 
 .prices {
        font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 600;
       font-style: normal;
 }


 .bottom {
     border-radius: 20px;
     height:3rem;
 }

 .total {
     display: flex;
     justify-content: space-around;
     align-content: center;
 }

 .total-text {
     padding-top: 1rem;
 }

 .total-price {
     padding-top: 1rem;
 }

 .root {
     border-radius: 20px;
 }


 img {
    width: 100%;
    height: auto;
}

.items-photo {
    width: 40%;
}
`;