import { Link } from 'react-router-dom';
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  function clearHandler() {
    dispatch(cartActions.clearCart());
  }
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className=" px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className=" mt-7 text-xl font-semibold">
        Your cart, {username.toUpperCase()}
      </h2>
      <ul className=" mt-3 divide-y divide-stone-200 border-b">
        {cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.pizzaId} />
        ))}
      </ul>
      <div className=" mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={clearHandler} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
