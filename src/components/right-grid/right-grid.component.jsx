import { RightGridContainer} from './right-grid.styles';
import  RightCard from '../right-card/right-card.component';
import  InputForm from '../input-forms/input-forms.component';
import  Button from '../button/button.component';
import  PaginationComponent from '../pagination/pagination.component';


const RightGrid = () => {
   return (
       <RightGridContainer>
           <div className='pagination'>
               <PaginationComponent />
           </div>
           <div className='container'>
               <h4 className='title'>
                   What Do You Do ?
               </h4>
            </div> 
            <div className='cards'>
                 <RightCard /> 
            </div>
             <div className='forms'>
                 <InputForm />
            </div>
            <Button />
       </RightGridContainer>
   )
}

export default RightGrid;