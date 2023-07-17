import '../../styles/cartMobile.css';
import { CgTrashEmpty } from 'react-icons/cg';
import { CartConsumer } from '../../context/cartContext';

const EmptyCart = () => {
  const { clearCart } = CartConsumer();
  return (
    <div className='empty-cart'>
      <button type='button' onClick={() => clearCart()}>
        <div className='empty-cart-icon'>
          <CgTrashEmpty />
        </div>
        <span>Empty Cart</span>
      </button>
    </div>
  );
};

export default EmptyCart;
