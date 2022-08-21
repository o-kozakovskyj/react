import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        name: 'iPhone 11',
        price: 999,
        id: 'id-1',
      },
      {
        name: 'iPad Pro',
        price: 799,
        id: 'id-2',
      },
    ],
  };

  render() {
    return (
      <div className="column">
        <CartTitle name={this.props.name} count={this.state.cartItems.length} />
        <ProductsList productsList={this.state.cartItems} />
      </div>
    );
  }
}
export default ShoppingCart;
