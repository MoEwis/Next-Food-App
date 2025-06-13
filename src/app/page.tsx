import { db } from "@/lib/prisma";
import BestSellers from "./_components/BestSellers ";
import Hero from "./_components/Hero";

export default async function Home() {
  const sizes = await db.size.createMany({
    data: [
      { name: "SMALL", price: 1.99, productId: "mocnsacbjsjbka" },
      { name: "MEDIUN", price: 2.99, productId: "mocnsacbjsjbka" },
      { name: "LARGE", price: 3.99, productId: "mocnsacbjsjbka" },
    ],
  });
  console.log(sizes);
  return (
    <main className="container">
      <Hero />
      <BestSellers />
    </main>
  );
}
