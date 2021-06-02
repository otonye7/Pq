// import React, {useState, useEffect} from 'react';
import { PaymentContainer} from './payment.styles';
import Card from '@material-ui/core/Card';
;
// import  Button from '../button/button.component';
// import axios from 'axios';



const PaymentComponent = ()  => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('/')
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message))
  // })
   
  return (
    <PaymentContainer >
      <Card className='payment-container'>
         <div className='payment-for'>
             <h6 className='p-text'>Shopping Credit</h6>
             <br />
             <h6 className='p-text'>Down Payment</h6>
             <br />
             <h6 className='p-text'>Monthly Installment</h6>
             <br />
             <h6 className='p-text'>Tenure</h6>
         </div>
         <div className='vertical-border'></div>
         <div className='payment-for'>
             <h6 className='p-text'>56350</h6>
             <br />
             <h6 className='p-text'>24150</h6>
             <br />
             <h6 className='p-text'>21037</h6>
             <br />
             <h6 className='p-text'>3</h6>
         </div>

         <div className='payment-form'>
             <h6 className='p-downpayment'>customize <br /> down payment</h6>
             <div className='inputs'>
             <input className='area' type='number'  />
             </div>
             <br />
             <br />
             <div className='buttons'>
             <button className='b'>Update breakdown</button>
             </div>
         </div>
     </Card>
    </PaymentContainer>
  );
}


export default PaymentComponent

