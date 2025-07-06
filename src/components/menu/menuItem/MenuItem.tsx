import { formatterCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { productWithRelations } from "@/types/product";

const MenuItem = ({ item }: { item: productWithRelations }) => {
  return (
    <li className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col gap-3">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">{item.name}</h4>
        <span className="text-primary font-bold">
          {formatterCurrency(item.basePrice)}
        </span>
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2">
        {item.description}
      </p>

      <AddToCartButton item={item} />
    </li>
  );
};

export default MenuItem;
