import React from 'react';
import { GridFormContainer} from './right-grid-form.styles';
import { Input } from 'antd';


const GridForm = () => {


  return (
    <GridFormContainer>

    <div className='shape'>
          <div className='square'></div>
      </div>
    <div className='hash-container'>
        <h1 className='hash'>₦</h1>
    </div>
      <div className='input'>
    <Input
       type="number"
       size="large"
       required={true}
        />
    </div>
  </GridFormContainer>
  );
}

export default GridForm;

