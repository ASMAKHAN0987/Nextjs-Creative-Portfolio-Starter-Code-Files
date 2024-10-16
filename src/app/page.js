"use client";
import Image from "next/image";
import bg from "../../public/background/img3.jpg";
import ComputersCanvas from "./components/models/Computer";
import { TypeAnimation } from "react-type-animation";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-img"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Content Wrapper */}
      <div className="w-full h-screen flex">
        {/* Left Section - Title */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <Title />
        </div>

        {/* Right Section - 3D Model */}
        <div className="w-1/2 flex items-center justify-center">
          <ComputersCanvas />
        </div>
      </div>
    </main>
  );
}
