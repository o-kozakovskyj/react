import React, { Component } from 'react';

class ProductsList extends Component {
  render() {
    const list = this.props.productsList.map(({ id, name, price }) => (
      <li className="products__list-item" key={id}>
        <span className="products__item-name">{name}</span>
        <span className="products__item-price">{price}</span>
      </li>
    ));
    const total = this.props.productsList.reduce((acc, product) => acc + product.price, 0);

    return (
      <div className="products">
        <ul className="products__list">{list}</ul>
        <div className="products__total">{`Total: $${total}`}</div>
      </div>
    );
  }
}

export default ProductsList;
