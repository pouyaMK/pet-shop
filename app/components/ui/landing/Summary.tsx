"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Summary() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#151515]">
          خلاصه روز پت
        </h2>

        <Link href={'/all-details'} className="text-sm cursor-pointer text-gray-500">
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* خواب */}
        <div className="rounded-[28px] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1F7DA]">
              <Icon
                icon="solar:moon-stars-bold"
                width={22}
              />
            </div>

            <span className="text-xs text-gray-400">
              امروز
            </span>
          </div>

          <h3 className="mt-5 font-bold text-[#151515]">
            خواب
          </h3>

          <p className="mt-2 text-3xl font-extrabold">
            ۸.۲ ساعت
          </p>

          <p className="mt-1 text-sm text-gray-500">
            کیفیت عالی
          </p>
        </div>

        {/* فعالیت */}
        <div className="rounded-[28px] bg-[#151515] p-5 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Icon
                icon="solar:running-bold"
                width={22}
              />
            </div>

            <span className="text-xs text-white/60">
              امروز
            </span>
          </div>

          <h3 className="mt-5 font-bold">
            فعالیت
          </h3>

          <p className="mt-2 text-3xl font-extrabold">
            ۴.۷ کیلومتر
          </p>

          <p className="mt-1 text-sm text-white/70">
            پیاده‌روی روزانه
          </p>
        </div>

        {/* غذا */}
        <Link href={'/food'} className="col-span-2 rounded-[28px] bg-[#F1F7DA] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#151515]">
                تغذیه امروز
              </h3>

              <p className="text-sm text-gray-500">
                وضعیت تغذیه حیوان خانگی
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFA726] text-white">
              <Icon
                icon="mdi:food"
                width={28}
              />
            </div>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white">
            <div className="h-full w-[75%] rounded-full bg-[#FFA726]" />
          </div>

          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>۷۵٪ مصرف شده</span>
            <span>۳ وعده</span>
          </div>
        </Link>
      </div>
    </section>
  );
}