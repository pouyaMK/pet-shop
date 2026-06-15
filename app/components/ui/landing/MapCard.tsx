"use client";

import { Icon } from "@iconify/react";

export default function MapCard() {
  return (
    <section className="rounded-4xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="glass flex h-12 w-12 items-center justify-center rounded-full">
            <Icon
              icon="solar:map-point-outline"
              width={22}
              className="text-[#151515]"
            />
          </div>

          <div>
            <h3 className="font-bold text-[#151515]">
              موقعیت فعلی
            </h3>

            <p className="text-sm text-gray-500">
              نزدیک ترین پارک به منطقه شما
            </p>
          </div>
        </div>

        <button className="rounded-full bg-[#F1F7DA] px-4 py-2 text-sm font-medium text-[#151515]">
          زنده
        </button>
      </div>

      <div className="relative cursor-pointer mt-5 h-55 overflow-hidden rounded-[28px] bg-[#F1F7DA]">
        {/* خطوط نقشه */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#b9c2a5 1px, transparent 1px),
              linear-gradient(90deg,#b9c2a5 1px, transparent 1px)
            `,
            backgroundSize: "35px 35px",
          }}
        />

        {/* مسیر */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 220"
        >
          <path
            d="M40 160 C100 40, 200 180, 330 80"
            fill="none"
            stroke="#7C5CFF"
            strokeWidth="5"
            strokeDasharray="10 10"
          />
        </svg>

        {/* نقطه شروع */}
        <div className="absolute left-10 bottom-12 h-5 w-5 rounded-full bg-[#FFA726]" />

        {/* مکان فعلی */}
        <div className="absolute right-12 top-12">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#7C5CFF]/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C5CFF] text-white">
              <Icon icon="mdi:cat" width={22} />
            </div>

            <div className="absolute h-full w-full animate-ping rounded-full bg-[#7C5CFF]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}