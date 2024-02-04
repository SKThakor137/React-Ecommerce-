// Web Store - Create a Context
// Delivery Boy - Provider
// Consumer - UseContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// This is hooks understanding code

// const AppProvider = ({ children }) => {
//   return (
//     <AppContext.Provider value={{ myName: "SK Thakor" }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
    // console.log(product);
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
