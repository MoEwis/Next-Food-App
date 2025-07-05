import Container from "@/components/container/layout";
import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Numbers from "./Numbers";
const Hero = () => {
  return (
    <section className="section-gap ">
      <Container className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-primary text-8xl">Slice</span> Into
              Happiness
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium
            </p>
            <div className="flex items-center gap-6 pt-4 md:flex-wrap md: ">
              <Link
                href={`/${Routes.MENU}`}
                className={`${buttonVariants({
                  size: "lg",
                })} rounded-full px-8 py-3 text-base md:text-lg font-semibold uppercase hover:scale-105 transition-transform`}
              >
                Order Now
                <ArrowRightCircle className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${Routes.ABOUT}`}
                className="flex items-center gap-2 text-base md:text-lg font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
              >
                Learn More
                <ArrowRightCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[4/3] lg:w-[480px]  max-w-xl mx-auto md:mx-0">
            <Image
              src="/assets/Hero1.jpg"
              alt="Hero"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
      <div className="lg:mt-16 md:mt-8">
        <Numbers />
      </div>
    </section>
  );
};

export default Hero;
