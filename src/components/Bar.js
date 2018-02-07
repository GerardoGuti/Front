import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Bar extends Component {
  render() {
    return (
      <header className="bar">
        <div className="bar-button"onClick={()=><Link to="/welcome"/>}>Home</div>
        <div className="bar-button">News</div>
        <div className="cart-button"><img className="cart"  src='https://www.inmotionhosting.com/support/images/stories/icons/ecommerce/empty-cart-light.png' alt=""/></div>
      </header>
    );
  }
}


export default Bar;
