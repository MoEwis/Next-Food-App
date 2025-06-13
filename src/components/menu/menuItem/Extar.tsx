import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Extra, Product } from "@/generated/prisma";
const Extars = ({ extar }: { extar: Extra[] }) => {
  return (
    <div>
      {extar.map((extar) => (
        <div
          key={extar.id}
          className="flex items-center space-x-2 border-gray-100 rounded-md p-4"
        >
          <div className="flex items-center gap-3">
            <Checkbox id={extar.id} className="border-primary" />
            <Label
              htmlFor={extar.id}
              className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {extar.name}
            </Label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Extars;
