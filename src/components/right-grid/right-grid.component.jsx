import React  from 'react';
import { RightGridContainer} from './right-grid.styles';
import  RightCard from '../right-card/right-card.component';
import  InputForm from '../input-forms/input-forms.component';
// import  Button from '../button/button.component';


const RightGrid = (props) => {
    
   return (
       <RightGridContainer>
           <div className='container'>
               <h4 className='title'>
                   What Do You Do ?
               </h4>
            </div> 
            <div className='cards'>
                 <RightCard /> 
            </div>
             <div className='forms'>
                 <InputForm  />
            </div>
       </RightGridContainer>
   )
}

export default RightGrid;