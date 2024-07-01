import Image from "next/image";
import { Banner } from "@/components/banner";
import { Cars } from "@/components/cars";
import { Contact } from "@/components/contact";
import { About } from "@/components/about";
import { Testimonals } from "@/components/testimonals";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 bg-[#F5F5F5]">
      <Banner />
      <Cars />
      <Contact />
      <About />
      <Testimonals />
      <Footer />
    </div>
  );
}
