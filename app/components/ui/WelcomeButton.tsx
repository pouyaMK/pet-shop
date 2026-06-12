'use client'
import { motion, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function SwipeButton() {
  const x = useMotionValue(0);
  const [done, setDone] = useState(false);

  const maxDrag = 220;

  // تشخیص real-time حرکت
  useMotionValueEvent(x, "change", (latest) => {
    if (latest <= -180 && !done) {
      setDone(true);
    }

    if (latest > -180 && done) {
      setDone(false);
    }
  });

  return (
    <div className="mt-8 w-full relative">

      {/* Track */}
      <div className="relative w-full h-14 rounded-full bg-[#f1e7da] border border-[#e6d6c4] overflow-hidden flex items-center">

        {/* Text */}
        <div className="w-full text-center text-sm font-bold text-[#151515] transition-all">
          {done ? "در حال انتقال به سایت..." : "شروع و خرید"}
        </div>

        {/* Draggable Button */}
        <motion.div
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -180) {
              setTimeout(() => {
                window.location.href = "https://example.com";
              }, 500);
            } else {
              x.set(0);
            }
          }}
          className="absolute right-1 w-12 h-12 rounded-full bg-[#ffa726] flex items-center justify-center shadow-md cursor-grab active:cursor-grabbing"
        >
          <Icon icon="solar:arrow-left-linear" width={22} className="text-[#151515]" />
        </motion.div>

      </div>
    </div>
  );
}