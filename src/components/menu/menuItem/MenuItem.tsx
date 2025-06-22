import { formatterCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { productWithRelations } from "@/types/product";

const MenuItem = ({ item }: { item: productWithRelations }) => {
  return (
    <li className="p-4 border-4 ">
      <div className="relative w-48 h-48 mx-auto">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-xl my-3">{item.name}</h4>
        <strong className="text-accent">
          {formatterCurrency(item.basePrice)}
        </strong>
      </div>
      <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
      <AddToCartButton item={item} />
    </li>
  );
};

export default MenuItem;
