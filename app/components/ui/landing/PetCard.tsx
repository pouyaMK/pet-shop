"use client";

import Image from "next/image";
import img1 from "@/public/assets/imgs/13.png"
export default function PetCard() {
  return (
    <section
      className="
        cursor-pointer
        overflow-hidden
        rounded-[38px]
        bg-linear-to-r
        from-[#D7F0FF]
        via-[#CDEBFF]
        to-[#BCE4FF]
        p-6
        shadow-xl
      "
    >
      <div className="flex items-start justify-between">

        {/* Left */}
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="glass rounded-full px-4 py-2 text-sm font-medium">
              فعال
            </div>
            <div className="glass rounded-full px-4 py-2 text-sm font-medium">
              ۶۷٪
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-[42px] font-extrabold leading-none text-[#151515]">
              تیلدا
            </h1>
            <p className="mt-2 text-gray-600">
              سگ اسکاتیش فولد
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative h-48 w-400">
          <Image
            src={img1}
            alt="cat"
            fill
            className="object-cover"
          />
          {/* Glow */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-20
              w-20
              -translate-x-1/2
              rounded-full
              bg-white/30
              blur-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}