import MenuItem from "./menuItem/MenuItem";

const Meun = ({ items }: { items: any }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Meun;
