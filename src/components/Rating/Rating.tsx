import React from 'react';
import { Star } from '../Star';

import './Rating.scss';

const Rating: React.FC = () => {
  const stars = () =>
    Array(5)
      .fill(null)
      .map((el, i) => <Star key={i} />);
  return <div className="rating-block">{stars()}</div>;
};

export default React.memo(Rating);
