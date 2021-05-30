import React from 'react';
import { Container} from './cart-card.styles';
import Card from '@material-ui/core/Card';
import Phone from  '../../assets/phoness.jpg';
import Shirt from  '../../assets/male.webp';




const CardComponent = ()  => {

  return (
    <Container >
      <div className='cart-title'>
          <h4 className='title-text'>
              ORDER SUMMARY
          </h4>
       </div>
       <br />
    <Card className='root'>
          <div className='items'>
          <div  className='items-photo'>
             <img src={Phone} alt="" />
           </div>
           <div className='items-properties'>
               <h4 className='title'>Meeysoo P45 Pro</h4>
               <h6 className='price'>70,000</h6>
               <h4 className='quantity'>Qty 1</h4>
           </div>
          </div>

          <div className='items'>
          <div  className='items-photo'>
             <img src={Shirt} alt="" />
           </div>
           <div className='items-properties'>
               <h4 className='title'>Men's Long Sleeve Shirt</h4>
               <h6 className='price'>10,500</h6>
               <h4 className='quantity'>Qty 2</h4>
           </div>
          </div>
    </Card>
     <br />
    <Card className='bottom'>
          <div className='total'>
             <div className='total-text'>
                 <h4 className='title'>Total Cart Value</h4>
             </div>
             <div className='total-price'>
                 <h4 className='prices'>#80,500</h4>
             </div>
          </div>
    </Card>

    </Container>
  );
}


export default CardComponent
