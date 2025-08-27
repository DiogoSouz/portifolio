"use client"

import { CldImage } from "next-cloudinary";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(95vh-30px)] flex items-end overflow-hidden">
      {/* Background Image/Effect */}
      <div className="absolute inset-0 z-0">
        <CldImage
              width="1920"
              height="1080"
              src={"placeholder_yaiki2"}
              sizes="100vw"
              alt={"Hero"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
      </div>

      <div className="relative z-10 ml-auto mr-8 sm:mr-12 lg:mr-16 max-w-2xl mb-8 text-black-sans">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-mono tracking-tight text-right">
          <span className="block">Forma.</span>
          <span className="block">Função.</span>
          <span className="block">Identidade.</span>
        </h1>
      </div>
    </section>
  )
}
