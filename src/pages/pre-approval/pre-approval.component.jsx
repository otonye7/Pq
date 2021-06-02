import { Container} from './pre-approval.styles';
import LeftGrid from '../../components/left-grid/left-grid.component';
import Pagination from '../../components/pagination/pagination.component';

const PreApproval = () => {
    return (
        <Container>
            <div className='left'>
                <LeftGrid />
            </div>
             <div className='right'>
                 <Pagination />
             </div>
             
        </Container>
       
    )
}

export default PreApproval