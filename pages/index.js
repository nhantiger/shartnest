import Image from "next/image";
import { Inter } from "next/font/google";
import SliderHeader from "@/components/SliderHeader";
import ButtonProductType from "@/components/ButtonProductType";
import SliderProduct from "@/components/SliderProduct";
import SocialUser from "@/components/SocialUser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="z-10">
        <SliderHeader />
        <ButtonProductType />
        <main className="container mx-auto">
          <SliderProduct />
          <SocialUser/>
        </main>
      </div>
    </main>
  );
}
