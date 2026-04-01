"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Lock,
  ChevronLeft,
  Star,
  BookOpen,
  ChevronRight,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

const islandMaps: Record<string, string> = {
  "1": "/1-r aral.png",
  "2": "/2-r aral.png",
  "3": "/3-r aral.png",
  "4": "/4-r aral.png",
  "5": "/5-r aral.png",
};

const topics = [
  {
    id: 1,
    title: "Амьтдын ертөнц",
    desc: "Гэрийн болон зэрлэг амьтад",
    icon: "🦁",
    color: "#FF8E53",
    locked: false,
    progress: 80,
  },
  {
    id: 2,
    title: "Одон орон",
    desc: "Нарны аймаг, одод",
    icon: "👨‍🚀",
    color: "#6C63FF",
    locked: false,
    progress: 45,
  },
  {
    id: 3,
    title: "Амттай хоол",
    desc: "Жимс, ногоо, хоолнууд",
    icon: "🍕",
    color: "#FF6B6B",
    locked: false,
    progress: 10,
  },
  {
    id: 4,
    title: "Миний сургууль",
    desc: "Хичээлийн хэрэгсэл",
    icon: "🏫",
    color: "#4ECDC4",
    locked: true,
    progress: 0,
  },
  {
    id: 5,
    title: "Ногоон байгаль",
    desc: "Ургамал, цэцэгс",
    icon: "🌳",
    color: "#45B649",
    locked: true,
    progress: 0,
  },
  {
    id: 6,
    title: "Дуртай спорт",
    desc: "Хөдөлгөөн, тоглоом",
    icon: "⚽",
    color: "#FFD93D",
    locked: true,
    progress: 0,
  },
  {
    id: 7,
    title: "Тээврийн хэрэгсэл",
    desc: "Машин, онгоц",
    icon: "🚗",
    color: "#A78BFA",
    locked: true,
    progress: 0,
  },
  {
    id: 8,
    title: "Өнгөнүүд",
    desc: "Солонгон өнгө",
    icon: "🎨",
    color: "#F472B6",
    locked: true,
    progress: 0,
  },
];

export default function TopicsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const gradeParam = searchParams.get("grade") || "1";
  const level = searchParams.get("level") || "1";
  const gradeNumber = gradeParam.replace(/[^0-9]/g, "") || "1";
  const currentIsland = islandMaps[gradeNumber] || islandMaps["1"];

  const levelInfo = {
    "1": { text: "Амархан", color: "text-green-500", bg: "bg-green-50" },
    "2": { text: "Дунд", color: "text-orange-500", bg: "bg-orange-50" },
    "3": { text: "Хэцүү", color: "text-red-500", bg: "bg-red-50" },
  }[level] || { text: "Амархан", color: "text-green-500", bg: "bg-green-50" };

  return (
    <div className="flex h-screen bg-[#FDFCFE] font-sans px-25 pt-30 overflow-hidden">
      {/* 🏝️ ЗҮҮН ТАЛ: Шидэт Арал ба Мэдээлэл */}
      <aside className="hidden lg:flex w-[280px] bg-white border-r border-slate-100 flex-col p-6 relative z-30 shadow-[4px_0_24px_rgba(93,49,145,0.02)]">
        <motion.button
          whileHover={{ x: -3 }}
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:text-[#5D3191] hover:bg-purple-50 transition-all mb-8 shadow-sm"
        >
          <ChevronLeft size={20} />
        </motion.button>

        <div className="flex-1 flex flex-col items-center">
          <div className="relative mb-10">
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 group"
            >
              <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-20 scale-125 animate-pulse" />
              <img
                src={currentIsland}
                className="w-48 h-48 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            {/* <div className="mt-6 text-center">
                <h2 className="text-[#5D3191] font-black text-xl tracking-tight italic uppercase">Шидэт Арал</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Таны аялал эндээс эхэлнэ</p>
            </div> */}
          </div>

          <div className="w-full space-y-4">
            <div className="p-4 rounded-[24px] bg-white border border-slate-50 shadow-sm flex items-center gap-4 group hover:border-purple-100 transition-all">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#5D3191]">
                <LayoutGrid size={18} />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">
                  Одоогийн Анги
                </p>
                <p className="text-sm font-black text-[#5D3191]">
                  {gradeNumber}-р анги
                </p>
              </div>
            </div>

            <div className="p-4 rounded-[24px] bg-white border border-slate-50 shadow-sm flex items-center gap-4 group hover:border-purple-100 transition-all">
              <div
                className={`w-9 h-9 rounded-xl ${levelInfo.bg} flex items-center justify-center ${levelInfo.color}`}
              >
                <Star size={18} fill="currentColor" />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">
                  Сонгосон Түвшин
                </p>
                <p className={`text-sm font-black ${levelInfo.color}`}>
                  {levelInfo.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full bg-[#FDFCFE] overflow-hidden relative">
        <div className="flex-1 overflow-y-auto px-10 pt-32 pb-12 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() =>
                  !topic.locked && router.push(`/dictation?topic=${topic.id}`)
                }
                className={`
                  group relative p-6 rounded-[35px] border-2 transition-all duration-500 cursor-pointer overflow-hidden
                  ${
                    topic.locked
                      ? "bg-slate-50 border-transparent opacity-60 grayscale cursor-not-allowed"
                      : "bg-white border-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(93,49,145,0.08)] hover:border-purple-100 hover:-translate-y-2"
                  }
                `}
              >
                {!topic.locked && (
                  <div
                    className="absolute -right-4 -top-4 w-20 h-20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: topic.color }}
                  />
                )}

                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-[24px] flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{
                      backgroundColor: !topic.locked
                        ? `${topic.color}15`
                        : "#f1f5f9",
                    }}
                  >
                    {topic.icon}
                  </div>
                  {!topic.locked && (
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-0.5">
                        Ахиц
                      </span>
                      <span
                        className="text-xs font-black"
                        style={{ color: topic.color }}
                      >
                        {topic.progress}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3
                    className={`font-black text-lg mb-1.5 transition-colors ${topic.locked ? "text-slate-400" : "text-slate-800 group-hover:text-[#5D3191]"}`}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic line-clamp-1">
                    {topic.desc}
                  </p>
                </div>

                {!topic.locked ? (
                  <div className="space-y-4">
                    <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${topic.progress}%` }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: topic.color }}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <Sparkles size={12} className="text-amber-400" />
                        <span
                          className="text-[10px] font-black uppercase tracking-[0.2em]"
                          style={{ color: topic.color }}
                        >
                          ТОГЛОХ
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-50"
                        style={{ backgroundColor: topic.color }}
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-300 font-bold text-[9px] uppercase tracking-widest bg-slate-100/30 py-3.5 rounded-2xl justify-center border border-slate-100/50">
                    <Lock size={12} /> Түгжигдсэн
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}
