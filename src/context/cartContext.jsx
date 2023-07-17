import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../utils/reducer/cartReducer';
import data from '../constants';

const CartContext = createContext();

const initialData = {
  cart: data,
  totalQuantity: 0,
  totalPrice: 0,
  subTotal: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);
  useEffect(() => {
    dispatch({ type: 'UPDATED_TOTALS' });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: id } });
  };

  const increasedItem = (id) => {
    dispatch({ type: 'INCREASED_ITEM', payload: { id: id } });
  };

  const decreasedItem = (id) => {
    dispatch({ type: 'DECREASED_ITEM', payload: { id: id } });
  };

  return (
    <CartContext.Provider
      value={{ ...state, clearCart, removeItem, increasedItem, decreasedItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, CartConsumer };
