import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchItemsStart,
  fetchItemsSuccess,
  fetchItemsFail,
} from './store/actions';
import { Card } from './components/Card';
import { Button } from './components/Filters/Button';
import { State } from './store/reducer';

import './App.scss';
import Checkbox from './components/Filters/Checkbox/Checkbox';

const apiUrl =
  'https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS';

const apiUrlForFilters =
  'https://my-json-server.typicode.com/aero-frontend/test-task/FILTER_SUCCESS';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isFilteredItemsShown, setIsFilteredItemsShown] = useState(false);
  const items = useSelector((state: State) => state.items);
  const isLoaded = useSelector((state: State) => state.isLoaded);
  const checkboxes = useSelector((state: State) => state.checkboxes);
  const selectedFiltes = useSelector((state: State) => state.selectedFilters);

  const handleFilterApply = () => {
    setIsFilteredItemsShown(!isFilteredItemsShown);
  };

  const fetchItems = async (): Promise<any> => {
    dispatch(fetchItemsStart());

    try {
      const resp = await fetch(apiUrl);
      const data = await resp.json();
      dispatch(fetchItemsSuccess(data.data.products));
    } catch (err) {
      fetchItemsFail(err);
    }
  };

  React.useEffect(() => {
    fetchItems();
  }, []);

  React.useEffect(() => {
    console.log('useEffect2');
    const fetchFilteredItems = async () => {
      const params: any = {
        filters: selectedFiltes,
      };
      try {
        const resp = await fetch(apiUrlForFilters, params);
        const data = await resp.json();
        dispatch(fetchItemsSuccess(data.data.products));
      } catch (err) {
        fetchItemsFail(err);
      }
    };
    if (isFilteredItemsShown) {
      fetchFilteredItems();
    }
  }, [isFilteredItemsShown]);
  return (
    <div className="container">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <ul className="items-list">
          {items.map((item) => (
            <li key={item.id}>
              <Card {...item} fetchItems={fetchItems} />
            </li>
          ))}
          <div className="aside-block">
            <Button
              title="Показать результаты"
              className="btn btn--color-blue"
              handleFilterApply={handleFilterApply}
            />
            <Button title="Очистить фильтр" className="btn" cleanAllFilters />
            <p className="aside-block__checkboxes-caption">Производитель</p>
            <div className="checkboxes-block">
              <ul className="checkboxes-block__left-col">
                {checkboxes.slice(0, 5).map((checkbox, i) => (
                  <li className="checkboxes-block__item" key={checkbox.id}>
                    <Checkbox {...checkbox} />
                  </li>
                ))}
              </ul>
              <ul className="checkboxes-block__right-col">
                {checkboxes.slice(5, 10).map((checkbox, i) => (
                  <li className="checkboxes-block__item" key={checkbox.id}>
                    <Checkbox {...checkbox} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default App;
