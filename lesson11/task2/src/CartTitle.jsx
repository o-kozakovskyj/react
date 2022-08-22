import React from 'react';

const CartTitle = ({ name, count }) => (
  <div className="cart-title">{`${name}, you added ${count} items`}</div>
);

export default CartTitle;
