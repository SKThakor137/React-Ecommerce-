const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      let priceArr = action.payload.map((currEle) => currEle.price);
      // console.log(priceArr);

      let maxPrice = Math.max(...priceArr);
      // console.log(maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    }

    case "SET_GRID_VIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }
    case "SET_LIST_VIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }
    case "GET_SORT_VALUE": {
      return {
        ...state,
        sorting_value: action.payload,
      };
    }
    case "SORTING_PRODUCT": {
      let newSortData;
      // let tempSortData = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortData = [...filter_products];

      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortData.sort(sortingProduct);
      return {
        ...state,
        filter_products: newSortData,
      };
    }
    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }
    case "FILTER_PRODUCT": {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.category === category;
        });
      }
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.company === company;
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.colors.includes(color);
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.price == price;
        });
      } else {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }
    case "CLEARS_FILTERS": {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPricePrice,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default filterReducer;
