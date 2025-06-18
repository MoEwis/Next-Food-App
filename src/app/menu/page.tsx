import Container from "@/components/container/layout";
import { db } from "@/lib/prisma";
import { getProductsByCategory } from "@/server/db/products";

const MenuPage = async () => {
  //   await db.category.createMany({
  //     data: [
  //       { name: "food 1", order: 1 },
  //       { name: "food 2", order: 2 },
  //     ],
  //   });
  const categories: { name: string }[] = await getProductsByCategory();
  //   console.log(categories);
  return (
    <main>
      <Container>
        <div></div>
        <div>{JSON.stringify(categories.map((c) => c.name))}</div>
      </Container>
    </main>
  );
};

export default MenuPage;
