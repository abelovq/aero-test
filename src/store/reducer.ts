import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  TOGGLE_CHECKBOX,
  TOGGLE_FAV_SUCCESS,
  ADD_TO_SELECTED,
  CLEAN_ALL_FILTERS,
} from './constants';
import { Product } from './actions';

export interface CheckBox {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface State {
  checkboxes: CheckBox[];
  isLoading: boolean;
  isLoaded: boolean;
  isError: null;
  items: Product[];
  selectedFilters: string[];
}

const initState: State = {
  checkboxes: [
    { id: 1, title: 'Canon', isChecked: false },
    { id: 2, title: 'Fujifilm', isChecked: false },
    { id: 3, title: 'Nikon', isChecked: false },
    { id: 4, title: 'Panasonic', isChecked: false },
    { id: 5, title: 'Leica', isChecked: false },
    { id: 6, title: 'Olympus', isChecked: false },
    { id: 7, title: 'Pentax', isChecked: false },
    { id: 8, title: 'Sigma', isChecked: false },
    { id: 9, title: 'General Electrics', isChecked: false },
    { id: 10, title: 'Zenit', isChecked: false },
  ],
  isLoading: false,
  isLoaded: false,
  isError: null,
  items: [],
  selectedFilters: [],
};

export default (state: State = initState, action: any) => {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return { ...state, isLoading: true, isError: null, isLoaded: false };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: action.payload,
      };
    case FETCH_ITEMS_FAIL:
      return { ...state, isError: action.payload, isLoaded: false };
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkboxes: state.checkboxes.map((checkbox) => {
          return action.payload === checkbox.id
            ? { ...checkbox, isChecked: !checkbox.isChecked }
            : checkbox;
        }),
      };
    case TOGGLE_FAV_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          return action.payload === item.id
            ? { ...item, inFav: !item.inFav }
            : item;
        }),
      };
    case ADD_TO_SELECTED:
      let selectedArr: string[] = [];
      state.checkboxes.forEach((checkbox) => {
        if (checkbox.id === action.payload && checkbox.isChecked) {
          selectedArr.push(checkbox.title);
          selectedArr = [...state.selectedFilters, ...selectedArr];
        } else if (checkbox.id === action.payload && !checkbox.isChecked) {
          const filteredArr = state.checkboxes.filter(
            (checkbox) => checkbox.isChecked
          );
          selectedArr = filteredArr.map((el) => el.title);
        }
      });
      return { ...state, selectedFilters: selectedArr };
    case CLEAN_ALL_FILTERS:
      return {
        ...state,
        checkboxes: state.checkboxes.map((checkbox) => ({
          ...checkbox,
          isChecked: false,
        })),
        selectedFilters: [],
      };
    default:
      return state;
  }
};
