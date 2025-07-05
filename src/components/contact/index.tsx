import { Routes } from "@/constants/enums";
import Container from "../container/layout";
import MinHeading from "../main-heading";
import Link from "next/link";
import Image from "next/image";

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
        <Image
          src="/images/about-img.png"
          alt="contact"
          width={500}
          height={400}
        />
      </section>
    </Container>
  );
};

export default Contact;
