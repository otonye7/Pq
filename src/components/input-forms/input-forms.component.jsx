import React from 'react';
import { GridFormContainer} from './input-forms.styles';
import { Input } from 'antd';
 import   CalendarComponent from '../calendar/calendar.component';
 import   Loan from '../loans/loans.component';


const InputForm = () => {

  return (
    <GridFormContainer>
     <div className='earnings-text'>
         <h6 className='e-text'>How much do you get paid monthly ? </h6>
     </div>
     <div className='earning-container'>
        <div className='shape'>
            <div className='square'></div>
        </div>
       <div className='hash-container'>
           <h1 className='hash'>₦</h1>
        </div>
      <div className='input'>
           <Input  size="large" />
       </div>
      </div>
      <CalendarComponent />
      <Loan />
  </GridFormContainer>
  );
}

export default InputForm;