import Image from "next/image";
import Hero from "./components/Hero";
import Vision from "./about/components/Vision";
import ClassSelection from "./about/components/ClassSelection";
import Solution from "./about/components/Solution";
export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Solution />
        <ClassSelection />
        {/* <Vision/> */}
      </main>
    </div>
  );
}
