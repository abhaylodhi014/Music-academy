// import Image from "next/image";

import Featuredsection from "@/components/Featuredsection";
import Featuredwebnars from "@/components/Featuredwebnars";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructor from "@/components/Instructor";
import Movingcard from "@/components/Movingcard";
import Whychooseus from "@/components/Whychooseus";

export default function Home() {
  return (
    <>
    <main className="min-h-secreen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      
        <Herosection/>
        <Featuredsection/>
        <Whychooseus/>
        <Movingcard/>
        <Featuredwebnars/> 
        <Instructor/>
        <Footer/>
      </main>
    
     
    </>
  );
}
