import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <div className="page__content">
        <h1>Home</h1>
        <Link to="/products">To Products</Link>
        <p>We are here 🗺</p>
        <a href="/">Go home</a>
      </div>
    );
  }
}

export default Home;
