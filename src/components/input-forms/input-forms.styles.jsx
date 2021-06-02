  
import styled from 'styled-components';


export const GridFormContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  
  
 
  .earning-container {
    display: flex;
    /* justify-content: space-between; */
    align-content: center;
    position: relative;
    padding-top: 0.8rem;
  }

  .earnings-text {
     color: #AF2363;
     font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
     font-weight: 400;
     font-style: normal;
     line-height: 1.6;
     font-size: 18px;
  }

  .form-text {
     color: #AF2363;
  }
  
  .square {
  position: relative;
  height: 30px;
  width: 30px;
  background-color: #58024B;
  font-weight: 700;
  color: 'white';
}

.hash-container {
    position: absolute;
    width: 33px;
    text-align: center;
    top: 8px;
}

.hash {
    font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: 1.6;
    font-size: 25px;
    color: white;
  }

  .input {
      width: 100%;
      padding-left: 0.5rem;
  }

  input {
    width: 96%;
    height: 4vh;
  }

`;