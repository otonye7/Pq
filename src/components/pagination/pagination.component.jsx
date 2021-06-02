import React from 'react';
import { PaginationContainer} from './pagination.styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  RightGrid from '../right-grid/right-grid.component';
import  SecondRightGrid from '../second-right-grid/second-right-grid.component.jsx';
import {Link}  from 'react-router-dom';



function getSteps() {
  return ['a', 'b', 'c', 'd'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <RightGrid />;
    case 1:
      return  <SecondRightGrid />;
    default:
      return null;
  }
}

const StepperComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  return (
    <PaginationContainer>
     {
       activeStep === 0 ? null
       :
       <div className='link-container'>
       <Link
          disabled={activeStep === 0}
          onClick={handleBack}
          className='back-link'
        >
           Back
        </Link>
      </div>
     } 
    <div className='step-container'>
      
      <Stepper className='stepper' activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step className='step'  key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className=''>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className=''>{getStepContent(activeStep)}</Typography>
            <br />
            <br />
            <div className='button-div'>
              <Button className='button-continue' color='secondary' variant="contained"  onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Contunue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </PaginationContainer>
  );
}

export default StepperComponent







