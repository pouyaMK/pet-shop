"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import img from "@/public/assets/imgs/icon-pet.jpeg"
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative border border-slate-200 h-13 w-13 rounded-full overflow-hidden">
          <Image
            src={img}
            alt="avatar"
            width={90}
            height={90}
            
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            خوش برگشتی 👋
          </p>

          <h2 className="text-xl font-bold text-[#151515]">
            پویا
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="glass flex cursor-pointer h-12 w-12 items-center justify-center rounded-full">
          <Icon
            icon="solar:gift-outline"
            width={22}
            className="text-[#151515]"
          />
        </button>

        <button className="glass cursor-pointer relative flex h-12 w-12 items-center justify-center rounded-full">
          <Icon
            icon="solar:bell-outline"
            width={22}
            className="text-[#151515]"
          />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
        </button>
      </div>
    </header>
  );
}