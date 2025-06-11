import Container from "@/components/container/layout";

const statsData = [
  { number: "1000+", text: "Happy Customers" },
  { number: "50+", text: "Unique Pizza Types" },
  { number: "24/7", text: "Delivery Service" },
  { number: "15+", text: "Years Experience" },
];

const Numbers = () => {
  return (
    <section className="relative md:mt-16 z-10">
      <Container className="flex justify-center items-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-amber-100">
            {statsData.map((item) => (
              <div
                key={item.number}
                className="flex flex-col items-center justify-center pt-6 md:pt-0 first:pt-0 md:first:pt-0"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {item.number}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-base font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
