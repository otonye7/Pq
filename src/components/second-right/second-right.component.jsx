import { RightGridContainer} from './second-right.styles';
import  PaginationComponent from '../pagination/pagination.component';


const SecondRight= (props) => {
    console.log(props)
   return (
       <RightGridContainer>
           <div className='pagination'>
               <PaginationComponent />
           </div>
           <br />
           <div className='container'>
               <h4 className='title'>
                   What Do You Do ?
               </h4>
            </div> 
       </RightGridContainer>
   )
}

export default SecondRight;