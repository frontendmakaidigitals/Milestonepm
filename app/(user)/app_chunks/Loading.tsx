"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("name");

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, [pathname, query]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
          >
            {/* Soft glowing circle */}
            <motion.div
              className="absolute rounded-full bg-indigo-300/40 blur-3xl"
              initial={{ scale: 0.7, opacity: 0.4 }}
              animate={{
                scale: [0.9, 1.2, 0.9],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 180,
                height: 180,
              }}
            />

            {/* Main spinning ring */}
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 60 60" width="120" height="120">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A5B4FC" />
                  </linearGradient>
                </defs>
                <circle
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="url(#grad)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="80 60"
                  strokeDashoffset="0"
                />
              </svg>
            </motion.div>

            {/* Smooth pulse text */}
            <motion.span
              className="absolute text-indigo-700 font-semibold tracking-wide text-lg"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
