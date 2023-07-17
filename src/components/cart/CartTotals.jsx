import '../../styles/CartTotals.css';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { CartConsumer } from '../../context/cartContext';

const CartTotals = () => {
  const { totalPrice } = CartConsumer();
  return (
    <div className='cart-totals'>
      <h1>Cart totals</h1>
      <div className='total-container'>
        <h3>Total</h3>
        <p>${`${totalPrice.toFixed(2)}`}</p>
      </div>
      <div className='checkout-btn'>
        <button type='button'>
          <span className='checkout-btn-logo'>
            <MdShoppingCartCheckout />
          </span>
          proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
