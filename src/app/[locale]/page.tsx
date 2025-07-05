import Hero from "./_components/Hero";
import About from "@/components/about";
import BestSellers from "./_components/BestSellers ";
import Contact from "@/components/contact";
import getTrans from "@/lib/translation";
import { headers } from "next/headers";
import { Locale } from "@/i18n.config";
export default async function Home() {
  const url = (await headers()).get("x-url");
  const locale = url?.split("/")[3] as Locale;
  const { welcome } = await getTrans(locale);
  return (
    <main className="container">
      <Hero />
      <BestSellers />
      <About />
      <Contact />
    </main>
  );
}
