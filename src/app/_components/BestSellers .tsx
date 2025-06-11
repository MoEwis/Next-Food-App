import Container from "@/components/container/layout";
import MinHeading from "@/components/main-heading";
import Image from "next/image";

const BestSellers = () => {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: "Burger 1",
      description: "This IS A BURGER",
      bestPrice: 100,
      image: "/assets/Hero1.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Burger 2",
      description: "This IS A BURGER",
      bestPrice: 200,
      image: "/assets/Hero1.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Burger 3",
      description: "This IS A BURGER",
      bestPrice: 300,
      image: "/assets/Hero1.jpg",
    },
  ];
  return (
    <section>
      <Container className="my-16">
        <div className="text-center mb-4">
          <MinHeading subTitle={"ChecOut"} title="Our Best Sellers" />
        </div>
        <ul>
          {bestSellers.map((item) => (
            <li key={item.id}>
              <div className="relative w-48 mx-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="">
                <h4 className="">{item.name}</h4>
                <strong className="">{item.bestPrice}</strong>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BestSellers;
