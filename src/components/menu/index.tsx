import { productWithRelations } from "@/types/product";
import MenuItem from "./menuItem/MenuItem";

const Meun = ({ items }: { items: productWithRelations[] }) => {
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <p className="text-center text-black">No Products Found</p>
  );
};

export default Meun;
