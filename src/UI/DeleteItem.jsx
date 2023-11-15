import React from 'react';
import Button from './Button';
import { cartActions } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function deleteHandler() {
    dispatch(cartActions.deleteItem(pizzaId));
  }
  return (
    <Button onClick={deleteHandler} type="small">
      Delete
    </Button>
  );
}
