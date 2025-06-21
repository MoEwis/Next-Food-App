import Container from "@/components/container/layout";
import Meun from "@/components/menu";
import { getProductsByCategory } from "@/server/db/products";

const MenuPage = async () => {
  const categories = await getProductsByCategory();
  return (
    <main>
      <Container>
        {categories.map((category) => (
          <section key={category.id} className="section-gap">
            <div className="text-center">
              <h1 className="text-primary font-bold text-4xl italic mb-6">
                {category.name}
              </h1>
            </div>
            <Meun items={category.products} />
          </section>
        ))}
      </Container>
    </main>
  );
};

export default MenuPage;
