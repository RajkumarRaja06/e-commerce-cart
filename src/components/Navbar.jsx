import { HiOutlineShoppingBag } from 'react-icons/hi';
import '../styles/navbar.css';
import { CartConsumer } from '../context/cartContext';

const Navbar = () => {
  const { totalQuantity } = CartConsumer();
  return (
    <nav>
      <h1 className='cart-logo'>Cart</h1>
      <div className='cart-bag-container'>
        <h1 className='cart-bag'>
          <HiOutlineShoppingBag />
        </h1>
        <p className='cart-bagItem-count'>{totalQuantity}</p>
      </div>
    </nav>
  );
};

export default Navbar;
