import React from 'react';
import { ButtonContainer} from './button.styles';
import Button from '@material-ui/core/Button';


const Buttons = ()  => {

  return (
    <ButtonContainer>
    <div className='button-container'>
      <Button className='button' color="secondary" variant="outlined">
        Continue
      </Button>
      </div>
    </ButtonContainer>
  );
}

export default Buttons
