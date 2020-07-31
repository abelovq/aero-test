import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  TOGGLE_FAV_SUCCESS,
  TOGGLE_FAV_FAIL,
  TOGGLE_CHECKBOX,
  ADD_TO_SELECTED,
  CLEAN_ALL_FILTERS,
} from './constants';

interface Param {
  name: string;
  value: string;
}

export interface Product {
  availability: boolean;
  code: number;
  id: number;
  imgUrl: string;
  inComparison: boolean;
  inFav: boolean;
  link: string;
  title: string;
  params: Param[];
  fetchItems: () => void;
}

export const fetchItemsStart = () => {
  return {
    type: FETCH_ITEMS_START,
  };
};

export const fetchItemsSuccess = (items: Product[]) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

export const fetchItemsFail = (payload: string | null) => {
  return {
    type: FETCH_ITEMS_FAIL,
    payload,
  };
};

export const toggleFavSucess = (payload: number) => {
  return {
    type: TOGGLE_FAV_SUCCESS,
    payload,
  };
};

export const toggleFavFail = (payload: number) => {
  return {
    type: TOGGLE_FAV_FAIL,
    payload,
  };
};

export const toggleCheckbox = (payload: number) => {
  return {
    type: TOGGLE_CHECKBOX,
    payload,
  };
};

export const addToSelected = (payload: number) => {
  return {
    type: ADD_TO_SELECTED,
    payload,
  };
};

export const cleanAllFilters = () => {
  return {
    type: CLEAN_ALL_FILTERS,
  };
};
