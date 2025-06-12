import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatterCurrency } from "@/lib/formatters";

import React from "react";

const Radio = ({ sizes, item }: { item: any; sizes: any }) => {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border-2 border-gray-100 rounded-md p-3 "
        >
          <RadioGroupItem
            value="default"
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
