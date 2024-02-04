import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../StylesComponents/Button";
import { useCartContext } from "../context/cart_context";

const AddToCard = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    return amount > 1 ? setAmount((amount) => amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    return amount < stock
      ? setAmount((amount) => amount + 1)
      : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors :{" "}
          {colors.map((currCol, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: currCol }}
                className={color === currCol ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(currCol)}
              >
                {color === currCol ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* Add to cart */}

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
      {/* <a href="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </a> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
    margin-bottom: 2px;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCard;
