import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../store/reducer';
import { cleanAllFilters } from '../../../store/actions';

import './Button.scss';

interface Props {
  title: string;
  className?: string;
  cleanAllFilters?: boolean;
  handleFilterApply?: () => void;
}

const Button: React.FC<Props> = ({ title, className, handleFilterApply }) => {
  let classes = '';
  if (className) {
    classes += className;
  }
  const dispatch = useDispatch();
  const handleCleanAllFilters = () => {
    if (cleanAllFilters) {
      dispatch(cleanAllFilters());
    }
  };
  return (
    <button
      onClick={handleFilterApply ? handleFilterApply : handleCleanAllFilters}
      className={classes}
    >
      {title}
    </button>
  );
};

export default Button;
