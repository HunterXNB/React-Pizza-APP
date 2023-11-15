import React from 'react';
import Button from '../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId }) {
  const quantity = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === pizzaId).quantity,
  );
  const isDisabled = quantity === 1;
  const dispatch = useDispatch();
  function incrementHandler() {
    dispatch(cartActions.increaseItemQuantity(pizzaId));
  }
  function decrementHandler() {
    dispatch(cartActions.decreaseItemQuantity(pizzaId));
  }
  return (
    <div className=" flex items-center gap-1 md:gap-3">
      <Button disabled={isDisabled} onClick={decrementHandler} type="round">
        -
      </Button>
      <p>{quantity}</p>
      <Button onClick={incrementHandler} type="round">
        +
      </Button>
    </div>
  );
}
