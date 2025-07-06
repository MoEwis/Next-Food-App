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
    // Handle submit
  };

  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);

  return (
    cart.length > 0 && (
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl ">
        <h2 className="text-3xl font-bold text-primary mb-8">Checkout</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-lg">
          {/* Phone Field */}
          <FormInput
            id="phone"
            label="Phone"
            placeholder="Enter your phone number"
            register={register("phone")}
            error={errors.phone}
          />

          {/* Address Field */}
          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-base text-muted-foreground"
            >
              Street Address
            </Label>
            <Textarea
              id="address"
              placeholder="Enter your address"
              {...register("address")}
              className="min-h-[100px] text-lg"
            />
            {errors.address && (
              <p className="text-red-500 text-base">{errors.address.message}</p>
            )}
          </div>

          {/* Zip Code */}
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
            className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-4 mt-2 rounded-md font-semibold"
          >
            Pay {formatterCurrency(totalAmount)}
          </Button>
        </form>
      </div>
    )
  );
};

export default CheckoutForm;
