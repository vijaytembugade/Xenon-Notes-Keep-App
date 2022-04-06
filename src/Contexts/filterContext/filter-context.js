import { createContext, useContext, useReducer } from "react";
import { SORT_BY_DATE, SORT_BY_PRIORITY } from "../../Constants";
import { CLEAR_FILTER } from "../../Constants/filterConstants/filter-constants";
import { filterReducer } from "../../Reducers";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialState = {
    sortByDate: undefined,
    sortByPriority: undefined,
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
