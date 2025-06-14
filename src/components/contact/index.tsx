import { Routes } from "@/constants/enums";
import Container from "../container/layout";
import MinHeading from "../main-heading";
import Link from "next/link";

const Contact = () => {
  return (
    <Container>
      <section className="text-center" id={Routes.CONTACT}>
        <MinHeading subTitle="Don't Hesitate" title="Contact Us" />
        <div className="mt-8">
          <Link
            href="tel:123456789"
            className="text-2xl font-bold text-primary-500 hover:text-primary-700 "
          >
            +1 (123) 456-0090
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
