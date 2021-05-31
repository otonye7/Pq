import React  from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { PageContainer} from './pagination.styles';



const PaginationComponent = () => {

  return (
    <PageContainer>
    <div className="">
      <Pagination
       count={4}
    //    defaultPage={<RightGrid />}
       color="secondary"
       size="medium" 
       />
    </div>
    </PageContainer>
  );
}

export default PaginationComponent;
