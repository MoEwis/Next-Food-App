"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FormInput from "./FormInput";
import { Button } from "@/components/ui/button";
import { formatterCurrency } from "@/lib/formatters";
import { getTotalAmount } from "@/lib/getCartQuantity";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { checkoutSchema } from "@/schema/schema";

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    // console.log("✅ Checkout Data:", data);
  };
  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);
  return (
    cart.length > 0 && (
      <div className="grid gap-6 bg-gray-100 rounded-md p-4">
        <h2 className="text-2xl text-black font-semibold">Checkout</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          {/* Phone Field */}
          <FormInput
            id="phone"
            label="Phone"
            placeholder="Enter your phone number"
            register={register("phone")}
            error={errors.phone}
          />

          {/* Address Field */}
          <div className="grid gap-1">
            <Label htmlFor="address" className="text-accent">
              Street Address
            </Label>
            <Textarea
              id="address"
              placeholder="Enter your address"
              {...register("address")}
              className="border border-gray-300 rounded-md p-2"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Zip Field */}
          <FormInput
            id="zip"
            label="Zip Code"
            placeholder="Enter your zip code"
            register={register("zip")}
            error={errors.zip}
          />

          {/* City Field */}
          <FormInput
            id="city"
            label="City"
            placeholder="Enter your city"
            register={register("city")}
            error={errors.city}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-accent text-white py-2 px-4 rounded-md mt-4"
          >
            Pay {formatterCurrency(totalAmount)}
          </Button>
        </form>
      </div>
    )
  );
};

export default CheckoutForm;
