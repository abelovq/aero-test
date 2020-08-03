import React from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from '../Rating';
import { ButtonBuy } from '../ButtonBuy';
import { Favourite } from '../Favourite';
import { Libra } from '../Libra';

import { Product, toggleFavSucess } from '../../store/actions';
import image from '../../assets/image.jpg';

import './Card.scss';
import { Check } from '../Check';

const apiUrl =
  'https://my-json-server.typicode.com/aero-frontend/test-task/FAVORITE_SUCCESS';

const Card: React.FC<Product> = ({
  code,
  inFav,
  title,
  params,
  id,
  fetchItems,
}) => {
  const dispatch = useDispatch();
  const handleToggleFav = async (id: number) => {
    const params: any = {
      id,
    };
    await fetch(apiUrl, params);
    // await fetchItems();
    dispatch(toggleFavSucess(id));
  };
  return (
    <div className="card-item">
      <div className="card-item__header">
        <Rating />
        <div className="card-item__number">Арт. {code}</div>
      </div>
      <div className="card-item__img">
        <img src={image} alt="canon" />
      </div>
      <div className="card-item__info">
        <Check />
        <span className="card-item__text--color">В наличии</span>
      </div>
      <div className="card-item__title">{title}</div>
      <div className="card-item__about">
        <ul className="about-list">
          {params.map((param, i) => (
            <li key={i} className="about-list__item">
              <span className="about-list__name">{param.name}</span>
              <span className="about-list__value">{param.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-item__price">
        49 999 <span>руб.</span>
      </div>
      <div className="card-item__bonus">+490 бонусов</div>
      <div className="card-item__footer">
        <ButtonBuy />
        <div className="card-item__wrapper">
          <Favourite inFav={inFav} handleToggleFav={handleToggleFav} id={id} />
          <Libra />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
