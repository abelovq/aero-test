import React from 'react';
import cart from '../../assets/cart.svg';

import './ButtonBuy.scss';
import Cart from './Cart';

const ButtonBuy: React.FC = () => {
  return (
    <button className="btn-buy">
      <div className="btn-buy__image">
        <Cart />
      </div>
      Купить
    </button>
  );
};

export default React.memo(ButtonBuy);
