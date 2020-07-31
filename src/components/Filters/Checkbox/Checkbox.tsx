import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBox } from '../../../store/reducer';
import { toggleCheckbox, addToSelected } from '../../../store/actions';

import './Checkbox.scss';

const Checkbox: React.FC<CheckBox> = ({ title, id, isChecked }) => {
  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(toggleCheckbox(id));
    dispatch(addToSelected(id));
  };
  let classes = 'checkbox__title';
  if (isChecked) {
    classes += ' checkbox__title--isChecked';
  }
  return (
    <label>
      <input
        type="checkbox"
        className="checkbox"
        data-title={title}
        data-id={id}
        checked={isChecked}
        onChange={onChange}
      />
      <span className={classes}>{title}</span>
    </label>
  );
};

export default Checkbox;
