import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, SetColor] = useState(colors[0]);

  const [amount, SetAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? SetAmount(amount - 1) : SetAmount(1); //jaba samma amount greater than 1 xa decrease amount by 1 else set 1
  };

  const setIncrease = () => {
    amount < stock ? SetAmount(amount + 1) : SetAmount(stock);
  };

  return (
    <Wrapper>
      {/* -----color selection */}
      <p>
        Colors:
        {colors.map((CurColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: CurColor }}
              className={color === CurColor ? "btnStyle active" : "btnStyle"}
              onClick={() => SetColor(CurColor)}
            >
              {color === CurColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </p>
      {/* -------------colorselection */}
      {/* add to cart----start */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart">
        <Button className="btn">Add to Cart</Button>
      </NavLink>
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

export default AddToCart;
