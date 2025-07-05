// import { Routes } from "@/constants/enums";
// import Container from "../container/layout";
// import MinHeading from "../main-heading";

// const About = () => {
//   return (
//     <Container className="text-center">
//       <section className="section-gap " id={Routes.ABOUT}>
//         <MinHeading subTitle="Our Story" title="about us" />
//         <div className="text-black max-w-md mx-auto mt-4 flex flex-col gap-4">
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             velit ex consequatur. Optio perspiciatis, adipisci quisquam libero
//             quaerat laborum voluptatibus facere magni beatae ut eligendi
//             consequatur rerum deleniti. In, totam?
//           </p>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             velit ex consequatur. Optio perspiciatis, adipisci quisquam libero
//             quaerat laborum voluptatibus facere magni beatae ut eligendi
//             consequatur rerum deleniti. In, totam?
//           </p>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             velit ex consequatur. Optio perspiciatis, adipisci quisquam libero
//             quaerat laborum voluptatibus facere magni beatae ut eligendi
//             consequatur rerum deleniti. In, totam?
//           </p>
//         </div>
//       </section>
//     </Container>
//   );
// };

// export default About;

import { Routes } from "@/constants/enums";
import Container from "../container/layout";
import MinHeading from "../main-heading";
import Image from "next/image";

const About = () => {
  return (
    <Container className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <section className="section-gap relative" id={Routes.ABOUT}>
        <div className="max-w-4xl mx-auto">
          <MinHeading
            subTitle="Our Story"
            title="about us"
            className="animate-fade-in"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-float">
              <Image
                src="/assets/about-img.png"
                alt="About Us"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Text Content */}
            <div className="text-left space-y-6 animate-fade-in-delayed">
              <p className="text-lg leading-relaxed text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt velit ex consequatur. Optio perspiciatis, adipisci
                quisquam libero quaerat laborum voluptatibus facere magni
                beatae.
              </p>

              {/* Feature Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="text-gray-700">
                    Optio perspiciatis, adipisci quisquam libero quaerat laborum
                    voluptatibus.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="text-gray-700">
                    Facere magni beatae ut eligendi consequatur rerum deleniti.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-primary">12+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Menu Items</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
