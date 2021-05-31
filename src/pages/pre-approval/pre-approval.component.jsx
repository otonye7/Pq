import { Container} from './pre-approval.styles';
import LeftGrid from '../../components/left-grid/left-grid.component';
import RightGrid from '../../components/right-grid/right-grid.component';

const PreApproval = () => {
    return (
        <Container>
            <div className='left'>
                <LeftGrid />
            </div>
             <div className='right'>
                 <RightGrid />
             </div>
             
        </Container>
       
    )
}

export default PreApproval