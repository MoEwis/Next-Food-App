import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Size } from "@/generated/prisma";
import { formatterCurrency } from "@/lib/formatters";
import { productWithRelations } from "@/types/product";

import React from "react";

const Radio = ({
  sizes,
  item,
}: {
  item: productWithRelations;
  sizes: Size[];
}) => {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border-2 border-gray-100 rounded-md p-3 "
        >
          <RadioGroupItem
            value={size.id}
            id={size.id}
            className="border-primary"
          />
          <Label htmlFor={size.id}>
            {size.name} {formatterCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
export default Radio;
