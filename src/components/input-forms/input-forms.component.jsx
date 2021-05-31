import React, {useState} from 'react';
import { GridFormContainer} from './input-forms.styles';
import { Input } from 'antd';
 import   CalendarComponent from '../calendar/calendar.component';
 import   Loan from '../loans/loans.component';


const InputForm = () => {
  const [data, setData] = useState({
    salary: ''
  })

  const handleChange = e => {
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  }


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
           <Input 
           id='salary'
           size="large"
           type="number"
           value={data.salary}
           required={true}
           onChange={handleChange} />
       </div>
      </div>
      <CalendarComponent />
      <Loan />
  </GridFormContainer>
  );
}

export default InputForm;