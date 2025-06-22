import Container from "@/components/container/layout";
import CartItems from "./_components/CartItems";
import CheckoutForm from "./_components/CheckoutForm";

const Cart = () => {
  return (
    <main>
      <Container>
        <section className="section-gap">
          <h1 className="text-primary text-center font-bold text-4xl italic mb-10">
            Cart
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CartItems />
            <CheckoutForm />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Cart;
