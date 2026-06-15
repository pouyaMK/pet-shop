
"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import img from "@/public/assets/imgs/icon-pet.jpeg";
import Link from "next/link";

import NotificationModal from "@/app/components/ui/Notification-modal";

export default function Header() {
  const [openNotif, setOpenNotif] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Link
            href="/profile-details"
            className="relative h-13 w-13 overflow-hidden rounded-full border"
          >
            <Image
              src={img}
              alt="avatar"
              fill
              className="object-cover"
            />
          </Link>

          <div>
            <p className="text-sm text-gray-500">خوش برگشتی 👋</p>
            <h2 className="text-xl font-bold text-[#151515]">
              پویا
            </h2>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button className="glass flex h-12 w-12 items-center justify-center rounded-full">
            <Icon icon="solar:gift-outline" width={22} />
          </button>

          {/* NOTIFICATION BUTTON */}
          <button
            onClick={() => setOpenNotif(true)}
            className="glass cursor-pointer relative flex h-12 w-12 items-center justify-center rounded-full"
          >
            <Icon icon="solar:bell-outline" width={22} />
            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
          </button>
        </div>
      </header>

      {/* MODAL OUTSIDE HEADER */}
      <NotificationModal
        open={openNotif}
        onClose={() => setOpenNotif(false)}
      />
    </>
  );
}