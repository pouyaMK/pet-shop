

"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import img1 from "@/public/assets/imgs/12.png";
import WelcomeButton from "@/app/components/ui/WelcomeButton"



export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1e7da] flex items-center justify-center p-6">

        {/* Decorations */}
        <div className="absolute right-12 top-16">
          <div className="w-10 h-2 bg-[#7c5cff] rounded-full rotate-45" />
        </div>

        <div className="absolute right-20 top-20">
          <div className="w-5 h-1 bg-[#ffa726] rounded-full rotate-12" />
        </div>

        {/* Content */}
        <div className="px-7 flex flex-col items-center">

          {/* Title */}
          <h1 className="text-center leading-10">
            <span className="block text-[40px] font-light text-[#a77b5a]">
              پت شاپ
            </span>

            <span className="block text-[58px] font-extrabold text-[#151515]">
              پتیلو
            </span>
          </h1>

          <p className="text-[#a77b5a] text-sm mt-4 text-center">
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
              width={350}
              height={350}
              className="object-cover"
            />

            {/* glow */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-65 h-12 bg-[#f1e7da] rounded-full blur-md" />
          </div>

          <WelcomeButton />

        </div>
      
    </main>
  )
}


