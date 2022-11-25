import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer"; //filterreducer as reducer

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //for grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  //listview
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  //sorting
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT-VALUE", payload: userValue });
  };
  // to sort products

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value]);
  //to load all products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
