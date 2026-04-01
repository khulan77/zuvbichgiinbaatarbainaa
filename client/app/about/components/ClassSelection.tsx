"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Users, Sparkles, Activity } from "lucide-react";
import IslandOverlay from "./IslandMap";

const classes = [
  {
    id: 1,
    grade: "1-р анги",
    desc: "Үсэг болон богино үгсийг алдаагүй зөв бичиж сурна.",
    students: "1,240",
    avgPerformance: 85,
    color: "#FF6B6B",
    img: "/1-r aral.png",
    effects: ["✏️", "📖", "✨", "🔍", "📝", "🌟"],
  },
  {
    id: 2,
    grade: "2-р анги",
    desc: "Өгүүлбэр болон холбоо үгсийг зөв бичиж сурна.",
    students: "850",
    avgPerformance: 78,
    color: "#4D96FF",
    img: "/2-r aral.png",
    effects: ["🔍", "📝", "🌟", "✏️", "📖", "✨"],
  },
  {
    id: 3,
    grade: "3-р анги",
    desc: "",
    students: "620",
    avgPerformance: 92,
    color: "#6BCB77",
    img: "/3-r aral.png",
    effects: ["🧠", "📚", "⚡", "✏️", "📖", "✨"],
  },
  {
    id: 4,
    grade: "4-р анги",
    desc: "",
    students: "430",
    avgPerformance: 74,
    color: "#FFD93D",
    img: "/4-r aral.png",
    effects: ["✍️", "📖", "📝", "🌟", "✏️"],
  },
  {
    id: 5,
    grade: "5-р анги",
    desc: "",
    students: "310",
    avgPerformance: 88,
    color: "#9254DE",
    img: "/5-r aral.png",
    effects: ["👑", "✍️", "📖", "📝"],
  },
];

const magicVariants = {
  initial: { scale: 0, opacity: 0, y: 0 },
  animate: (i: number) => ({
    scale: [0, 1.2, 1],
    opacity: [0, 1, 0],
    y: -80 - Math.random() * 40,
    x: (Math.random() - 0.5) * 160,
    transition: { duration: 2, repeat: Infinity, delay: i * 0.2 },
  }),
  exit: { scale: 0, opacity: 0 },
};

const ClassSelectionFinal = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  const selectedIslandData = classes.find((c) => c.id === selectedId);

  return (
    <section
      id="class-selection"
      className="relative  bg-white overflow-hidden font-sans py-20 text-[#5D3191]"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24 border-b border-purple-50 pb-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-[#F8F9FF] px-3 py-1 rounded-full border border-purple-50"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span className="text-[#8DC63F] font-black text-[10px] uppercase tracking-widest">
                Аялал эхэллээ
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-[1000] tracking-tighter uppercase italic leading-none">
              АНГИА <span className="text-[#8DC63F]">СОНГОХ</span>
            </h2>
          </div>

          <div className="max-w-xs">
            <p className="text-gray-400 font-bold text-sm md:text-base">
              Өөрийн түвшинд тохирсон ангиа сонгож, цээж бичгийн Баатар
              болоорой!
            </p>
          </div>
        </div>
        <div className="relative space-y-24 md:space-y-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 1200"
              fill="none"
              className="opacity-20"
            >
              <path
                d="M400 50 C 600 150, 200 250, 400 350 S 600 550, 400 650 S 200 850, 400 950 S 600 1150, 400 1250"
                stroke="#8DC63F"
                strokeWidth="6"
                strokeDasharray="12 12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {classes.map((item, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24 z-20`}
              >
                <div className="relative w-full max-w-[220px] md:max-w-[300px] aspect-square group">
                  <div
                    className="absolute inset-0 rounded-full blur-[60px] opacity-10 group-hover:opacity-25 transition-opacity duration-700"
                    style={{ backgroundColor: item.color }}
                  />

                  <motion.div
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedId(item.id)}
                    whileHover={{
                      scale: 1.15,
                      rotate: isEven ? 5 : -5,
                      y: -20,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="relative w-full h-full z-10 cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.grade}
                      className="w-full h-full object-contain animate-float drop-shadow-2xl"
                    />

                    <AnimatePresence>
                      {isHovered && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          {item.effects.map((emoji, i) => (
                            <motion.span
                              key={i}
                              custom={i}
                              variants={magicVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="absolute text-3xl filter drop-shadow-md"
                            >
                              {emoji}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <div
                    className={`absolute -top-2 ${isEven ? "-right-2" : "-left-2"} bg-white p-1.5 rounded-[18px] shadow-xl z-20 border-2 border-gray-50`}
                  >
                    <div
                      className="w-9 h-9 rounded-[14px] flex items-center justify-center text-white font-[1000] text-lg"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.id}
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-1 flex flex-col ${isEven ? "items-center md:items-start text-center md:text-left" : "items-center md:items-end text-center md:text-right"} space-y-6`}
                >
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                      {item.grade}
                    </h3>
                    <p className="text-gray-400 font-bold text-lg max-w-sm leading-snug">
                      {item.desc}
                    </p>
                  </div>

                  <motion.button
                    onClick={() => setSelectedId(item.id)}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#8DC63F",
                      boxShadow: "0px 10px 25px rgba(141, 198, 63, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 bg-[#5D3191] text-white pl-8 pr-3 py-3 rounded-full font-[1000] text-[11px] uppercase tracking-[0.2em] shadow-xl group transition-all duration-300"
                  >
                    Аялалаа эхлэх
                    <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/40 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && selectedIslandData && (
          <IslandOverlay
            island={selectedIslandData}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ClassSelectionFinal;
