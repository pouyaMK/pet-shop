"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const notifications = [
  {
    id: 1,
    title: "سفارش شما تایید شد",
    desc: "سفارش شما با موفقیت ثبت شد",
    time: "2 دقیقه پیش",
  },
  {
    id: 2,
    title: "پیام جدید",
    desc: "یک پیام جدید دریافت کردید",
    time: "1 ساعت پیش",
  },
  {
    id: 3,
    title: "تخفیف ویژه 🎉",
    desc: "تا 50٪ تخفیف امروز فعال است",
    time: "دیروز",
  },
];

type NotificationModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function NotificationModal({ open, onClose  } : NotificationModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
  
            className="fixed inset-0 z-40 bg-black/30"
          />

          {/* MODAL */}
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              fixed right-5 px-4  top-20 z-50 w-80
              rounded-2xl bg-white shadow-xl
              overflow-hidden
            "
            dir="rtl"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-b-orange-300 py-4">
              <h3 className="font-bold text-[#151515]">نوتیفیکیشن‌ها</h3>

              <button onClick={onClose} className="cursor-pointer">
                <Icon icon="solar:close-circle-bold" width={22} />
              </button>
            </div>

            {/* LIST */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-b-purple-300 px-4 py-3 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-400">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className=" w-full flex items-center justify-center">
            <Link href={'all-notification'} className="p-3 w-full py-2  text-center text-xs text-gray-400">
              مشاهده همه
            </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}