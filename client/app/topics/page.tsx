"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { Lock, Play, ChevronLeft, Map, Star, Sparkles } from "lucide-react";

const topics = [
  { id: 1, title: "Амьтад", icon: "🐾", color: "#F59E7A", locked: false },
  { id: 2, title: "Сансар", icon: "🚀", color: "#8B93D6", locked: false },
  { id: 3, title: "Хоол хүнс", icon: "🍴", color: "#F4C95D", locked: false },
  { id: 4, title: "Сургууль", icon: "🎓", color: "#A8B4C3", locked: true },
  { id: 5, title: "Байгаль", icon: "🌲", color: "#9BCB8F", locked: true },
  { id: 6, title: "Спорт", icon: "🏀", color: "#C79AE0", locked: true },
  { id: 7, title: "Тээвэр", icon: "🚗", color: "#84CFF4", locked: true },
  { id: 8, title: "Далай", icon: "⛵", color: "#88D8D8", locked: true },
  { id: 9, title: "Өнгөнүүд", icon: "🎨", color: "#F29BB8", locked: true },
  { id: 10, title: "Тоо", icon: "🔢", color: "#B8D98A", locked: true },
  { id: 11, title: "Амьтад", icon: "🐾", color: "#F59E7A", locked: true },
  { id: 12, title: "Сансар", icon: "🚀", color: "#8B93D6", locked: true },
  { id: 13, title: "Хоол хүнс", icon: "🍴", color: "#F4C95D", locked: true },
  { id: 14, title: "Сургууль", icon: "🎓", color: "#A8B4C3", locked: true },
  { id: 15, title: "Байгаль", icon: "🌲", color: "#9BCB8F", locked: true },
  { id: 16, title: "Спорт", icon: "🏀", color: "#C79AE0", locked: true },
  { id: 17, title: "Тээвэр", icon: "🚗", color: "#84CFF4", locked: true },
  { id: 18, title: "Далай", icon: "⛵", color: "#88D8D8", locked: true },
  { id: 19, title: "Өнгөнүүд", icon: "🎨", color: "#F29BB8", locked: true },
  { id: 20, title: "Тоо", icon: "🔢", color: "#B8D98A", locked: true },
];

const backgroundMaps: Record<string, string> = {
  "1": "/aral1.png",
  "2": "/aral2.png",
  "3": "/aral3.png",
  "4": "/aral4.png",
  "5": "/aral5.png",
};

function getGradeNumber(rawGrade: string | null) {
  if (!rawGrade) return "5";

  const normalized = decodeURIComponent(rawGrade)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
  if (normalized.includes("1")) return "1";
  if (normalized.includes("2")) return "2";
  if (normalized.includes("3")) return "3";
  if (normalized.includes("4")) return "4";
  if (normalized.includes("5")) return "5";

  return "5";
}

function getGradeLabel(gradeNumber: string) {
  return `${gradeNumber}-Р АНГИ`;
}

export default function TopicsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawGrade = searchParams.get("grade");
  const level = searchParams.get("level") || "1";
  const gradeNumber = getGradeNumber(rawGrade);
  const grade = getGradeLabel(gradeNumber);
  const currentBg = backgroundMaps[gradeNumber] || "/aral5.png";

  const getLevelText = (lvl: string) => {
    if (lvl === "1") return "Амархан";
    if (lvl === "2") return "Дунд";
    return "Хэцүү";
  };

  return (
    <div className="min-h-screen flex flex-col pt-20 font-sans relative overflow-hidden bg-[#EEF2F6]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${currentBg})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-0 bg-white/20 backdrop-blur-[4px]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/10 via-transparent to-slate-300/20" />

      <header className="px-6 md:px-8 py-6 flex items-center justify-between z-20 w-full max-w-[1200px] mx-auto">
        <button
          onClick={() => router.back()}
          className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/70 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <ChevronLeft className="text-[#6B46A6] w-5 h-5" />
        </button>

        <div className="text-center flex justify-center flex-col items-center">
          <h1 className="text-[#F8FAFC] text-4xl md:text-5xl font-black mb-3 italic tracking-tighter drop-shadow-[0_6px_24px_rgba(30,41,59,0.28)]">
            Сэдвээ сонгоорой!
          </h1>
        </div>

        <div className="hidden md:flex w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg items-center justify-center border border-white/70">
          <Sparkles className="w-5 h-5 text-amber-400 fill-current" />
        </div>
      </header>
      <main className="flex-1 px-6 md:px-8 flex flex-col items-center z-10 overflow-y-auto custom-scrollbar pt-4 pb-20">
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          <div className="bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/70 shadow-md flex items-center gap-2">
            <Map className="w-4 h-4 text-[#6B46A6]" />
            <span className="text-[#6B46A6] font-black italic text-xs uppercase tracking-tight">
              {grade}
            </span>
          </div>
          <div className="bg-[#7C5AC2]/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 border border-white/20">
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
            <span className="text-white font-black italic text-[10px] uppercase tracking-wider">
              {getLevelText(level)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1000px] w-full">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.2 }}
              whileHover={
                !topic.locked
                  ? {
                      y: -12,
                      scale: 1.04,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }
                  : {}
              }
              onClick={() =>
                !topic.locked && router.push(`/dictation?topic=${topic.id}`)
              }
              className={`
                group relative overflow-hidden flex flex-col items-center justify-between
                p-6 rounded-[32px] min-h-[235px] border cursor-pointer
                transition-all duration-200
                ${
                  topic.locked
                    ? "bg-slate-300/18 backdrop-blur-md border-white/10 opacity-75 grayscale-[0.15] cursor-not-allowed"
                    : "bg-white/58 backdrop-blur-xl border-white/70 shadow-xl"
                }
              `}
            >
              <div
                className="absolute bottom-0 left-0 w-full h-3 rounded-b-[32px] transition-all duration-200 group-hover:h-5"
                style={{
                  backgroundColor: topic.locked
                    ? "rgba(255,255,255,0.08)"
                    : topic.color,
                }}
              />
              {topic.locked && (
                <Lock className="absolute top-5 right-5 text-white/35 w-4 h-4" />
              )}
              <div
                className="relative w-16 h-16 rounded-[22px] flex items-center justify-center text-4xl mb-4 transition-all duration-200 group-hover:scale-125 group-hover:rotate-12"
                style={{
                  backgroundColor: !topic.locked
                    ? `${topic.color}22`
                    : "rgba(255,255,255,0.10)",
                }}
              >
                <span className="relative drop-shadow-sm">{topic.icon}</span>
              </div>

              <div className="w-full text-center mt-auto">
                <h3
                  className={`text-base font-black mb-4 uppercase tracking-tight ${
                    topic.locked ? "text-white/45" : "text-slate-700"
                  }`}
                >
                  {topic.title}
                </h3>

                {!topic.locked ? (
                  <div
                    className="w-full py-3 rounded-2xl text-white font-black text-[10px] flex items-center justify-center gap-2 uppercase italic tracking-[0.22em] shadow-md transition-all duration-200 group-hover:brightness-110 active:scale-90"
                    style={{ backgroundColor: topic.color }}
                  >
                    <Play size={11} className="fill-current" /> ТОГЛОХ
                  </div>
                ) : (
                  <div className="w-full h-11 bg-white/8 rounded-2xl border border-white/10 flex items-center justify-center">
                    <div className="w-9 h-1.5 bg-white/20 rounded-full" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.35);
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}
