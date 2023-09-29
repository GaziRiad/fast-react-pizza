import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartQuantity } from "./cartSlice";
import { getUser } from "../user/userSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUser);
  const dispatch = useDispatch();

  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mb-4 mt-8 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mb-6 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
        <button></button>
      </div>
    </div>
  );
}

export default Cart;
