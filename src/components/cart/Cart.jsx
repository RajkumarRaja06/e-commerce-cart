import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';
import React from 'react';

import data from '../../constants';

const Cart = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 767;

  React.useEffect(() => {
    const handleViewSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleViewSize);
  }, []);

  if (data.length !== 0) {
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  } else {
    return (
      <div>
        <h1>Your Cart Is Empty</h1>
      </div>
    );
  }
};

export default Cart;
