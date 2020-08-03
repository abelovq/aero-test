import React from 'react';
import { useDispatch } from 'react-redux';
import { cleanAllFilters } from '../../../store/actions';

import './Button.scss';

interface Props {
  title: string;
  className?: string;
  cleanAllFilters?: boolean;
  handleFilterApply?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  className,
  handleFilterApply,
  disabled,
}) => {
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
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
