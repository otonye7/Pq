import React from 'react';
import { Container} from './right-card.styles';
import Building from  '../../assets/house.jpg';

const CardComponent = ()  => {

  return (
    <Container >
        <div className='card-container'>
           <div  class="card">
               <img src={Building} alt="Avatar" />
           </div>
           <h6 className='texts'>Paid Employment</h6>
        </div>

        <div className='card-container'>
           <div  class="card">
               <img src={Building} alt="Avatar" />
           </div>
           <h6 className='text'>Self Employed / Freelance</h6>
        </div>

        <div className='card-container'>
           <div  class="card">
               <img src={Building} alt="Avatar" />
           </div>
           <h6 className='text'>Coperate Organization</h6>
        </div>

    </Container>
  );
}


export default CardComponent