import { formatCurrency } from '../../utils/helpers';
import Button from '../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../cart/cartSlice';
import DeleteItem from '../../UI/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isInCart = useSelector((state) =>
    state.cart.cart.findIndex((item) => item.pizzaId === id) === -1
      ? false
      : true,
  );
  const dispatch = useDispatch();
  function clickHandler() {
    const newPizza = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(cartActions.addItem(newPizza));
  }
  return (
    <li className="flex gap-4  py-2">
      <img
        src={imageUrl}
        className={`h-24 ${soldOut ? ' opacity-70 grayscale' : ''}`}
        alt={name}
      />
      <div className=" flex grow flex-col  pt-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className=" mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <>
              <p className=" text-sm">{formatCurrency(unitPrice)}</p>
            </>
          ) : (
            <p className=" text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              {<UpdateItemQuantity pizzaId={id} />}
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button onClick={clickHandler} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
