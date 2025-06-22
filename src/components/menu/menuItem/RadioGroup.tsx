// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Size } from "@/generated/prisma";
// import { formatterCurrency } from "@/lib/formatters";
// import { productWithRelations } from "@/types/product";

// import React from "react";

// const Radio = ({
//   sizes,
//   item,
//   selectedSize,
//   setSelectedSize,
// }: {
//   item: productWithRelations;
//   selectedSize: Size;
//   setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
//   sizes: Size[];
// }) => {
//   return (
//     <RadioGroup defaultValue="comfortable">
//       {sizes.map((size) => (
//         <div
//           key={size.id}
//           className="flex items-center space-x-2 border-2 border-gray-100 rounded-md p-3 "
//         >
//           <RadioGroupItem
//             value={selectedSize.name}
//             checked={selectedSize.name === size.name}
//             onClick={() => setSelectedSize(size)}
//             id={size.id}
//             className="border-primary"
//           />
//           <Label htmlFor={size.id}>
//             {size.name} {formatterCurrency(size.price + item.basePrice)}
//           </Label>
//         </div>
//       ))}
//     </RadioGroup>
//   );
// };
// export default Radio;

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Size } from "@/generated/prisma";
import { formatterCurrency } from "@/lib/formatters";
import { productWithRelations } from "@/types/product";
import React from "react";

const Radio = ({
  sizes,
  item,
  selectedSize,
  setSelectedSize,
}: {
  item: productWithRelations;
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
  sizes: Size[];
}) => {
  return (
    <RadioGroup
      value={selectedSize?.id}
      onValueChange={(value) => {
        const foundSize = sizes.find((s) => s.id === value);
        if (foundSize) setSelectedSize(foundSize);
      }}
    >
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border-2 border-gray-100 rounded-md p-3"
        >
          <RadioGroupItem
            value={size.id}
            id={size.id}
            className="border-primary"
          />
          <Label htmlFor={size.id}>
            {size.name} — {formatterCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default Radio;
