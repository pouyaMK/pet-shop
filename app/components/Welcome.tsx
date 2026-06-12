

"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import img1 from "@/public/assets/imgs/12.png";
import WelcomeButton from "@/app/components/ui/WelcomeButton"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1e7da] flex items-center justify-center p-6">

      {/* Phone Frame */}
      <div className="w-[360px] h-[760px] bg-[#fafaf8] rounded-[50px] border-[8px] border-white shadow-xl overflow-hidden relative">

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-30 h-8.5 bg-[#151515] rounded-full z-20" />

        {/* Status Bar */}
        <div className="flex justify-between items-center px-7 pt-5 text-sm font-semibold text-[#151515]">
          <span>11:30</span>

          <div className="flex items-center gap-1">
            <Icon icon="mdi:signal" width={16} />
            <Icon icon="mdi:wifi" width={16} />
            <Icon icon="mdi:battery" width={18} />
          </div>
        </div>

        {/* Decorations */}
        <div className="absolute right-12 top-16">
          <div className="w-10 h-2 bg-[#7c5cff] rounded-full rotate-45" />
        </div>

        <div className="absolute right-20 top-20">
          <div className="w-5 h-1 bg-[#ffa726] rounded-full rotate-12" />
        </div>

        {/* Content */}
        <div className="px-7 pt-10 flex flex-col items-center">

          {/* Title */}
          <h1 className="text-center leading-10">
            <span className="block text-[40px] font-light text-[#a77b5a]">
              پت شاپ
            </span>

            <span className="block text-[48px] font-bold text-[#151515]">
              پتیلو
            </span>
          </h1>

          <p className="text-[#a77b5a] text-sm mt-2 text-center">
            بیایید سفر مراقبت از حیوان خانگی‌تان را آغاز کنیم
          </p>

          {/* Cat Section */}
          <div className="relative">

            <div className="absolute -right-2.5 top-14 text-[#7c5cff]">
              <Icon icon="mdi:map-marker" width={30} />
            </div>

  
            <div className="absolute -left-12 top-32 w-20 border-t-2 border-dashed border-[#a77b5a]" />

   
            <Image
              src={img1}
              alt="cat"
              width={250}
              height={250}
              className="object-cover"
            />

            {/* glow */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-65 h-12 bg-[#f1e7da] rounded-full blur-md" />
          </div>

          <WelcomeButton />

        </div>
      </div>
    </main>
  );
}



