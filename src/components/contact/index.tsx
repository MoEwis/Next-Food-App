import { Routes } from "@/constants/enums";
import Container from "../container/layout";
import MinHeading from "../main-heading";
import Link from "next/link";
import { ContactInfo } from "./ContactInfo";
import { ArrowRight, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Container className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply blur-3xl"></div>
      </div>

      <section className="relative section-gap" id={Routes.CONTACT}>
        <div className="max-w-6xl mx-auto">
          <MinHeading
            subTitle="Don't Hesitate"
            title="Contact Us"
            className="text-center animate-fade-in"
          />

          {/* Contact Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-delayed">
            {ContactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                         border border-gray-100 hover:border-primary/20"
              >
                {/* Card Content */}
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
                                group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <div className="text-primary">{info.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </h3>

                  {/* Content */}
                  {info.link ? (
                    <Link
                      href={info.link}
                      className="text-primary font-medium hover:text-primary-dark 
                               transition-colors duration-300 flex items-center gap-2"
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.content}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <p className="text-primary font-medium">{info.content}</p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div
                  className="absolute inset-0 rounded-xl border-2 border-primary scale-105 opacity-0
                              group-hover:opacity-10 transition-all duration-300"
                ></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center animate-fade-in-delayed animation-delay-300">
            <div className="inline-flex flex-col items-center space-y-4 bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Need Immediate Assistance?
              </h3>
              <Link
                href="tel:+11234560090"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full
                         hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl
                         transform hover:-translate-y-0.5 "
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Link>
              <p className="text-sm text-gray-600">
                Our support team is ready to help you 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
