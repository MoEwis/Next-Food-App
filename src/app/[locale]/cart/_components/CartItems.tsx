"use client";
import { Button } from "@/components/ui/button";
import { formatterCurrency } from "@/lib/formatters";
import { deliveryFee, getSubTotal } from "@/lib/getCartQuantity";
import {
  removeCartItem,
  selectCartItems,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const CartItems = () => {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const subTotal = getSubTotal(cart);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <section>
      {cart && cart.length > 0 ? (
        <>
          <ul className="space-y-6">
            {cart.map((item, index) => (
              <li
                key={`${item.id}-${item.size?.id}-${index}`}
                className="p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                  {/* Product Info */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden border">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg text-primary">
                        {item.name}
                      </h4>

                      {item.size && (
                        <p className="text-sm text-muted-foreground">
                          Size:{" "}
                          <span className="font-medium">{item.size.name}</span>
                        </p>
                      )}

                      {item.extras && item.extras.length > 0 && (
                        <div className="text-sm text-muted-foreground">
                          <span>Extras:</span>
                          <ul className="list-disc ml-5">
                            {item.extras.map((extra) => (
                              <li key={extra.id}>
                                {extra.name} — {formatterCurrency(extra.price)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <span className="inline-block text-sm font-medium mt-1">
                        Quantity: x{item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div className="flex flex-col justify-between items-end gap-4">
                    <strong className="text-lg text-black">
                      {formatterCurrency(item.basePrice)}
                    </strong>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => dispatch(removeCartItem({ id: item.id }))}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Summary */}
          <div className="mt-8 p-4 bg-gray-50 rounded-xl border w-full max-w-md ml-auto space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span className="font-medium text-black">
                {formatterCurrency(subTotal)}
              </span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Delivery</span>
              <span className="font-medium text-black">
                {formatterCurrency(deliveryFee)}
              </span>
            </div>
            <div className="flex justify-between text-base font-semibold text-primary pt-2 border-t">
              <span>Total</span>
              <span>{formatterCurrency(subTotal + deliveryFee)}</span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-muted-foreground py-8 text-lg">
          No items in cart
        </p>
      )}
    </section>
  );
};

export default CartItems;
