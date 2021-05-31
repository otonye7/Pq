import styled from 'styled-components';
import Image from  '../../assets/left.png';


export const Container = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr;

 .cart-container {
    background-color: #F2F2F2;
 }

 .image {
    width: 100%;
    height: 100vh;
    background-image: url(${Image});
    background-position: center;
    background-size: cover;
    object-fit: cover;
 }
`;