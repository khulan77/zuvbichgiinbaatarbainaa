"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Star, Play, Lock } from "lucide-react";
import Link from "next/link"; // Link нэмэв

interface IslandOverlayProps {
  island: any;
  onClose: () => void;
}

const IslandOverlay = ({ island, onClose }: IslandOverlayProps) => {
  const levels = [
    { id: 1, label: "Амархан", status: "completed", x: 65, y: 72 },
    { id: 2, label: "Дунд", status: "current", x: 32, y: 52 },
    { id: 3, label: "Хэцүү", status: "locked", x: 65, y: 40 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[4px] p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[130] bg-white p-2 rounded-xl shadow-xl hover:scale-110 transition-transform border border-purple-50"
        >
          <X className="w-5 h-5 text-[#5D3191]" />
        </button>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <img
              src={island.img}
              alt={island.grade}
              className="w-[90%] h-[90%] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
            />

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-[25] overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d={`
                  M ${levels[0].x} ${levels[0].y} 
                  Q 50 69, ${levels[1].x} ${levels[1].y} 
                  Q 40 42, ${levels[2].x} ${levels[2].y}
                `}
                fill="none"
                stroke="white"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_4px_rgba(255,255,255,0.9)] opacity-80"
              />
            </svg>

            {levels.map((lvl) => {
              // Locked биш бол Link-ээр орооно, locked бол зүгээр div байна
              const content = (
                <motion.button
                  whileHover={
                    lvl.status !== "locked" ? { scale: 1.1, rotate: 5 } : {}
                  }
                  whileTap={lvl.status !== "locked" ? { scale: 0.9 } : {}}
                  className={`
                    relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center 
                    shadow-[0_6px_0_rgba(0,0,0,0.15)] border-b-4 active:border-b-0 active:translate-y-1
                    transition-all duration-200
                    ${
                      lvl.status === "completed"
                        ? "bg-[#8DC63F] border-[#6ea02f]"
                        : lvl.status === "current"
                          ? "bg-[#5D3191] border-[#3e2061]"
                          : "bg-white border-gray-200 cursor-not-allowed"
                    }
                  `}
                >
                  {lvl.status === "completed" ? (
                    <Star className="w-6 h-6 text-white fill-current" />
                  ) : lvl.status === "current" ? (
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  ) : (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}

                  <div className="absolute -bottom-9 bg-white px-3 py-0.5 rounded-lg shadow-lg border border-purple-50">
                    <span className="text-[9px] font-[1000] text-[#5D3191] uppercase tracking-tighter whitespace-nowrap italic">
                      {lvl.label}
                    </span>
                  </div>
                </motion.button>
              );

              return (
                <div
                  key={lvl.id}
                  style={{ left: `${lvl.x}%`, top: `${lvl.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30"
                >
                  {lvl.status !== "locked" ? (
                    <Link 
                      href={`/topics?grade=${encodeURIComponent(island.grade)}&level=${lvl.id}`}
                      className="no-underline"
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}

                  {lvl.status === "current" && (
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-white/40 rounded-full blur-xl animate-pulse -z-10" />
                  )}
                </div>
              );
            })}
          </motion.div>

          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center pointer-events-none z-[120]">
            <h2 className="text-3xl md:text-4xl font-[1000] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] uppercase italic tracking-tighter">
              {island.grade}
            </h2>
            <div className="bg-[#5D3191] px-4 py-1 rounded-full shadow-lg mt-1 border border-white/20 inline-block">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                ТҮВШИН СОНГОХ
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IslandOverlay;