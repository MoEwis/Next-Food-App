import { Button } from "@/components/ui/button";
import { Extra, Size } from "@/generated/prisma";
import {
  addCartItem,
  removeCartItem,
  removeItemFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { productWithRelations } from "@/types/product";

const ChooseQuantity = ({
  quantity,
  item,
  selectedSize,
  selectedExtras,
}: {
  quantity: number;
  item: productWithRelations;
  selectedSize: Size;
  selectedExtras: Extra[];
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" flex items-center flex-col gap-2 mt-4 w-full   ">
      <div className=" flex items-center gap-2 ">
        <Button
          variant="outline"
          onClick={() =>
            dispatch(
              removeCartItem({
                id: item.id,
              })
            )
          }
        >
          -
        </Button>
        <div>
          <span className=" text-sm  text-black ">{quantity} in cart </span>
        </div>
        <Button
          variant="outline"
          onClick={() =>
            dispatch(
              addCartItem({
                basePrice: item.basePrice,
                id: item.id,
                name: item.name,
                size: selectedSize,
                extras: selectedExtras,
                image: item.image,
              })
            )
          }
        >
          +
        </Button>
      </div>
      <Button
        size="sm"
        onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
      >
        Remove
      </Button>
    </div>
  );
};

export default ChooseQuantity;
