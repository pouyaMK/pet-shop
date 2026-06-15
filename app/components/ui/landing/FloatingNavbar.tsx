"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "خانه",
    href: "/",
    icon: "solar:home-2-bold",
  },
  {
    title: "سلامت",
    href: "/health",
    icon: "solar:heart-bold",
  },
  {
    title: "غذا",
    href: "/food",
    icon: "solar:cup-hot-bold",
  },
  {
    title: "پروفایل",
    href: "/profile",
    icon: "solar:user-bold",
  },
];

export default function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-97.5 -translate-x-1/2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass relative flex items-center justify-between rounded-full px-5 py-4"
      >
        {/* LEFT ITEMS */}
        {navItems.slice(0, 2).map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center"
            >
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    h-14
                    w-14
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#7C5CFF]/15
                  "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                  }}
                />
              )}

              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.08 }}
                animate={{ scale: active ? 1.1 : 1 }}
                className={`
                  relative z-10 flex flex-col items-center gap-1
                  transition-colors
                  ${active ? "text-[#7C5CFF]" : "text-gray-500"}
                `}
              >
                <Icon icon={item.icon} width={26} />
                <span className="text-xs">{item.title}</span>
              </motion.div>
            </Link>
          );
        })}

        {/* CENTER BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08, rotate: 8 }}
          whileTap={{ scale: 0.92 }}
          className="
            -mt-12
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#7C5CFF]
            text-white
            shadow-2xl
          "
        >
          <Icon icon="solar:add-circle-bold" width={34} />
        </motion.button>

        {/* RIGHT ITEMS */}
        {navItems.slice(2).map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex  flex-col items-center"
            >
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    h-15
                    w-15
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    
                    bg-[#7C5CFF]/15
                  "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                  }}
                />
              )}

              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.08 }}
                animate={{ scale: active ? 1.1 : 1 }}
                className={`
                  relative z-10 flex flex-col items-center gap-1
                  transition-colors
                  ${active ? "text-[#7C5CFF]" : "text-gray-500"}
                `}
              >
                <Icon icon={item.icon} width={26} />
                <span className="text-xs">{item.title}</span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}