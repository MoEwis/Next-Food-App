import { Routes } from "@/constants/enums";
import Container from "../container/layout";
import MinHeading from "../main-heading";

const About = () => {
  return (
    <Container className="text-center">
      <section className="section-gap " id={Routes.ABOUT}>
        <MinHeading subTitle="Our Story" title="about us" />
        <div className="text-black max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            velit ex consequatur. Optio perspiciatis, adipisci quisquam libero
            quaerat laborum voluptatibus facere magni beatae ut eligendi
            consequatur rerum deleniti. In, totam?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            velit ex consequatur. Optio perspiciatis, adipisci quisquam libero
            quaerat laborum voluptatibus facere magni beatae ut eligendi
            consequatur rerum deleniti. In, totam?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            velit ex consequatur. Optio perspiciatis, adipisci quisquam libero
            quaerat laborum voluptatibus facere magni beatae ut eligendi
            consequatur rerum deleniti. In, totam?
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About;
