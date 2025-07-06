import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // ✅ Category
  const pizzaCategory = await prisma.category.upsert({
    where: { id: "cat1" },
    update: {},
    create: {
      id: "cat1",
      name: "Pizza",
      order: 1,
    },
  });

  // ✅ Products
  await prisma.product.createMany({
    data: [
      {
        id: "pizza1",
        name: "Margherita Pizza",
        description:
          "Classic pizza with tomato sauce, mozzarella cheese, and basil.",
        image:
          "https://www.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_26593854.htm#fromView=search&page=1&position=5&uuid=79c4096c-a049-4b34-9d5c-d4d8e8ce42e7&query=pizza",
        order: 1,
        basePrice: 50,
        categoryId: pizzaCategory.id,
      },
      {
        id: "pizza2",
        name: "Pepperoni Pizza",
        description:
          "Spicy pepperoni slices on top of mozzarella and tomato base.",
        image:
          "https://www.freepik.com/free-psd/top-view-delicious-pizza_370860348.htm#from_element=cross_selling__psd",
        order: 2,
        basePrice: 65,
        categoryId: pizzaCategory.id,
      },
      {
        id: "pizza3",
        name: "BBQ Chicken Pizza",
        description: "Tender chicken, smoky BBQ sauce, and red onions.",
        image:
          "https://www.freepik.com/free-psd/top-view-pizza-isolated_158235584.htm#from_element=cross_selling__psd",
        order: 3,
        basePrice: 70,
        categoryId: pizzaCategory.id,
      },
      {
        id: "pizza4",
        name: "Veggie Supreme Pizza",
        description: "Loaded with tomatoes, onions, peppers, and olives.",
        image:
          "https://www.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_406472489.htm#from_element=cross_selling__psd",
        order: 4,
        basePrice: 60,
        categoryId: pizzaCategory.id,
      },
    ],
  });

  // ✅ Sizes
  await prisma.size.createMany({
    data: [
      // pizza1
      { id: "size1", name: "SMALL", price: 0, productId: "pizza1" },
      { id: "size2", name: "MEDIUN", price: 10, productId: "pizza1" },
      { id: "size3", name: "LARGE", price: 20, productId: "pizza1" },
      // pizza2
      { id: "size4", name: "SMALL", price: 0, productId: "pizza2" },
      { id: "size5", name: "MEDIUN", price: 10, productId: "pizza2" },
      { id: "size6", name: "LARGE", price: 20, productId: "pizza2" },
      // pizza3
      { id: "size7", name: "SMALL", price: 0, productId: "pizza3" },
      { id: "size8", name: "MEDIUN", price: 10, productId: "pizza3" },
      { id: "size9", name: "LARGE", price: 20, productId: "pizza3" },
      // pizza4
      { id: "size10", name: "SMALL", price: 0, productId: "pizza4" },
      { id: "size11", name: "MEDIUN", price: 10, productId: "pizza4" },
      { id: "size12", name: "LARGE", price: 20, productId: "pizza4" },
    ],
  });

  // ✅ Extras
  await prisma.extra.createMany({
    data: [
      { id: "extra1", name: "CHEESE", price: 5, productId: "pizza1" },
      { id: "extra2", name: "ONION", price: 3, productId: "pizza1" },
      { id: "extra3", name: "BACON", price: 7, productId: "pizza2" },
      { id: "extra4", name: "CHEESE", price: 5, productId: "pizza2" },
      { id: "extra5", name: "TOMATO", price: 4, productId: "pizza3" },
      { id: "extra6", name: "PEPPER", price: 4, productId: "pizza3" },
      { id: "extra7", name: "CHEESE", price: 5, productId: "pizza4" },
      { id: "extra8", name: "ONION", price: 3, productId: "pizza4" },
    ],
  });

  // ✅ Users
  await prisma.user.createMany({
    data: [
      {
        id: "user1",
        name: "John Doe",
        email: "john@example.com",
        password: "hashed-password-john",
        image: "/images/users/john.png",
        phone: "+201234567890",
        streetAddress: "123 Main St",
        postalCode: "12345",
        city: "Cairo",
        country: "Egypt",
      },
      {
        id: "user2",
        name: "Jane Smith",
        email: "jane@example.com",
        password: "hashed-password-jane",
        image: "/images/users/jane.png",
        phone: "+201112223334",
        streetAddress: "456 Elm St",
        postalCode: "67890",
        city: "Alexandria",
        country: "Egypt",
      },
    ],
  });

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
