import Container from "@/components/container/layout";
import MinHeading from "@/components/main-heading";
import MenuItem from "@/components/menu/menuItem/MenuItem";
import { db } from "@/lib/prisma";

const BestSellers = async () => {
  const bestSellers = await db.product.findMany();
  console.log("bestSellers", bestSellers);
  return (
    <section>
      <Container className="my-16">
        <div className="text-center mb-4">
          <MinHeading subTitle="CheckOut" title="Our Best Sellers" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BestSellers;
