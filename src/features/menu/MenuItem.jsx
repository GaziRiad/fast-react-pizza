import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    dispatch(
      addItem({
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
      }),
    );
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? " opacity-70 grayscale" : ""}`}
      />
      <div className="mt-1 flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm uppercase">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium text-stone-500">Sold out</p>
          )}

          {currentQuantity && <DeleteItem pizzaId={id} />}
          {!soldOut && !currentQuantity && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
