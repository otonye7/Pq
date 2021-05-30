import { Container} from './left-grid.styles';
import CartCard from '../cart-card/cart-card.component';

const LeftGrid = () => {
   return (
       <Container>
           <div className='image-container'>
               <div className='image'></div>
          </div> 
          <div className='cart-container'>
              <div className='cart-card'>
                    <CartCard />
                </div>
          </div>
       </Container>
   )
}

export default LeftGrid;