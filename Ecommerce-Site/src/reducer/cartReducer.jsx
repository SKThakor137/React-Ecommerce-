const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    // tackle the existing product

    let existingProduct = state.cart.find(
      (currItem) => currItem.id === id + color
    );

    // console.log(existingProduct);

    if (existingProduct) {
      let updateProduct = state.cart.map((currItem) => {
        if (currItem.id === id + color) {
          let newAmount = currItem.amount + amount;

          if (newAmount >= currItem.max) {
            newAmount = currItem.max;
          }
          return {
            ...currItem,
            amount: newAmount,
          };
        } else {
          return {
            ...currItem,
          };
        }
      });

      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct = {
        amount,
        color,
        id: id + color,
        name: product.name,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set increment and decrement

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let decAmount = currItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...currItem,
          amount: decAmount,
        };
      } else {
        return currItem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let incAmount = currItem.amount + 1;

        if (incAmount >= currItem.max) {
          incAmount = currItem.max;
        }
        return {
          ...currItem,
          amount: incAmount,
        };
      } else {
        return {
          ...currItem,
        };
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (currItem) => currItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear the cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accumulator, currItem) => {
        let { price, amount } = currItem;

        // accumulator = accumulator + amount;
        // accumulator = accumulator + amount * price;

        accumulator.total_item += +amount;
        accumulator.total_price += +amount * price;

        return accumulator;
      },

      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;
