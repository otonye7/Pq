import { LoansContainer} from './loans.styles';
import Card from '@material-ui/core/Card';


const Loans = () => {
    return (
        <LoansContainer>
           <div className='loan-title'>
               <h6 className='loan-text'>Do you have an existing loan ?</h6>
           </div>
           <Card className='roots'>
               <div className='radio-buttons'>
                   <div className='radio-yes'>
                       <input type="radio" value="Yes"  required/>
                       <label className='labels-yes' for="yes">Yes</label>
                   </div>
                   <div className='vertical-border'></div>
                   <div className='radio-no'>
                   <input type="radio" value="No"  required/>
                   <label className='labels-no' for="No">No</label>
                   </div>
                </div>
          </Card>
        </LoansContainer>
    )
}

export default Loans


