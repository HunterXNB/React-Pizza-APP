import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';
import { cartActions } from './cartSlice';
import DeleteItem from '../../UI/DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className=" mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex items-center justify-between sm:gap-6">
        <p className=" text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
