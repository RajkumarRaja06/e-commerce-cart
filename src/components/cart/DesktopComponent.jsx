import '../../styles/cartDesktop.css';
import { CiSquareRemove } from 'react-icons/ci';
import { HiPlus, HiMinus } from 'react-icons/hi';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import { CartConsumer } from '../../context/cartContext';

const DesktopComponent = () => {
  const { cart, removeItem, increasedItem, decreasedItem, subTotal } =
    CartConsumer();
  return (
    <div className='desktop-cart-container'>
      <div className='desktop-cart'>
        <div className='desktop-cart-heading'>
          <div className='cart-heading-product'>Product</div>
          <div className='cart-heading-price'>Price</div>
          <div className='cart-heading-quantity'>Quantity</div>
          <div className='cart-heading-total'>Total</div>
        </div>
        {cart.map((item) => {
          const { name, img, quantity, price, id } = item;
          return (
            <div className='desktop-cart-items' key={id}>
              <div className='desktop-cart-remove-btn'>
                <button type='button' onClick={() => removeItem(id)}>
                  <CiSquareRemove />
                </button>
              </div>
              <div className='desktop-cart-img-container'>
                <img src={img} alt={name} />
              </div>
              <div className='desktop-cart-product-name'>
                <p>{name}</p>
              </div>
              <div className='desktop-cart-product-price'>
                <p>${price}</p>
              </div>
              <div className='desktop-cart-quantity-container'>
                <div className='desktop-cart-quantity'>{quantity}</div>
                <div className='desktop-cart-quantity-btn'>
                  <button
                    type='button'
                    className='desktop-cart-quantity-plus-btn'
                    onClick={() => increasedItem(id)}
                  >
                    <HiPlus />
                  </button>
                  <button
                    type='button'
                    className='desktop-cart-quantity-minus-btn'
                    onClick={() => decreasedItem(id)}
                  >
                    <HiMinus />
                  </button>
                </div>
              </div>
              <div className='desktop-cart-subtotal-price'>
                <p>${subTotal}</p>
              </div>
            </div>
          );
        })}
        <EmptyCart />
      </div>
      <CartTotals />
    </div>
  );
};
export default DesktopComponent;
