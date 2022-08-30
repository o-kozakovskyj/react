import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="page__content">
    <h1>Home</h1>
    <p>We are here 🗺</p>
    <Link to="/products">To products</Link>
  </div>
);

export default Home;
