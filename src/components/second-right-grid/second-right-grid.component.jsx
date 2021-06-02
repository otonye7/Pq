import { SecondRightGridContainer} from './second-right-grid.styles';
import  SecondRightCard from '../second-right-card/second-right-card.component';
import  Payment from '../payment/payment.component';


const SecondRight= () => {
   return (
       <SecondRightGridContainer>
           <div className='container'>
               <h4 className='s-text'>
                  Choose your plan
               </h4>
            </div> 
            <SecondRightCard />
            <br />
            <br />
            <br />
            <h6 className='s-text'>Payment break down</h6>
            <br />
            <Payment />
       </SecondRightGridContainer>
   )
}

export default SecondRight;